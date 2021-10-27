// import getData from '../utils/getData';
// import Movies from '../pages/Movies';
import getTrending from "../utils/getTrending";
import getPopularity from "../utils/getPopulars";

const Home =  async () => {

    const trending = await getTrending();
    const popularity = await getPopularity();

      var view =  `


        <div class="Movies">
            <div class="trending">

            <h2>Trending</h2>
            <hr>
            <div class="movie-grid">

            ${trending.results.map(trending => 
                `
                <article class="Movies-item">
                    <a href="/#/${trending.id}/">
                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${trending.poster_path}" alt="${trending.title}">
                    <h3>${trending.title}</h3>
                    </a>
                </article>
                        `).join('') }
            
            </div>
                
            
            </div>

            <div class"popular">
                    <h2>Popular</h2>
                    <hr>
                    <div class="movie-grid">

                    ${popularity.results.map(popularity => 
                        `
                        <article class="Movies-item">
                            <a href="/#/${popularity.id}/">
                            <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${popularity.poster_path}" alt="${popularity.title}">
                            <h3>${popularity.title}</h3>
                            </a>
                        </article>
                                `).join('') }
                    
                    </div>
            </div>
        
        </div  
            `
    //}
    
    return view;
}

export default Home;