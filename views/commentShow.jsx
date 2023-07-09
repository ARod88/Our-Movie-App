const commentShow = ({comment}) =>{
    return(
        <Default>
            <h2>Comment Rating Show Page</h2>
            <h3>{comment.name} has the following description
            about the movie {comment.comment_rating}</h3>
        <form action={`/comments/${comment.id}?_method=DELETE`} method= "POST" > 
            <input type= "submit" value= "DELETE" />
        </form>
        </Default>
    )
}

module.exports = commentShow; 