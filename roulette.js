const spinBtn = document.getElementById("spin");
const statusEl = document.getElementById("status");
const resultEl = document.getElementById("result");

//Add our event 
spinBtn.addEventListener("click", async function() {
    //1. Pick a random show id from 1 to 240
    const id = Math.floor(Math.random() * 240) + 1;
    
    resultEl.textContent = "";

    statusEl.textContent = "Spinning.....channel #" + id;

//2. Ask for API

const res = await fetch("https://api.tvmaze.com/shows/" + id)

//3. fetch does NOT return a 404
if(!res.ok){
    statusEl.textContent = "There was an Error trying to find your show, spin again."
    return
}

//4. Turn JSON into JS object

    const show = await res.json()

//5. Draw it on our page

    if(show.image) {
        const img = document.createElement("img");
        img.src = show.image.medium;

        resultEl.appendChild(img);
    }

    const title = document.createElement("h2");
    title.textContent = show.name;
    resultEl.appendChild(title);

    //Adding the Rating
    const rating = document.createElement("p");
    if(show.rating.average)
    {
        rating.textContent = "Rating: " + show.rating.average;
        resultEl.appendChild(rating);
    }
    else
    {
        rating.textContent = "No Rating....";
    }
   
    

})