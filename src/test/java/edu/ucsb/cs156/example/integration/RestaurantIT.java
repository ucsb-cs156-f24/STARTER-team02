package edu.ucsb.cs156.example.integration;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.annotation.DirtiesContext.ClassMode;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import com.fasterxml.jackson.databind.ObjectMapper;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;

import edu.ucsb.cs156.example.ControllerTestCase;
import edu.ucsb.cs156.example.controllers.RestaurantsController;
import edu.ucsb.cs156.example.entities.Restaurant;
import edu.ucsb.cs156.example.repositories.RestaurantRepository;
import edu.ucsb.cs156.example.repositories.UserRepository;
import edu.ucsb.cs156.example.services.wiremock.WiremockService;
import edu.ucsb.cs156.example.testconfig.TestConfig;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@AutoConfigureMockMvc
@ActiveProfiles("integration")
@DirtiesContext(classMode = ClassMode.BEFORE_EACH_TEST_METHOD)
public class RestaurantIT {
    @Autowired
    RestaurantRepository restaurantRepository;

    @Autowired
    public MockMvc mockMvc;

    @Autowired
    public ObjectMapper mapper;

    @WithMockUser(roles = { "USER" })
    @Test
    public void test_that_logged_in_user_can_get_by_id_when_the_id_exists() throws Exception {
        // arrange

        Restaurant restaurant = Restaurant.builder()
                .name("Taco Bell")
                .description("Mexican")
                .build();

        restaurantRepository.save(restaurant);

        // act
        MvcResult response = mockMvc.perform(get("/api/restaurants?id=7"))
                .andExpect(status().isOk()).andReturn();

        // assert

        verify(restaurantRepository, times(1)).findById(eq(1L));
        String expectedJson = mapper.writeValueAsString(restaurant);
        String responseString = response.getResponse().getContentAsString();
        assertEquals(expectedJson, responseString);
    }

    @WithMockUser(roles = { "ADMIN", "USER" })
    @Test
    public void an_admin_user_can_post_a_new_restaurant() throws Exception {
            // arrange

            Restaurant restaurant1 = Restaurant.builder()
                            .name("Chipotle")
                            .description("Mexican")
                            .build();

            // act
            MvcResult response = mockMvc.perform(
                            post("/api/restaurants/post?name=Chipotle&description=Mexican")
                                            .with(csrf()))
                            .andExpect(status().isOk()).andReturn();

            // assert
            verify(restaurantRepository, times(1)).save(restaurant1);
            String expectedJson = mapper.writeValueAsString(restaurant1);
            String responseString = response.getResponse().getContentAsString();
            assertEquals(expectedJson, responseString);
    }
}
