function loadPage(url) {
  const main = document.getElementById('content');

  fetch(url)
    .then(response => response.text())
    .then(html => {
      main.innerHTML = html;
      // Scroll to top of the main content area
      main.scrollTop = 0;
      // Or scroll the page to the top of main
      main.scrollIntoView({ behavior: 'smooth', block: 'start' });
    })
    .catch(error => {
      main.innerHTML = '<p>Sorry, could not load this page.</p>';
      console.error(error);
    });
 }
