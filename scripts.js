//Step 1: Grab the Page elements we need

const searchInput = document.getElementById("search");
const statusEl = document.getElementById("status");
const listEl = document.getElementById("list");
const detailEl = document.getElementById("detail")

const buttonEl = document.getElementById("button");

//All the shows live in the array once they load

//Search filters THIS array, so searching csot zero network requests

let allShows = [];

//Step 2: Place order: fetch our TV shows

//We need to address 
const BASE_URL = "https://api.tvmaze.com";

// Every request goes through this helper function. three steps every time:

//1 Order ---. fetch(url)
//2 Check the plate --> res.ok
//3 unwrap ---> res.json()
async function getJSON(path) {
    const response = await fetch(BASE_URL + path);

    return await response.json();
}

//Two way to order from menu

//"/shows?page=0" ---> List of shows ---> an array (shows)

//"/show/1". ---> One Show ---> {} an array (one show);

//Create a function to pull all shows

async function getShows() {
    return await getJSON("/shows?page=0");
}

//Create a function to pull only one show

function getShow(id) {
    return getJSON("/show/" + id)
}


console.log(getShows())

function toCard(raw) {
    return {
        id: raw.id,
        name: raw.name,
        genres: raw.genres,
        year: raw.premiered,
        image: raw.image.medium
    };
}

//Listeners

buttonEl.addEventListener("click", getShow, function(event){
    event.preventDefault();
})