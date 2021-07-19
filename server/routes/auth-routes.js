//1 import packages and User model
const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const saltRounds = process.env.SALT || 10;

const User = require('./../models/User.model');

const isNotLoggedIn = require('./../middleware/isNotLoggedIn')

//2 - Create 5 routes: 2 for login, 2 for signup and 1 for logout

router.post("/signup", (req, res)=>{
	const {username, email, password} = req.body

	if(!username ||	!password || !email) res.status(400).json({message: "You proided incorrect signup"})

	User.findOne({username})
	.then(user=> {
		//Check if user already exists
		if(user) {
			res.status(400).json({message: "The username already exist"})
	} else {
		//Hash the password
		const salt = bcrypt.genSaltSync(saltRounds);
		const hash = bcrypt.hashSync(password, salt);

		User.create({username, email, password: hash})
		.then( newUser => res.json(newUser))
		.catch(err=>res.json(err))
	}
	})
})

router.post('/login', (req, res) => {
	//GET VALUES FROM FORM
	const { username, password } = req.body;

	User.findOne({ username })
		.then(user => {
			if (!user) {
				res.json ({message: 'Input invalid'});
			} else {
				
				const encryptedPassword = user.password;
				const passwordCorrect = bcrypt.compareSync(password, encryptedPassword);

				if (passwordCorrect) {
					req.session.currentUser = user;
					res.json({message: "User correctly logged in"});
				} else {
					res.status(400).json({ message: 'Input invalid' });
				}
			}
		})
		.catch(err =>res.json(err));
});

router.get('/logout', (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			res.status(400).json({ message: 'Something went wrong! Yikes!' });
		} else {
			res.json({message: "User succesfully logged out"});
		}
	});
});

module.exports = router;
