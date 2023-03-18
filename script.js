function fetchURL() {
  var url = document.getElementById('url').value;
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById('result').innerHTML = data;
    });
}
