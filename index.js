const url = "https://league-of-legends-champions.p.rapidapi.com/champions/en-us/fiddlesticks";
const settings = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "9afec6f9acmsh881e1788037bc49p1f7eb5jsn63030a9dfcbe",
        "X-RapidAPI-Host": "league-of-legends-champions.p.rapidapi.com",
    }
}

// DOM manipulation
const championName = document.getElementById("champion-name");
const championImage = document.getElementById("champion-image");
const championDescription = document.getElementById("champion-description");

// asynchronous programming
// the idea that pieces of code are running in the background, and we can choose to wait for them to finish or not.
// use two keywords to handle this idea - await, async
// async specifies that a method needs to be asynchronous
// await says "WAIT FOR THIS TO FINISH BEFORE MOVING ON!"

// fetch - asynchronous function
// allows us to interact with API through the HTTP process
// this will call our API, often with the settings we provide it
// fetch sends the request to our waiter

// then
// this method is often used with fetch, and essentially queues up an action to perform
// the action we perform is written as an arrow function

// catch
// this is a method that works similarly to try catch. it will catch errors, and allow us to perform a function on those errors

// method-chaining:
// calling a method immediately on another method
// ex. fetch().then().then().catch();

// putting it all together
fetch(url, settings) //grabs information from our API
.then((response) => { return response.json(); }) // transforms our response into JSON
.then((response) => { 
    let champ = response.champion[0];
    console.log(champ);
    championName.innerText = champ.champion_name;
    championImage.src = champ.champion_icon;
    championDescription.innerText = champ.champion_blurb;
}); // performs an action on our JSON object