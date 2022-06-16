import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

import * as S from "../../styles/style.js";
import { Title, Trends } from "./style.js";

export default function Trending() {
    const URL = `${process.env.REACT_APP_API_URL}/trending`
    const [hashtags, setHashtags] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getHashtags()
    }, []);

    async function getHashtags() {
        try {
            const result = await axios.get(URL);
            setHashtags(result.data);
        } catch {
            alert('Não foi possível carregar as trendings.');
        }
    }

    return (
        <>
            <S.TrendingBox>
                <Title>trending</Title>
                    {hashtags.map((hashtag, i) => (
                        <Trends key={i} onClick={(() => navigate(`/hashtag/${hashtag.name}`))}># {hashtag.name}</Trends>
                    ))}
            </S.TrendingBox>
        </>
    )
}