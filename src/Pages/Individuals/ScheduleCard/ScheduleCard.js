import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ScheduleItem from "./ScheduleItem";

const ScheduleCard = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("individuals.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div>
      {cards.map((card) => (
        <ScheduleItem key={card._id} card={card} />
      ))}
    </div>
  );
};

export default ScheduleCard;
