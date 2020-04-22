import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import axios from "axios";
import { Container, Col, Row, Card } from "reactstrap";
import { Link } from "react-router-dom";
import "./styles.scss";

export default function CharacterList() {
  //Deprecated: from MVP
  //const [characters, setCharacters] = useState([]);
  const [charactersShown, setCharactersShown] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios
      .get(
        searchTerm
          ? `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchTerm}`
          : `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
      )
      .then(res => {
        console.log(res);
        setTotalPages(res.data.info.pages);
        if (!res.data.info.prev) setPageNumber(1);
        setCharactersShown(res.data.results);
      })
      .catch(console.error);
  }, [searchTerm, pageNumber]);

  /*  
    //Old code from MVP search bar behavior
    useEffect(() => {
      searchTerm
        ? setCharactersShown(characters.filter(character =>
          character.name.toLowerCase().includes(searchTerm.toLowerCase())
        ))
        : setCharactersShown(characters);
    }, [searchTerm, characters]); */

  return (
    <div className="character-list">
      <header className="character-list-header">
        <h3>Characters</h3>
        <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} setPageNumber={setPageNumber} />
        <button
          disabled={pageNumber === 1}
          onClick={() => pageNumber >= 1 && setPageNumber(pageNumber - 1)}>
          Previous Page
          </button>
        <button
          disabled={pageNumber === totalPages}
          onClick={() => pageNumber < totalPages && setPageNumber(pageNumber + 1)}>
          Next Page
          </button>
      </header>
      <Container>
        <Row>
          <Col xs="auto" style={{ padding: "0px" }} />
          {charactersShown[0] && charactersShown.map(character =>
            (
              <Card className="mx-auto mb-4" key={character.id}>
                <Link
                  to={{
                    pathname: `/characters/${character.id}`,
                    state: { modal: true }
                  }}
                  className="no-decoration">
                  <CharacterCard {...character} />
                </Link>
              </Card>)
          )}
        </Row>
      </Container>
    </div>
  );
}
