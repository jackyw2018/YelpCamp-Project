let mongoose = require("mongoose");

// Schema Setup

let campgroundSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
    description: String,
    author: {
      id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
      },
      username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
})

// make a model taht uses that Schema and has a bunch of methods (i.e. .find)
module.exports = mongoose.model("Campground", campgroundSchema);

