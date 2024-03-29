import React from "react";
import NavBar from "./components/NavBar";
import Foot from "./components/Foot";
import Home from "./Home";
import Resource from "./Resource";
import Event from "./Event";
import Teams from "./Teams";
import Hackathon from "./Hackathon";
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import EventDetails from "./EventDetails";
// import Member from "./member";
import Member from "./Member";
// import TeamTshirt from "./TeamTshirt";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/events" component={Event} />
          <Route path="/resources" component={Resource} />
          <Route path="/eventdetails" component={EventDetails} />
          <Route path="/teams" component={Teams} />
          <Route path="/member" component={Member} />
          <Route path="/hackathon" component={Hackathon} />
          {/* <Route path="/team-tshirt" component={TeamTshirt} /> */}
        </Switch>
        <Foot />
      </div>
    </BrowserRouter>
  );
}
