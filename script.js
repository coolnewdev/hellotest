function loadUrl() {
  var input = document.getElementById("url-input").value;
  var url = "https://cors-anywhere.herokuapp.com/" + input;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById("response").innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}
