import React, { Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../styles/Main.css";

import HomePage from "../pages/desktop/HomeDesktop";
import AboutPage from "../pages/desktop/AboutDesktop";
import TeamPage from "../pages/desktop/TeamDesktop"
import DesignsPage from "../pages/desktop/DesignDesktop"

const Main = ({ location }) => {
  return (
    <Fragment>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={"fade"}
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={withRouter(HomePage)} />
              <Route path="/about" component={AboutPage} />
              <Route path="/team" component={TeamPage} />
              <Route path="/shop" component={DesignsPage} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
};

export default withRouter(Main);
