// Calculate wind chill
function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
}

// Display wind chill (using fixed values)
function displayWindChill() {
    const temperature = 28; // Celsius
    const windSpeed = 12; // km/h
    const windChillElement = document.getElementById('wind-chill');

    if (windChillElement) {
        if (temperature <= 10 && windSpeed > 4.8) {
            windChillElement.textContent = calculateWindChill(temperature, windSpeed) + 'ºC';
        } 
        else {
            windChillElement.textContent = 'N/A';
        }
    }
}
// Get current year
const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Get last modified date
const lastMod = document.lastModified;
document.getElementById("lastmodified").textContent = `Last Modification: ${lastMod}`;
