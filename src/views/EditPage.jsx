import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'




const EditPage = () => {
    const [name, setName] = useState("")

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/${id}`)
            .then(res => setName(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, { name })
            .then(res => navigate(`/`))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <label className='form-label'> Name</label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                </div>
                <button type="submit" className='btn btn-sucess'> Update Author</button>
                <button type="button" className='btn btn-default' onClick={() => navigate("/")}> Cancel</button>
            </form>
        </div>
    )
}

export default EditPage