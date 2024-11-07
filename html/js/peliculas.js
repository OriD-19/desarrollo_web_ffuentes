/**
 * Fetches the top 100 movies from the IMDb API
 * @returns {Promise<void>}
 * @throws {Error}
 *
*/

async function fetchMovies() {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '503b5e08bemshf81bba67e174992p122f18jsn3c5659525793',
            'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        displayMovies(result);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

/**
 * Displays the movies in the document
 * @param {Array} movies
 * @returns {void}
*/
function displayMovies(movies) {
    const moviesContainer = document.getElementById('movies');

    let html = '';
    movies.forEach(movie => {
        const tarjeta = `
        <div class="col-md-3">
            <div class="card">
                <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">${movie.description}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        `
        html += tarjeta;
    }); 

    moviesContainer.innerHTML = html;
}

fetchMovies();
