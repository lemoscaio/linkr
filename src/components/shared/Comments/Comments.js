import React, { useState, useEffect } from "react"
import axios from "axios"

export default function Comments() {
    const URL = `${process.env.REACT_APP_API_URL}`

    const [comments, setComments] = useState([]);

    function getComments() {
        axios
            .get(`${process.env.REACT_APP_API_URL}/comments/3`)
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
        <>
            {
                comments.map((comment) => (
                    <p>{comment.message}</p>
                ))}
            
        </>
    )
}