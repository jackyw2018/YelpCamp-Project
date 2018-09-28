const express = require("express"),
      app = express(),
      bodyParser = require("body-parser"),
      mongoose = require("mongoose"),
      flash = require("connect-flash"),
      passport = require("passport"),
      LocalStrategy = require("passport-local"),
      methodOverride = require("method-override"),
      Campground = require("./models/campground"),
      Comment = require("./models/comment"),
      User = require("./models/user"),
      seedDB = require("./seeds")

app.use(flash());
// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); // User.Authenticate comes from passportLocalMongoose
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// middleware 
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error")
    res.locals.success = req.flash("success")
    
    next(); // move on to the route handler
})

const commentRoutes = require("./routes/comments")
const campgroundRoutes = require("./routes/campgrounds")
const indexRoutes = require("./routes/index")

// mongoose.connect("mongodb://localhost/yelp_camp")
mongoose.connect("mongodb://jacky:wong123@ds119113.mlab.com:19113/yelpcampjw")
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"))
app.use(methodOverride("_method"));
// seedDB(); // seed the database

// REQUIRING ROUTES
app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);









app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has started!");
})