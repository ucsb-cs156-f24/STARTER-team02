package edu.ucsb.cs156.example.config;

import edu.ucsb.cs156.example.entities.User;
import edu.ucsb.cs156.example.repositories.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.authority.mapping.GrantedAuthoritiesMapper;
import org.springframework.security.oauth2.core.user.OAuth2UserAuthority;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.Http403ForbiddenEntryPoint;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

/**
 * The `SecurityConfig` class in Java configures web security with OAuth2 login,
 * CSRF protection, and
 * role-based authorization based on user email addresses.
 */
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@Slf4j
public class SecurityConfig {

  @Value("${app.admin.emails}")
  private final List<String> adminEmails = new ArrayList<>();

  @Autowired
  UserRepository userRepository;

  /**
   * The `filterChain` method in this Java code configures various security
   * settings for an HTTP request,
   * including authorization, exception handling, OAuth2 login, CSRF protection,
   * and logout behavior.
   * 
   * @param http injected HttpSecurity object (injected by Spring framework)
   */
  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    // http
    // .authorizeHttpRequests(authorize -> authorize.anyRequest().permitAll())
    // //.exceptionHandling(handling -> handling.authenticationEntryPoint(new
    // Http403ForbiddenEntryPoint()))
    // .oauth2Login(
    // oauth2 -> oauth2.userInfoEndpoint(userInfo ->
    // userInfo.userAuthoritiesMapper(this.userAuthoritiesMapper()))
    // // .logout(logout -> logout.logoutRequestMatcher(new
    // AntPathRequestMatcher("/logout"))
    // // .invalidateHttpSession(true)
    // // .clearAuthentication(true)
    // // .logoutSuccessUrl("/")
    // .permitAll()
    // )
    // .csrf(csrf ->
    // csrf.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()));

    http.authorizeHttpRequests(authorize -> authorize
        .requestMatchers("/", "/h2-console/**", "/swagger-ui/**", "/oauth2/**", "/login/**").permitAll()
        .anyRequest()
        .fullyAuthenticated());
    http.csrf(csrf -> csrf.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()));
    http.oauth2Login(oauth2 -> oauth2.userInfoEndpoint(userInfo -> userInfo.userAuthoritiesMapper(userAuthoritiesMapper())));
    http.logout(logout -> logout.logoutRequestMatcher(new AntPathRequestMatcher("/logout")).invalidateHttpSession(true)
        .clearAuthentication(true).logoutSuccessUrl("/").permitAll());
    return http.build();
  }

  // /**
  // * The `webSecurityCustomizer` method is used to configure web security in
  // Java,
  // * specifically ignoring requests
  // * to the "/h2-console/**" path.
  // */
  // @Bean
  // public WebSecurityCustomizer webSecurityCustomizer() {
  // return web -> web.ignoring().requestMatchers("/h2-console/**");
  // }

  private GrantedAuthoritiesMapper userAuthoritiesMapper() {
    return (authorities) -> {
      Set<GrantedAuthority> mappedAuthorities = new HashSet<>();
      log.info("********** authorities={}", authorities);

      authorities.forEach(authority -> {
        log.info("********** authority={}", authority);
        mappedAuthorities.add(authority);
        if (authority instanceof OAuth2UserAuthority oauth2UserAuthority) {
          Map<String, Object> userAttributes = oauth2UserAuthority.getAttributes();
          log.info("********** userAttributes={}", userAttributes);

          mappedAuthorities.add(new SimpleGrantedAuthority("ROLE_USER"));

          String email = (String) userAttributes.get("email");
          if (getAdmin(email)) {
            mappedAuthorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
          }

          if (email.endsWith("@ucsb.edu")) {
            mappedAuthorities.add(new SimpleGrantedAuthority("ROLE_MEMBER"));
          }
        }

      });
      log.info("********** mappedAuthorities={}", mappedAuthorities);
      return mappedAuthorities;
    };
  }

  /**
   * This method checks if the given email belongs to an admin user either from a
   * predefined
   * list or by querying the user repository.
   * 
   * @param email email address of the user
   * @return whether the user with the given email is an admin
   */
  public boolean getAdmin(String email) {
    if (adminEmails.contains(email)) {
      return true;
    }
    Optional<User> u = userRepository.findByEmail(email);
    return u.isPresent() && u.get().getAdmin();
  }
}