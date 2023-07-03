const React = require('react')

function Def (html) {
    return(
        
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/movies'>Movies</a>
                        </li>
                        <li>
                            <a href='/series'>Series</a>
                        </li>
                        <li>
                            <a href='/videogames'>Video Games</a>
                        </li>
                        <li>
                            <a href='/favorites'>Favorites</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def