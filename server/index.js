const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./Model/model')

const app= express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/login")

app.post("/login", (req,res) => {
    const {email , password}=req.body
    EmployeeModel.findOne({email:email})
    .then(user => {
        if(user) {
            if(user.password === password ) {
                res.json("Success")
            } else {
                res.json("The Password is incorrect")
            }
        } else {
            res.json("User has not signed up")
        }
    })
    .catch(err => console.log(err))
})

app.post("/register" , (req,res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(8000, () => {
    console.log("Server is running")
})