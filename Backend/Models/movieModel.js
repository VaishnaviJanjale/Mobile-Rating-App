const mongoose = require("mongoose")
//creating a schema for your collection
const moviesSchema = new mongoose.Schema(
    {
        'id':Number,'moviename':String,'genre':String,'rating':Number
    }
);
//Create a model using your schema
const MovieReviews = mongoose.model('MovieReviews',moviesSchema)
console.log(MovieReviews)
//export your model to use in your server
module.exports=MovieReviews