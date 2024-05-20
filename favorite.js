fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=354ac65aebc36d1585a2fe5d1a303b27')
    .then((response) => response.json())
    .then((json) => {
        let section = document.getElementById("listOfFavoriteMovies");

        for (let i = 0; i < json.results.length; i++) {
            let isfavorite = localStorage.getItem("title" + json.results[i].id);
           

            if (isfavorite) {
                // Créer un nouvel élément div pour chaque film favori
                let divMovie = document.createElement("div");
                divMovie.className = 'theMovie';

                // Créer les autres éléments HTML
                let originalTitle = document.createElement("h1");
                let title = document.createElement("h5");
                let language = document.createElement("h6");
                language.className = 'langage';
                let vote = document.createElement("h6");
                vote.className = 'vote';
                let overview = document.createElement("p");
                overview.className = 'overview';
                let date = document.createElement("h6");
                date.className = 'date';
                let poster = document.createElement("img");

                // Remplir les données des films dans les éléments créés
                originalTitle.textContent = json.results[i].original_title;
                title.textContent = json.results[i].title;
                language.textContent = json.results[i].original_language;
                vote.textContent = json.results[i].vote_average;
                date.textContent = json.results[i].release_date;
                overview.textContent = json.results[i].overview;

                let url = "https://image.tmdb.org/t/p/original";
                poster.src = url + json.results[i].poster_path;
                poster.className = 'imgPoster';

                // Ajouter les éléments à divMovie
                divMovie.appendChild(poster);
                divMovie.appendChild(originalTitle);
                divMovie.appendChild(title);
                divMovie.appendChild(language);
                divMovie.appendChild(vote);
                divMovie.appendChild(date);
                divMovie.appendChild(overview);

                // Ajouter divMovie à la section
                section.appendChild(divMovie);
            }
        }
    });
