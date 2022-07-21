import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"


// Grab info (All Authors) when the component is loaded
// 1. dbs: Axios
// 2. when the component is loaded: useEffect
// 3. variable that will be changed: useState

const Dashboard = () => {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(res => setAuthors(res.data))
            //console.log on 15 first to make sure u get the array in the inspect
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/authors/${deleteId}`)
            .then(res => {
                const filterList = authors.filter(eachAuthors => eachAuthors._id != deleteId)
                setAuthors(filterList)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to="/new" > Add an Author</Link>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th> Name</th>
                        <th colSpan={2}> Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((eachAuthors, i) => {
                            return (
                                <tr key={i}>
                                    <td><Link to={`/authors/${eachAuthors._id}`}>{eachAuthors.name}</Link></td>
                                    <td><Link to={`/authors/edit/${eachAuthors._id}`}>Edit</Link></td>
                                    <td><button className="btn btn-danger" onClick={e => handleDelete(eachAuthors._id)}> Delete </button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}

export default Dashboard