import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
// Have a form, after submit: post at the database
// 1.input: states to track the changes
// 2.Send into the database : axios


const CreatePage = () => {
    const [name, setName] = useState("")

    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/authors`, { name })
            .then(res => navigate("/"))
            .catch(err => {
                const errResponse = err.response.data.errors
                const tempErrArr = []
                for (const eachKey in errResponse) {
                    tempErrArr.push(errResponse[eachKey].message)
                }
                setErrors(tempErrArr)
            })
    }

    return (
        <div>
            <Link to="/" > Home</Link>
            <Link to="/new" > Add a new Author</Link>
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <label className='form-label'> Name</label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                </div>
                <button type="submit" className='btn btn-sucess'> Add Author</button>
                <button type="button" className='btn btn-default' onClick={() => navigate("/")}> Cancel</button>
            </form>
            {
                errors.map((err, i) => {
                    return (
                        <p style={{ color: "red" }}> {err} </p>
                    )
                })
            }
        </div>
    )
}

export default CreatePage