package edu.ucsb.cs156.example.web;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.annotation.DirtiesContext.ClassMode;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;

import edu.ucsb.cs156.example.WebTestCase;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@ActiveProfiles("integration")
@DirtiesContext(classMode = ClassMode.BEFORE_EACH_TEST_METHOD)
public class OauthWebIT extends WebTestCase {
    @Test
    public void regular_user_can_login() throws Exception {
        setupUser(false);
        
        assertThat(page.getByText("Welcome, cgaucho@ucsb.edu")).isVisible();
        assertThat(page.getByText("Log Out")).isVisible();
    }

    @Test
    public void regular_user_can_login_logout() throws Exception {
        setupUser(false);
        
        page.pause();

        assertThat(page.getByText("Welcome, cgaucho@ucsb.edu")).isVisible();
        assertThat(page.getByText("Log Out")).isVisible();

        page.getByText("Log Out").click();

        page.pause();

        // assertThat(page.getByText("Log In")).isVisible();
        // assertThat(page.getByText("Log Out")).not().isVisible();
    }

}


