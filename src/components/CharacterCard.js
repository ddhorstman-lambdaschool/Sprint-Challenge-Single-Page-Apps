import React from "react";
import { CardBody, CardHeader, CardText, CardTitle, CardFooter, CardImg } from "reactstrap";

export default function CharacterCard({ modal, name, status, species, gender, origin, location, image }) {
  const { name: originPlanet/*, url: originPlanetUrl*/ } = origin;
  const { name: currentPlanet/*, url: currentPlanetUrl*/ } = location;
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
