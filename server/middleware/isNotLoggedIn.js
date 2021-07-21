function isNotLoggedIn(req, res, next) {
	if (req.session.currentUser) {
		res.json({message: "You are not logged in"});
	} else {
		next();
	}
}

module.exports = isNotLoggedIn;
