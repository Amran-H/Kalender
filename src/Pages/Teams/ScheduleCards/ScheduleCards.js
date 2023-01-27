import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ScheduleItem from "../../Individuals/ScheduleCard/ScheduleItem";

const ScheduleCards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("teams.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  console.log("Team Schedule", cards);
  return (
    <div className="lg:w-5/6 mx-auto">
      {cards.map((card) => (
        <ScheduleItem key={card._id} card={card} />
      ))}
    </div>
  );
};

export default ScheduleCards;
