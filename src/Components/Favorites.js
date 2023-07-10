import "../SearchPage.css"
import "../images.css"


const movieSlatePic2 = new URL('../images/movie-slate-open.png', import.meta.url);

export default function Favorite(){
  return(

       <div>
         <h1>FAVORITE PAGE</h1>
         
         <div className="favorite-view">
            <div className="section">
               <h2>MOVIES</h2>
            </div>
            <br />

            <div className="section">
               <h2>SERIES</h2>
            </div>
            <br /> 

            <div className="section">
               <h2>VIDEOGAMES</h2>
            </div>
            <br />

            <div className="col-md-4">
              <img
                className="movie-slate-2"
                src={movieSlatePic2}
                alt="movie-slate-pic-2"
              />
            </div>
         </div>
      </div>
    
  )}