import React from "react";
import {NavLink} from "react-router-dom";
import "./styles.scss";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav className="header-nav">
        <NavLink exact to="/"><h3>Home</h3></NavLink>
        <NavLink to="/characters"><h3>Characters</h3></NavLink>
      </nav>
    </header>
  );
}
