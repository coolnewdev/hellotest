function loadUrl(url) {
    if (!url) {
        // If no URL is provided, use the one in the input field
        url = document.getElementById("url-input").value;
    }
  
    // Add the CORS Anywhere proxy URL to the original URL
    url = "https://cors-anywhere.herokuapp.com/" + url;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById("response").innerHTML = xhr.responseText;
    }
    };
    xhr.send();
}
