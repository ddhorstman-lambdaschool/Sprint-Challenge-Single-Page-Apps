import React from "react";

export default function CharacterCard({id, name, status, species, type, gender, origin, location, image, url}) {
  const {name: originPlanet, url: originPlanetUrl} = origin;
  const {name: currentPlanet, url: currentPlanetUrl} = location;
return (
  <section>
    <h2>{name}</h2>
    <img src={image} />
    <ul>
      <li>Species: {species}</li>
      <li>Gender: {gender}</li>
    </ul>
  </section>
);
}
