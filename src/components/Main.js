import React, { Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../styles/Main.css";

import HomePage from "../pages/desktop/HomeDesktop";

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
              {/* <Route path="/about" component={AboutPage} />
              <Route path="/team" component={TeamPage} />
              <Route path="/shop" component={DesignsPage} />
              <Route path="/success" component={SuccessPage} /> */}
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
};

export default withRouter(Main);
