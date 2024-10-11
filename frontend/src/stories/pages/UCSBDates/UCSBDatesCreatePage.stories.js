import React from "react";
import { apiCurrentUserFixtures } from "fixtures/currentUserFixtures";
import { systemInfoFixtures } from "fixtures/systemInfoFixtures";
import { http, HttpResponse } from "msw";

import UCSBDatesCreatePage from "main/pages/UCSBDates/UCSBDatesCreatePage";

export default {
  title: "pages/UCSBDates/UCSBDatesCreatePage",
  component: UCSBDatesCreatePage,
};

const Template = () => <UCSBDatesCreatePage storybook={true} />;

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
    http.post("/api/ucsbdates/post", () => {
      return HttpResponse.json({}, { status: 200 });
    }),
  ],
};
