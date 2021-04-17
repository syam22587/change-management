import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import UsersComponent from "../components/users";
import ProjectComponent from "../components/projects";
import HeaderNavbar from "./headerNavbar";
import NotFound from "./notFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <div className="row">
        <div className="col-md-12">
          <HeaderNavbar />
        </div>
      </div>

      <div>
        <Switch>
          <Route exact path="/" component={UsersComponent} />
          <Route exact path="/projects" component={ProjectComponent} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
