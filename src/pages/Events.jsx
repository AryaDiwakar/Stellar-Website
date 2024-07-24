import React from "react";
import HoriNav from "../components/HoriNav";
import "./Events.css";
import events from '../components/Events.json';
import one from "../assets/events/one.jpg";
import two from "../assets/events/two.jpg";
import three from "../assets/events/three.jpg";
import four from "../assets/events/four.jpg";
import five from "../assets/events/five.jpg";
import six from "../assets/events/six.jpg";
import Card from "../components/EventCard";
import Footer from "../components/Footer";

const images = {
  "one": one,
  "two": two,
  "three": three,
  "four": four,
  "five": five,
  "six": six,
}
export default function Events() {
  return (
    <div>
      <HoriNav />
      <div className="eventspage">
        <h1>Events</h1>
        <div className="container eventCards mt-4">
        {events.map(event => {
              return (
                <Card 
                img={images[event.image]}
                key={event.id} 
                desc={event.desc} 
                name={event.name} 
                />
              );
            })}
        </div>
        <div className="foot">
          <Footer />
        </div>
      </div>
    </div>
  );
}


            
