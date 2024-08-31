import React from "react";
import { apiCurrentUserFixtures } from "fixtures/currentUserFixtures";
import { systemInfoFixtures } from "fixtures/systemInfoFixtures";
import { http, HttpResponse } from "msw";

import RestaurantCreatePage from "main/pages/Restaurants/RestaurantCreatePage";

export default {
  title: "pages/Restaurants/RestaurantCreatePage",
  component: RestaurantCreatePage,
};

const Template = () => <RestaurantCreatePage storybook={true} />;

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
    http.post("/api/restaurants/post", () => {
      return HttpResponse.json({}, { status: 200 });
    }),
  ],
};
