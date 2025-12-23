function loadPage(url) {
  const main = document.getElementById('content');

  fetch(url)
    .then(response => response.text())
    .then(html => {
      main.innerHTML = html;
    })
    .catch(error => {
      main.innerHTML = '<p>Sorry, could not load this page.</p>';
      console.error(error);
    });
 }