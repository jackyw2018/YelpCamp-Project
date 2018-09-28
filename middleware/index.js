const Campground = require("../models/campground");
const Comment = require("../models/comment");

// all the middleware goes here
let middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next) {
    // is user logged in?
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err){
                req.flash("error", "Campground not found");
                res.redirect("back");
            } else {
                // does user own the campground
                if(foundCampground.author.id.equals(req.user._id)){
                    next();
                } else {
                    req.flash("error", "You do not have the permission to do that");
                    res.redirect("back");
                }
            }
        })
    } else {
        res.redirect("back");
    }
}


middlewareObj.checkCommentOwnership = function(req, res, next) {
        // is user logged in?
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err){
                res.redirect("back");
            } else {
                // does user own the comment
                if(foundComment.author.id.equals(req.user._id)){
                    next();
                } else {
                    req.flash("error", "You do not have permission to do that")
                    res.redirect("back");
                }
            }
        })
    } else {
        req.flash("error", "You need to be logged in to do that")
        res.redirect("back");
    }
}

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    // not flashing anything right away
    // pass a key and a value
    // do it before redirect -> give it capability of adding some data before redirect and data wont persist
    req.flash("error", "You need to be logged in to do that");
    res.redirect("/login");
}

module.exports = middlewareObj;