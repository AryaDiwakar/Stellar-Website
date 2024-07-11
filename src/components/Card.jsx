import React from "react";
import './Card.css';

export default function Card(props) {
  return (
    <div className="board_card">
        <img src={props.img} />
        <div className="board_name"><p>{props.name}</p></div>
        <div className="board_post"><p>{props.post}</p></div>
    </div>
  );
}