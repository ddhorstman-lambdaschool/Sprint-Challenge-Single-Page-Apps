import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import axios from "axios";
import { Container, Col, Row, Card } from "reactstrap";
import {Link} from "react-router-dom";
import "./styles.scss";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [charactersShown, setCharactersShown] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => { console.log(res); return res; })
      .then(res => setCharacters(res.data.results))
      .catch(console.error);
  }, []);

  useEffect(() => {
    searchTerm
      ? setCharactersShown(characters.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      ))
      : setCharactersShown(characters);
  }, [searchTerm, characters]);

  return (
    <div className="character-list">
      <header className="character-list-header">
        <h2>Characters:</h2>
        <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </header>
      <Container>
        <Row>
          <Col xs="auto" style={{ padding: "0px" }} />
          {charactersShown[0] && charactersShown.map(character =>
            (
              <Card className="mx-auto mb-4" key={character.id}>
                <Link to={`/characters/${character.id}`} className="no-decoration">
                  <CharacterCard {...character} />
                </Link>
              </Card>)
          )}
        </Row>
      </Container>
    </div>
  );
}
