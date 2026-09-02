const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");

const app = express();

//mongodb connection
mongoose.connect('mongodb+srv://ktruong3_db_user:QQeUxTTQHQHN1qQE@cluster0.pvjrdan.mongodb.net/myDatabase?retryWrites=true&w=majority')
.then(() => (
    console.log('Connected to ktruong3_db_user')))
.catch((err) => 
    console.log('Error connecting to database', err));

//schema for users
const UserSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('users', UserSchema);

//express setup
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000' //react frontend URL
}));

//sample route to check working backend
app.get("/register", async (req, resp) => {
    resp.send("App is working!");
});

//api to register user
app.post("/register", async (req, resp) => {
    try{
        const user = new User(req.body);
        let result = await user.save();
        if(result){

            console.log("saved to mongodb", result);

            resp.status(201).send(result); // send success response for user
        } else {
            console.log("mongodb error:", e);
            resp.status(400).send("User already registered");
        }
    } catch (e){
        resp.status(500).send({ message: "Something went wrong", err: e.message });
    }
});

// start server
app.listen(5000, () => {
    console.log("App is running on port 5000");
});