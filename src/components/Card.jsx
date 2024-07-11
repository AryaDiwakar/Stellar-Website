import React from "react";
import './Card.css';

export default function Card(props) {
  return (
    <div className="board_card">
        <img src={props.img} />
        <p className="board_name">{props.name}</p>
        <p>{props.post}</p>
    </div>
  );
}