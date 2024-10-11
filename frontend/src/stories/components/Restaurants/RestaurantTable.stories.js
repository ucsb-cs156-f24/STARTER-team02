import React from "react";
import RestaurantTable from "main/components/Restaurants/RestaurantTable";
import { restaurantFixtures } from "fixtures/restaurantFixtures";
import { currentUserFixtures } from "fixtures/currentUserFixtures";
import { http, HttpResponse } from "msw";

export default {
  title: "components/Restaurants/RestaurantTable",
  component: RestaurantTable,
};

const Template = (args) => {
  return <RestaurantTable {...args} />;
};

export const Empty = Template.bind({});

Empty.args = {
  restaurants: [],
  currentUser: currentUserFixtures.userOnly,
};

export const ThreeItemsOrdinaryUser = Template.bind({});

ThreeItemsOrdinaryUser.args = {
  restaurants: restaurantFixtures.threeRestaurants,
  currentUser: currentUserFixtures.userOnly,
};

export const ThreeItemsAdminUser = Template.bind({});
ThreeItemsAdminUser.args = {
  restaurants: restaurantFixtures.threeRestaurants,
  currentUser: currentUserFixtures.adminUser,
};

ThreeItemsAdminUser.parameters = {
  msw: [
    http.delete("/api/restaurants", () => {
      return HttpResponse.json(
        { message: "Restaurant deleted successfully" },
        { status: 200 },
      );
    }),
  ],
};
