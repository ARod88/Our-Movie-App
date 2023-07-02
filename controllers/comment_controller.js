const express= require ("express");
const Comment = require ("../models/comment.js");
const commentSeedData = require ("../models/comment_seed.js");

const comments = express.Router();

//ONE TIME COMMENT SEED DATA
comments.get("/data/seed"), (req,res) =>{
    Comment.insertMany(commentSeedData).then (res.redirect ("/comments"));
    res.redirect("/comments");
};

//INDEX - READ ALL
comments.get("/:id"), (req,res) =>{
    const id = req.params.id;
    Comment.findById(id)
        .populate({
            path:'comments',
            options:{limit:4}
        })
        .then((foundComment)=>{
            res.render("commentShow", { comment: foundComment});

        });

//DELETE
comments.delete("/:id", (req,res)=>{
    const id = req.params.id;
    Comment.findbyIdAndDelete(id).then ((deleteComment)=>{
        res.status(303).redirect("/comments")
    });
});
}

module.exports = comments;
