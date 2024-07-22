import React, {useState} from "react";
import './EventCard.css';

export default function EventCard(props) {
  const [displayText, setDisplayText] = useState(false);
  const eventDisc = ()=>{
    setDisplayText(!displayText);
  };
  return (
    <div className="eventCard">
        <img src={props.img} className={displayText ? "hideImg": ""}/>
        <div className={displayText ? "eventDisc": "eventDisc hideImg"}><p>{props.desc}</p></div>
        <div className="eventName"><button onClick={eventDisc}><p>{props.name}</p></button></div>
    </div>
  );
}