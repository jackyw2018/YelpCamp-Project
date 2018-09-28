const mongoose = require("mongoose");
const Campground = require("./models/campground");
const Comment = require("./models/comment");

let data = [
        {
            name: "CLoud's Rest",
            image: "https://grist.files.wordpress.com/2017/05/tent-campsite-by-river.jpg?w=1024&h=576&crop=1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet id odio non mollis. Nunc turpis leo, hendrerit ut interdum et, feugiat eget tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean dapibus sapien in congue fringilla. Mauris ut eleifend nulla, a euismod nisi. Donec ac felis facilisis, tempus dolor sit amet, porttitor libero. Quisque elementum ultrices vestibulum. Pellentesque commodo ex ac diam sagittis, vel condimentum massa interdum. Duis lobortis, justo nec pretium hendrerit, odio felis tincidunt ligula, in fringilla eros quam non turpis. Aliquam erat volutpat. Duis porta eget nunc eget fringilla. Vestibulum et vehicula justo. Donec eget libero et lorem sollicitudin bibendum. Mauris imperdiet nunc eu tempus hendrerit. Donec ac dolor vel tortor placerat consequat."
        },
        {
            name: "Desert Mesa",
            image: "https://cdn1.freshoffthegrid.com/wp-content/uploads/guide-to-free-campsites-in-the-us-and-canada.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet id odio non mollis. Nunc turpis leo, hendrerit ut interdum et, feugiat eget tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean dapibus sapien in congue fringilla. Mauris ut eleifend nulla, a euismod nisi. Donec ac felis facilisis, tempus dolor sit amet, porttitor libero. Quisque elementum ultrices vestibulum. Pellentesque commodo ex ac diam sagittis, vel condimentum massa interdum. Duis lobortis, justo nec pretium hendrerit, odio felis tincidunt ligula, in fringilla eros quam non turpis. Aliquam erat volutpat. Duis porta eget nunc eget fringilla. Vestibulum et vehicula justo. Donec eget libero et lorem sollicitudin bibendum. Mauris imperdiet nunc eu tempus hendrerit. Donec ac dolor vel tortor placerat consequat."
        },
        {
            name: "Canyon Floor",
            image: "https://www.oars.com/wp-content/uploads/2014/07/Rogue-JamesKaiser-570.web_-e1521135113315.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet id odio non mollis. Nunc turpis leo, hendrerit ut interdum et, feugiat eget tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean dapibus sapien in congue fringilla. Mauris ut eleifend nulla, a euismod nisi. Donec ac felis facilisis, tempus dolor sit amet, porttitor libero. Quisque elementum ultrices vestibulum. Pellentesque commodo ex ac diam sagittis, vel condimentum massa interdum. Duis lobortis, justo nec pretium hendrerit, odio felis tincidunt ligula, in fringilla eros quam non turpis. Aliquam erat volutpat. Duis porta eget nunc eget fringilla. Vestibulum et vehicula justo. Donec eget libero et lorem sollicitudin bibendum. Mauris imperdiet nunc eu tempus hendrerit. Donec ac dolor vel tortor placerat consequat."
        }
        
    ]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        // if(err){
        //     console.log(err)
        // } else {
        //     console.log("removed campgrounds")
        //     //add a few campgrounds
        //     data.forEach(function(seed){
        //         Campground.create(seed, function(err, campground){
        //             if(err){
        //                 console.log(err)
        //             } else {
        //                 console.log("added a campground")
        //                 // create a comment
        //                 Comment.create(
        //                     {
        //                         text: "This place is great, but I wish there was internet",
        //                         author: "Homer"
        //                     }, function(err, comment){
        //                         if(err){
        //                             console.log(err)
        //                         } else{
        //                             campground.comments.push(comment);
        //                             campground.save();
        //                             console.log("added a comment")
        //                         }
        //                     }
        //                 )
        //             }
        //         })
        //     })
        // }
    })
    

}

module.exports = seedDB;
