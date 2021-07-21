function isLoggedIn(req, res, next) {
	if (req.session.currentUser) {
		next();
	} else {
		res.json({message: "You are logged in!"});
	}
}

module.exports = isLoggedIn;
