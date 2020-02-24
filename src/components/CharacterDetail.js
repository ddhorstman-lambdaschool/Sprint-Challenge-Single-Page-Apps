import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import { Card, CardFooter } from "reactstrap";
import axios from "axios";
import "./styles.scss";

export default function CharacterDetail(props) {
    const id = props.match.params.id;
    const [characterData, setCharacterData] = useState({});

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => setCharacterData(res.data));
    }, [id]);


    return characterData.name
        ? <Card
            onClick ={e => {
                e.stopPropagation();
                props.history.goBack();
            }}
            className = "character-card-modal"
        >
            <CharacterCard modal={true} {...characterData} />
        </Card>
        : <div />;
}