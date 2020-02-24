import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import {Container, Col, Row } from "reactstrap";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(res => {console.log(res); return res;})
    .then(res => setCharacters(res.data.results))
    .catch(console.error);
  }, []);

  return (
    <Container className="character-list">
      <h2>Characters:</h2>
      <Row>
        <Col xs="auto" style={{padding: "0px" }} />
      {characters[0] && characters.map(character => 
        <CharacterCard key={character.id} {...character} />
      )}
      </Row>
    </Container>
  );
}
