import React from "react";
import BookingSchedule from "../../Individuals/BookingSchedule/BookingSchedule";
import ScheduleCard from "../ScheduleCard/ScheduleCard";

const Individuals = () => {
  return (
    <div className="w-11/12 lg:w-11/12 mx-auto">
      <BookingSchedule />
      <ScheduleCard />
    </div>
  );
};

export default Individuals;
