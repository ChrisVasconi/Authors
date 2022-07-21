import React from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const ViewAuthors = () => {
    const [authors, setAuthors] = useState({ "name": "" })
    // {} is for objects. 
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <Link to="/" > Home</Link>
            <Link to="/new" > Add a new Author</Link>

            <h1> Name: {authors.name} </h1>

        </div>
    )
}

export default ViewAuthors