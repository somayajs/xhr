let image = document.getElementById("car");
const responseMethode = function (xhr) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      console.log(response);
      image.src = response.results[0].urls.thumb
      console.log(response.results[0].urls.regular);
    } else if (xhr.status === 429) {
      console.log("Your API key exceeds the rate limits so it would become temporarily blocked.")
    } else if (xhr.status === 404) {
      console.log("HTTP error 404. page not found")
    }else {
      console.log(xhr.responseText)
    }
  }
}
const createHttpRequest = function(url) {
  const xhr = new XMLHttpRequest(url);
  xhr.onreadystatechange = () => {
    responseMethode(xhr);
  }
  xhr.open("get", url);
  xhr.send()
}

createHttpRequest('https://api.unsplash.com/search/photos?page=1&query=car&client_id=keysgoeshere')
