import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Content() {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col"></div>
        <div className="col-10">
          {/* <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch> */}
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Content;
