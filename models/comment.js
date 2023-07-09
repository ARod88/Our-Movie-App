const mongoose = require ("mongoose");
const {Schema} = mongoose;
const Comment = require("../models/comment.js");

const commentSchema = new Schema ({
    name:{
        type:String,
        required: true,
        enum:["Alex W., Kimberly A"],
        
    }
})