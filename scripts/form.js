const products = [
  { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
  { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
  // 1. Populate Product Dropdown
  const productSelect = document.getElementById("productName");
  if (productSelect) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  }

  // 2. Set Current Year in Footer
  const yearSpan = document.getElementById("currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 3. Set Last Modified Date
  const lastModified = document.getElementById("lastmodified");
  if (lastModified) {
    lastModified.textContent = `Last modified: ${document.lastModified}`;
  }

  // 4. Save & Load Name from localStorage
  const nameInput = document.getElementById("username");
  const form = document.querySelector("form");

  if (nameInput && form) {
    // Load saved name if available
    const savedName = localStorage.getItem("username");
    if (savedName) {
      nameInput.value = savedName;
    }

    // Save name on form submission
    form.addEventListener("submit", () => {
      localStorage.setItem("username", nameInput.value);
    });
  }
});
