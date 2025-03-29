// Get current year
const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Get last modified date
const lastMod = document.lastModified;
document.getElementById("lastmodified").textContent = `Last Modification: ${lastMod}`;

// menu toggle hamburger
const hambutton = document.querySelector('#hambutton');
const navmenu = document.querySelector('#navmenu');

hambutton.addEventListener('click', () => {
  navmenu.classList.toggle('open');
  hambutton.classList.toggle('open');
});
