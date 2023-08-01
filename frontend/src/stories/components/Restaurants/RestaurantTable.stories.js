import React from 'react';
import RestaurantTable from 'main/components/Restaurants/RestaurantTable';
import { restaurantFixtures } from 'fixtures/restaurantFixtures';

export default {
    title: 'components/Restaurants/RestaurantTable',
    component: RestaurantTable
};

const Template = (args) => {
    return (
        <RestaurantTable {...args} />
    )
};

export const Empty = Template.bind({});

Empty.args = {
    restaurants: []
};

export const ThreeSubjectsNoButtons = Template.bind({});

ThreeSubjectsNoButtons.args = {
    restaurants: restaurantFixtures.threeRestaurants,
    showButtons: false
};

export const ThreeSubjectsWithButtons = Template.bind({});
ThreeSubjectsWithButtons.args = {
    restaurants: restaurantFixtures.threeRestaurants,
    showButtons: true
};
