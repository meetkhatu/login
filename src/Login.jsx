import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/login", {email, password})
        .then(result => { console.log(result)
            if(result.data === "Success"){
            navigate('/home')}})
        .catch(err => console.log(err))
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='container bg-white container border rounded-2 w-25' id="abc">
                <div className='row mt-3'><h1>Register</h1></div>
                <div className='row'>
                    <form onSubmit={ handleSubmit }>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="Email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Password" className="form-label">Password</label>
                            <input type="password" className="form-control" name="Password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button type="submit" className="w-100 btn btn-success" >Login</button>
                        <p>Do not have an account?</p>
                    </form>
                    <Link to="/register" className="mt-3 mb-3 w-100 btn bg-success-subtle border border-2">Signup</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
