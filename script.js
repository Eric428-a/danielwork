// script.js

function search() {
  const name = document.getElementById('searchInput').value;

  fetch('http://localhost:3000/scrape', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  })
    .then(response => response.text())
    .then(result => {
      document.getElementById('output').value = result;
    })
    .catch(error => console.error('Error:', error));
}
