import React from "react";
import './EventCard.css';

export default function EventCard(props) {
  return (
    <div className="eventCard">
        <img src={props.img} />
        <div className="eventName"><p>{props.name}</p></div>
    </div>
  );
}