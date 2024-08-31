import React from "react";
import { apiCurrentUserFixtures } from "fixtures/currentUserFixtures";
import { systemInfoFixtures } from "fixtures/systemInfoFixtures";
import { http, HttpResponse } from "msw";

import RestaurantEditPage from "main/pages/Restaurants/RestaurantEditPage";
import { restaurantFixtures } from "fixtures/restaurantFixtures";

export default {
  title: "pages/Restaurants/RestaurantEditPage",
  component: RestaurantEditPage,
};

const Template = () => <RestaurantEditPage storybook={true} />;

export const Default = Template.bind({});
Default.parameters = {
  msw: [
    http.get("/api/currentUser", () => {
      return HttpResponse.json(apiCurrentUserFixtures.userOnly, {
        status: 200,
      });
    }),
    http.get("/api/systemInfo", () => {
      return HttpResponse.json(systemInfoFixtures.showingNeither, {
        status: 200,
      });
    }),
    http.get("/api/restaurants", () => {
      return HttpResponse.json(restaurantFixtures.threeRestaurants[0], {
        status: 200,
      });
    }),
    http.put("/api/restaurants", () => {
      return HttpResponse.json({}, { status: 200 });
    }),
    http.put("/api/restaurants", (req) => {
      window.alert("PUT: " + req.url + " and body: " + req.body);
      return HttpResponse.json({}, { status: 200 });
    }),
  ],
};
