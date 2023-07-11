import "../SearchPage.css"
import "../images.css"


const movieSlatePic2 = new URL('../images/movie-slate-open.png', import.meta.url);

export default function Favorite(){
  return(

   <div>
   <h1>FAVORITE PAGE</h1>
   
   <div className="favorite">
      
      <div>
         <h2 className="font-fav">MOVIES</h2>
      </div>
      <br />

      <div>
         <h2 className="font-fav">SERIES</h2>
      </div>
      <br />

      <div>
         <h2 className="font-fav">VIDEOGAMES</h2>
      </div>
     <br />

   </div>
      <div className="col-md-4">
        <img
          className="movie-slate-2"
          src={movieSlatePic2}
          alt="movie-slate-pic-2"
        />
      </div>
</div>

  )}