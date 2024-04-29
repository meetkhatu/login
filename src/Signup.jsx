import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/register", {name,email,password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='container bg-white container border rounded-2 w-25' id="abc">
                <div className='row mt-3'><h1>Register</h1></div>
                <div className='row'>
                    <form onSubmit={ handleSubmit }>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">Name</label>
                            <input type="text" className="form-control" name="Name" placeholder='Enter Name' onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="Email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Password" className="form-label">Password</label>
                            <input type="password" className="form-control" name="Password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button type="submit" className="w-100 btn btn-success" >Register</button>
                        <p>Already have an account?</p>
                    </form>
                    <Link to="/login" className="mt-3 mb-3 w-100 btn bg-success-subtle border border-2">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup
