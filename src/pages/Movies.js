import getHash from '../utils/getHash';
import getMovie from '../utils/getMovie';

const Movies =  async () => {

    const hashId = getHash();
    console.log(hashId);
    const movie = await getMovie(hashId);
    
    const view =
        `
        <div class="movies-inner">
            <h2 class="titulo-movie">${movie.title}</h2>
            <article class="movies-caract imagen">
                <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}" alt="${movie.title}">

            </article>

            <article class="movies-caract info-movie">
                <h3 style="margin-top:0!important;">Año: <span>${movie.release_date}</span></h3>
                <h3>Duracion:<span>${movie.runtime}min</span></ </h3>
                <!--<h3>Actores: <span></span></</h3>-->
                <h3>Descripción:<span>${movie.overview}</span></h3>
                <h3>Puntuacion: <span>${movie.vote_average}</span></</h3>
                <h3>Generos: ${movie.genres.map(gen => `${gen.name}` ).join(', ')}<span></span></</h3>
            </article>
        </div> 
        `

    //     for(var i = 0; i < results.length; i++){

    //         consosole.log(results[i]);

        // `
        // <div class="Movies-inner">
        //     <article class="Movies-caract">
        //         <img src="${movies.result.poster_path}" alt="${movies.result.title}">
        //         <h2>${movies.result.title}</h2>
        //     </article>

        //     <article class="Movies-caract">
        //         <h3>Año: <span>${movies.result.release_date}</span></h3>
        //         <h3>Duracion:<span>${movies.result.runtime}min</span></ </h3>
        //         <!--<h3>Actores: <span></span></</h3>-->
        //         <h3>Descripción:<span>${movies.result.overview}</span></h3>
        //         <h3>Puntuacion: <span>${movies.result.vote_average}</span></</h3>
        //         <h3>Generos: <span>${movies.result.genres[0].name}</span></</h3>
        //     </article>
        // </div> 
        // `

    //     }

        
    return view
};
export default Movies;