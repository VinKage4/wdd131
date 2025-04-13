// Get current year
const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Get last modified date
const lastMod = document.lastModified;
document.getElementById("lastmodified").textContent = `Last Modification: ${lastMod}`;
