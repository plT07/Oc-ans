//copyright dynamic
const startYear = 2025;
const currentYear = new Date().getFullYear();

const yearSpan = document.getElementById('copyright');

if (currentYear > startYear) {
    yearSpan.textContent = startYear + ' - ' + currentYear;
   } else {
    yearSpan.textContent = String(startYear); 
}