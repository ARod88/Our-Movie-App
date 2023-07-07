const React = require('react')
const Def = require('./default')

function error404 () {
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops! Sorry, we cannot find this page !</p>
                <img src='https://cdn.discordapp.com/attachments/1123436724266221581/1126364396747235368/movie-slate.png' alt='Image of Website Logo' />
                {/* image hasnt been styled so its huge on page*/}
            </main>
        </Def>
    )
}

module.exports = error404