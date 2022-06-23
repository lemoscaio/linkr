import React, { useState, useEffect } from "react"
import axios from "axios"

import * as S from "../../../styles/style.js"

export default function Comments({ postId, showComment }) {
    const URL = `${process.env.REACT_APP_API_URL}`

    const [comments, setComments] = useState([]);

    function getComments() {
        axios
            .get(`${process.env.REACT_APP_API_URL}/comments/${postId}`)
            .then((response) => {
                console.log("🚀 ~ response", response)
                setComments([...response.data])
            })
            .catch((error) => {
                console.log("🚀 ~ error", error)
            })
    }

    useEffect(() => {
        getComments()
    }, [])

    console.log(comments)

    return (
        <S.CommentsBox showComment={showComment}>
            {
                comments.map((comment) => (
                    <S.Comment>
                        <img src={comment.userImage} alt={comment.username} />
                        <div>
                            <h1>{comment.username}</h1>
                            <p>{comment.message}</p>
                        </div>
                    </S.Comment>
                ))}

        </S.CommentsBox>
    )
}