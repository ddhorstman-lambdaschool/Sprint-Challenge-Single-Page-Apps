import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import { Route } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail.js";

export default function App() {
  return (
    <main>
      <Header />
      <Route path="/characters/:id" component={CharacterDetail} />
      <Route exact path="/characters" render={() => <CharacterList />} />
      <Route exact path="/" render={() => <WelcomePage />} />
    </main>
  );
}
