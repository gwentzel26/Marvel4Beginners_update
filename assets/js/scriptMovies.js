var imdbTrailerApi = "https://imdb-api.com/en/API/Trailer/";
// var imdbKey = "k_zcmn64r8/";
var imdbKey = "k_dxu9eccb/";
var movieCard = document.querySelector(".movies-container");


document.addEventListener("click", function (event) {
    if (event.target.id === "movies") {
        getMovieTrailer(event.target.getAttribute("value"));
    } else {
        return;
    }
  });

function getMovieTrailer(movieId) {
    var requestUrl = imdbTrailerApi + imdbKey + movieId;
    var result = fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        postMovieTrailer(data);
      });
    return result;
};

function postMovieTrailer(data) {
    movieCard.textContent = "";
    
    var trailerDiv = document.createElement("div");
    trailerDiv.classList = "d-flex col-xl-8 w-60 h-100 justify-content-center align-items-center";
    movieCard.append(trailerDiv);
    var trailer = document.createElement("iframe");
    trailer.setAttribute("allowFullScreen", true);
    trailer.setAttribute("scale", .75);
    trailer.setAttribute("src", data.linkEmbed);
    trailer.setAttribute("height", "60%");
    trailer.setAttribute("width", "90%");
    trailerDiv.append(trailer);

    var movieDiv = document.createElement("div");
    movieDiv.classList = "d-flex flex-column justify-content-center align-items-center"
    // if (window.innerWidth >= 1000) {
    //   movieDiv.classList = "d-flex flex-row justify-content-center align-items-center"
    // } else {
    //   movieDiv.classList = "d-flex flex-column justify-content-center align-items-center"
    // }
    movieCard.append(movieDiv);
    var title = document.createElement("h3");
    title.textContent = data.fullTitle;
    movieDiv.append(title);
    var description = document.createElement("p");
    description.classList = "text-center pt-8"
    description.textContent = data.videoDescription; 
    movieDiv.append(description);
};