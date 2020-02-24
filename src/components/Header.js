import React from "react";
import {Link} from "react-router-dom";
import "./styles.scss";

function randomInt(number){
  return Math.floor(number*Math.random())+1;
}

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav className="header-nav">
        <Link to="/"><h3>Home</h3></Link>
        <Link to="/characters"><h3>Characters</h3></Link>
      </nav>
    </header>
  );
}
