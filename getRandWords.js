const api_url =
    "https://random-word-api.herokuapp.com/word";

// Defining async function
async function getWord(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    dataArray = data
    console.log(dataArray[0]);

}
getWord(api_url)