export default function NavBar () {
    return(
        <main className="NavBarStyle">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#" style={{padding: 15}}>MOVIES R US</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link" href="#">Home</a>
                    <a class="nav-item nav-link" href="#">Top Rated</a>
                    <a class="nav-item nav-link" href="#">Favorites</a>
                    <a class="nav-item nav-link" href="#">Watch Later</a>
                </div>
                </div>
    
                <form class="form-inline" style={{padding: 15}}>
                    <input class="searchinput" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </main>
        )
    }