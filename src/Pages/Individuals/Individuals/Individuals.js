import React from "react";
import BookingSchedule from "../../Individuals/BookingSchedule/BookingSchedule";
import ScheduleCard from "../ScheduleCard/ScheduleCard";

const Individuals = () => {
  return (
    <div className="lg:w-5/6 mx-auto">
      <BookingSchedule />
      <ScheduleCard />
    </div>
  );
};

export default Individuals;
