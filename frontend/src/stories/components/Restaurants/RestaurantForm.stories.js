import React from 'react';
import RestaurantForm from "main/components/Restaurants/RestaurantForm"
import { restaurantFixtures } from 'fixtures/restaurantFixtures';

export default {
    title: 'components/Restaurants/RestaurantForm',
    component: RestaurantForm
};

const Template = (args) => {
    return (
        <RestaurantForm {...args} />
    )
};

export const Default = Template.bind({});

Default.args = {
    submitText: "Create",
    submitAction: () => { console.log("Submit was clicked"); }
};

export const Show = Template.bind({});

Show.args = {
    Restaurant: restaurantFixtures.oneRestaurant,
    submitText: "",
    submitAction: () => { }
};