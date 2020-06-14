import React from "react";
import { Switch, Route } from "react-router-dom";

import Env from "~/utils/env";
import { ConnectedRouter } from "connected-react-router";

import { history } from "@store/index";

import Components from "@pages/Components";
import Login from "@pages/Login";
import Services from "@pages/Services";
import UserInfo from "@pages/UserInfo";

import Template from "@components/Template";

const Routes: React.FC = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/login" component={Login} />

      <Route exact path="/user-info">
        <Template>
          <UserInfo />
        </Template>
      </Route>

      <Route exact path="/">
        <Template>
          <Services />
        </Template>
      </Route>

      {Env("ENV") === "DEV" && (
        <Route exact path="/components" component={Components} />
      )}
    </Switch>
  </ConnectedRouter>
);

export default Routes;
