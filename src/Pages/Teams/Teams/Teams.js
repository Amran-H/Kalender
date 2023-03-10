import React from "react";

import ScheduleCards from "../ScheduleCards/ScheduleCards";

import TeamsBooking from "../TeamsBooking";

const Teams = () => {
  return (
    <div className="w-11/12 lg:w-11/12 mx-auto">
      <TeamsBooking />
      <ScheduleCards />
    </div>
  );
};

export default Teams;
