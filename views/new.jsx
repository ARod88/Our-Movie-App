const React = require("react");
const Default = require("./default");

const New = ({title, comments}) => {
    return(
        <Default>
            <h2> A new comment</h2>
            <form action="/comments" method="POST">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            </form>
        </Default>
    )
}

module.exports= New; 