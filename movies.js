
fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=354ac65aebc36d1585a2fe5d1a303b27')
    .then((response) => response.json())
    .then((json) => {

        let moviesName = [];
        let moviestitle = [];
        let moviesLanguage = [];
        let moviesOverview = [];
        let moviesPoster = [];
        let moviesVote = [];
        let moviesDate = [];

        for (let i = 0; i < json.results.length; i++) {
            //movie's originale title
            moviesName.push(json.results[i].original_title);
            //movie's  title
            moviestitle.push(json.results[i].title);
            //movie's original language
            moviesLanguage.push(json.results[i].original_language);
            //movie's overview
            moviesOverview.push(json.results[i].overview);
            //movie's poster
            moviesPoster.push(json.results[i].poster_path);
            //movie's vote
            moviesVote.push(json.results[i].vote_average);
            //movie's release date
            moviesDate.push(json.results[i].release_date);
            //creat HTML's elements
            let section = document.getElementById("listOfMovies");
            let divMovie = document.createElement("div");
            divMovie.className = 'theMovie';
            let originalTitle = document.createElement("h1");
            let title = document.createElement("h5");
            title.className = "titleOfMovie";
            let language = document.createElement("h6");
            language.className = 'langage';
            let vote = document.createElement("h6");
            vote.className = 'vote'
            let overview = document.createElement("p");
            overview.className = 'overview'
            let date = document.createElement("h6");
            date.className = 'date';
            let poster = document.createElement("img");
            //textContent:
            originalTitle.textContent = moviesName[i];
            title.textContent = moviestitle[i];
            language.textContent = moviesLanguage[i];
            vote.textContent = moviesVote[i];
            date.textContent = moviesDate[i];
            overview.textContent = moviesOverview[i];

            let url = "https://image.tmdb.org/t/p/original"
            poster.src = url + moviesPoster[i];
            poster.className = 'imgPoster';

            //favorite
            let favoriteDiv = document.createElement("form");
            favoriteDiv.className = 'FavoriteDiv';
            let favorite = document.createElement("input");
            favorite.type = "radio";
            favorite.name = "favoriteOption";
            favorite.className = 'buttonRadio';
            let isRadioChecked = false;
            //
            let isfavorite = localStorage.getItem("title" + json.results[i].id);
            if (isfavorite) {
                isRadioChecked = true;
                favoriteDiv.style.backgroundColor = "rgba(249, 168, 37, 1)";
            }

            favorite.addEventListener('click', function () {
                isRadioChecked = !isRadioChecked;
                favorite.checked = isRadioChecked;
                let keytitle = "title" + json.results[i].id;

                if (isRadioChecked) {
                    favoriteDiv.style.backgroundColor = "rgba(249, 168, 37, 1)";
                    //local storage 
                    localStorage.setItem(keytitle, title.textContent);
                } else {
                    favoriteDiv.style.backgroundColor = "#fff";
                    //local storage
                    localStorage.removeItem(keytitle);
                }

            })

            divMovie.appendChild(favoriteDiv);
            favoriteDiv.appendChild(favorite);


            //apendChild
            section.appendChild(divMovie)
            divMovie.appendChild(poster);
            divMovie.appendChild(originalTitle);
            divMovie.appendChild(title);
            divMovie.appendChild(language);
            divMovie.appendChild(vote);
            divMovie.appendChild(date);
            divMovie.appendChild(overview);


            //details 
            let detailsDiv = document.createElement("div");
            detailsDiv.className = 'detailsDiv';
            let details = document.createElement("a");
            details.textContent = "See More"
            details.className = "details"
            divMovie.appendChild(detailsDiv);
            detailsDiv.appendChild(details);
            
            details.href = "details.html?id=" + json.results[i].id;
            let linksDetails = document.querySelectorAll("section a");
            linksDetails.forEach((link) => {
                link.addEventListener("click", function (event) {
                    event.preventDefault();
                    window.location.href = link.href;
                });
            })


            //search function 

            document.getElementById("searchInput").addEventListener("input", function () {
                let searchTerm = this.value.toLowerCase();

                let movies = document.querySelectorAll('.theMovie');
                movies.forEach(function (movie) {
                    let title = movie.querySelector('h5').textContent.toLowerCase();

                    if (title.startsWith(searchTerm)) {
                        movie.style.display = 'block'; 
                    } else {
                        movie.style.display = 'none'; 
                    }
                });
            });







        }

    });




