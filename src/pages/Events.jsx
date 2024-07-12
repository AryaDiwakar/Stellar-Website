import React from "react";
import HoriNav from "../components/HoriNav";
import "./Events.css";
import event1 from "../assets/events/Astro Symposium.jpg";
import event2 from "../assets/events/Celestial Dive.jpg";
import event3 from "../assets/events/Cosmic Walk.jpg";
import event4 from "../assets/events/SkyForge.jpg";
import event5 from "../assets/events/WORKSHOP ON CELESTIA .jpg";
import event6 from "../assets/events/Yantra Event on JWST.jpg";
import Card from "../components/EventCard";

export default function Events() {
  return (
    <div>
      <HoriNav />
      <div className="eventspage">
        <h1>Events</h1>
        <div className="container eventCards mt-4">
          <Card img={event1} name={"Astro Symposium"} />
          <Card img={event2} name={"Celestial Dive"} />
          <Card img={event3} name={"Cosmic Walk"} />
          <Card img={event4} name={"SkyForge"} />
          <Card img={event5} name={"WORKSHOP ON CELESTIA"} />
          <Card img={event6} name={"Yantra Event on JWST"} />
        </div>
      </div>
    </div>
  );
}
