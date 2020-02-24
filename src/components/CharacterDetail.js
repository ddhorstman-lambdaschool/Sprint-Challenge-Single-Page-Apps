import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CharacterDetail(props) {
    const id = props.match.params.id;
    const [characterData, setCharacterData] = useState({});

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => setCharacterData(res.data));
    }, [id]);

    return characterData.name
        ? <CharacterCard {...characterData} />
        : <div />;
}