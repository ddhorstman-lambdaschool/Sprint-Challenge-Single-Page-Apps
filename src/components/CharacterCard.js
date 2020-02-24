import React from "react";
import { Card, CardBody, CardHeader, CardText, CardTitle, CardFooter, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

export default function CharacterCard({ modal, id, name, status, species, type, gender, origin, location, image, url }) {
  const { name: originPlanet, url: originPlanetUrl } = origin;
  const { name: currentPlanet, url: currentPlanetUrl } = location;
  return (
    <span>
      <CardHeader>
        <CardTitle tag="h2">{name}</CardTitle>
      </CardHeader>
      <CardBody>
        <CardImg src={image} />
        {modal && (
          <span>
            <CardText>Species: {species}</CardText>
            <CardText>Gender: {gender}</CardText>
            <CardText>Status: {status}</CardText>
            <CardText>Origin: {originPlanet}</CardText>
            <CardText>Location: {currentPlanet}</CardText>
          </span>
        )}
      </CardBody>
      {modal && <CardFooter><button>Close</button></CardFooter>}
    </span>
  );
}
