const Listing = require("../models/listing");
const Review = require("../models/review");
const User = require("../models/user");
module.exports.renderSignup = (req, res) => {
    res.render("user/signup.ejs");
};


module.exports.signup = async (req, res) => {
    try {
        let { email, username, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if (err) return next(err);
            req.flash("success", "Welcome to Wanderlust");
            res.redirect("/listings");
        });

    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};
module.exports.renderLogin = (req, res) => {
    res.render("user/login.ejs");
};

module.exports.login = 
    async (req, res) => {
        req.flash("success", "Welcome back to Wanderlust!");
        res.redirect(res.locals.redirectUrl || "/listings");
    };

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) { return next(err); }
        req.flash("success", "Logged you out!");
        res.redirect("/listings");
    });
};