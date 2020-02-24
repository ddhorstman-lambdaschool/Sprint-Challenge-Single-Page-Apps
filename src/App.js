import React, { Component } from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail.js";

class App extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    let { location } = this.props;

    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    let { location } = this.props;

    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render

    return (
      <main>
        <Header />
        <Switch location={isModal ? this.previousLocation : location}>
          <Route path="/characters/:id" component={CharacterDetail} />
          <Route path="/characters" component={CharacterList} />
          <Route exact path="/" component={WelcomePage} />
        </Switch>
        {isModal && <Route path="/characters/:id" component={CharacterDetail} />}
      </main>
    );
  }
}
export default function WrappedApp() {
  return (
    <Router>
      <Route component={App} />
    </Router>
  );
};
