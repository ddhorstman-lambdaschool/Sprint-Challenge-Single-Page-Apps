import React from "react";

export default function CharacterCard({id, name, status, species, type, gender, origin, location, image, url}) {
  const {name: originPlanet, url: originPlanetUrl} = origin;
  const {name: currentPlanet, url: currentPlanetUrl} = location;
return <span>{name}</span>;
}
