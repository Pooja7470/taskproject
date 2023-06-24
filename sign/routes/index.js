var express = require('express');
var router = express.Router();


const User = require("../models/userModel");


const passport = require("passport");
const LocalStrategy = require("passport-local");
const { title } = require('process');
const { findOne } = require('../models/userModel');
passport.use(new LocalStrategy(User.authenticate()));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render("index", {
    title: "Homepage",
    isLoggedIn: req.user ? true : false,
    user: req.user,
  });
});

router.get("/signup", function (req, res, next) {
  res.render("signup", {
    title: "Signup",
    isLoggedIn: req.user ? true : false,
    user: req.user,
  });
});

router.get("/signin", function (req, res, next) {
  res.render("signin", {
    title: "Signin",
    isLoggedIn: req.user ? true : false,
    user: req.user,
  });
});

router.post("/signin", passport.authenticate("local", {
  successRedirect: "/registration",
  failureRedirect: "/signin",

}),
  function (req, res, next) { }
);


router.get("/registration", function(req,res,next){
  res.render("registration",{
    title:"registration"
  })
})

router.post("/registration", function(req,res,next){
  const { username, email, password } = req.body;
  User.register({ username, email },password)
  .then((user) => {
    res.redirect("/signin")
  })
  .catch((error) => res.send(error));
});


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/signin");
  }
};


module.exports = router;
