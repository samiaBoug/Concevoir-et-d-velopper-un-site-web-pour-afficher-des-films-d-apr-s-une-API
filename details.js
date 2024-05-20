window.onload = function () {
    // get ID of a movie
    let urlParams = new URLSearchParams(window.location.search);
    let movieID = urlParams.get('id');
    let url = 'https://api.themoviedb.org/3/movie/'+movieID+'?api_key=354ac65aebc36d1585a2fe5d1a303b27';
    fetch(url)
        .then((response) => response.json())
        .then((json) => { 
            //get the details of a movie 
            let budget = json.budget;
            let genres = []
            for (i = 0; i < json.genres.length; i++){
                genres.push(json.genres[i].name)
            }
            let production = [];
            for (i = 0; i < json.production_companies.length; i++) {
                production.push(json.production_companies[i].name)
            }
            let releaseDate = json.release_date;
            let spokenlanguages = [];
            for (i = 0; i < json.spoken_languages.length; i++) {
                production.push(json.spoken_languages[i].name)
            }
            let status = json.status;
            let title = json.title;
            let vote = json.vote_average;
            let tagline = json.tagline;
            let homepage = json.homepage;
            //create html
            let titleMovie = document.createElement("h1");
            let genreMovie = document.createElement("h6");
            let homepageDiv = document.createElement("h6");

            let line = document.createElement("h6");
            let voteMovie = document.createElement("h6");
            let statusMovie = document.createElement("h6");
            let date = document.createElement("h6");
            let language = document.createElement("h6");
            let productionCompany = document.createElement("h6")
            let budgetMovie = document.createElement("h6");
            let imgDiv = document.createElement("img");
            // textContent 
            titleMovie.textContent = title;
            genreMovie.textContent = genres.join(" - ");
            homepageDiv.textContent = homepage;
            line.textContent = tagline;
            voteMovie.textContent = vote;
            statusMovie.textContent = status;
            date.textContent = releaseDate;
            language.textContent = spokenlanguages;
            productionCompany.textContent = production.join(" - ");
            budgetMovie.textContent = budget;
            imgDiv.src = "https://image.tmdb.org/t/p/original" + json.belongs_to_collection.poster_path;

            //
            let originalTitle = document.getElementById("originalTitle")
            originalTitle.appendChild(titleMovie);
            let Genres = document.getElementById("Genres")
            Genres.appendChild(genreMovie);
            let Homepage = document.getElementById("Homepage")
            Homepage.appendChild(homepageDiv);
            let budgetDiv = document.getElementById("budget")
            budgetDiv.appendChild(budgetMovie);
            let ProductionCompanies = document.getElementById("ProductionCompanies");
            ProductionCompanies.appendChild(productionCompany);
            let ReleaseDate = document.getElementById("releaseDate")
            ReleaseDate.appendChild(date);
            let tagLine = document.getElementById("tagline")
            tagLine.appendChild(line)
           
            let divOfImg = document.getElementById("imgDiv");
            divOfImg.appendChild(imgDiv);

           
            let section = document.getElementById("content");
            // Set the background image for the pseudo-element
            section.style.position = "relative";
            section.style.overflow = "hidden";

            let pseudoElement = document.createElement("div");
            pseudoElement.style.position = "absolute";
            pseudoElement.style.top = "0";
            pseudoElement.style.left = "0";
            pseudoElement.style.width = "100%";
            pseudoElement.style.height = "100%";
            pseudoElement.style.backgroundImage = "url('https://image.tmdb.org/t/p/original" + json.belongs_to_collection.poster_path + "')";
            pseudoElement.style.backgroundSize = "cover";
            pseudoElement.style.filter = "blur(0.3rem)"; 
            pseudoElement.style.opacity = "0.5"; 

            section.appendChild(pseudoElement);

            // ...




           

        })

}

