const api_url = "https://zenquotes.io/api/random";
const quote = document.getElementById("quote")
const author = document.getElementById("author")

async function getQuotes(url) {
  try {
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
    const result = await response.json();
    const data = JSON.parse(result.contents);
    console.log(data[0].q + " — " + data[0].a);
    console.log(data);
    // quote.innerHTML=



  } catch (error) {
    console.error("Error fetching quote:", error);
  }
 
}

getQuotes(api_url);
