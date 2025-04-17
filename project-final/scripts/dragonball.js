// Display current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Display last modified date
document.getElementById("lastmodified").textContent = `Last modified: ${document.lastModified}`;

// Lazy load images
document.querySelectorAll("img").forEach(img => img.loading = "lazy");

// Toggle feature box state
document.querySelectorAll(".feature-box").forEach(box => {
  box.addEventListener("click", () => {
    alert(`You clicked on: ${box.textContent}`);
    box.classList.toggle("active");
  });
});

// Hero power toggle
const hero = document.querySelector(".hero");
if (localStorage.getItem("hero-mode") === "powered") {
  hero.classList.add("power-up");
}
hero.addEventListener("dblclick", () => {
  hero.classList.toggle("power-up");
  localStorage.setItem("hero-mode", hero.classList.contains("power-up") ? "powered" : "normal");
});

// Simulated page navigation using section toggle
const pages = ["intro", "timeline", "characters", "gallery"];
const links = document.querySelectorAll(".main-nav a");

function showPage(id) {
  pages.forEach(page => {
    const section = document.getElementById(page);
    if (section) {
      section.style.display = (page === id) ? "block" : "none";
    }
  });
}

// Set initial visible page
showPage("intro");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.getAttribute("data-page");
    showPage(target);
  });
});

// Add character images dynamically
const charactersSection = document.getElementById("characters");

const characterImages = [
  { name: "Goku", src: "images/goku.webp" },
  { name: "Vegeta", src: "images/vegeta.webp" },
  { name: "Gohan", src: "images/gohan.webp" },
  { name: "Bulma", src: "images/bulma.webp" },
  { name: "Piccolo", src: "images/piccolo.webp" },
  { name: "Frieza", src: "images/frieza.webp" }
];

const charImgContainer = document.createElement("div");
charImgContainer.style.display = "flex";
charImgContainer.style.flexWrap = "wrap";
charImgContainer.style.justifyContent = "center";
charImgContainer.style.gap = "1rem";
charImgContainer.style.marginTop = "1.5rem";

characterImages.forEach(character => {
  const figure = document.createElement("figure");
  figure.style.textAlign = "center";

  const img = document.createElement("img");
  img.src = character.src;
  img.alt = character.name;
  img.width = 200;
  img.loading = "lazy";
  img.style.borderRadius = "8px";
  img.style.border = "1px solid var(--card-border)";

  const caption = document.createElement("figcaption");
  caption.textContent = character.name;
  caption.style.marginTop = "0.5rem";

  figure.appendChild(img);
  figure.appendChild(caption);
  charImgContainer.appendChild(figure);
});

charactersSection.appendChild(charImgContainer);

// Add images to Dragon Ball Timeline section
const timelineImages = [
    { title: "Dragon Ball", src: "images/timeline-dragonball.webp" },
    { title: "Dragon Ball Z", src: "images/timeline-z.webp" },
    { title: "Dragon Ball GT", src: "images/timeline-gt.webp" },
    { title: "Dragon Ball Super", src: "images/timeline-super.webp" }
  ];
  
  const timelineSection = document.getElementById("timeline");
  
  const timelineGallery = document.createElement("div");
  timelineGallery.style.display = "flex";
  timelineGallery.style.flexWrap = "wrap";
  timelineGallery.style.justifyContent = "center";
  timelineGallery.style.gap = "1rem";
  timelineGallery.style.marginTop = "1.5rem";
  
  timelineImages.forEach(({ title, src }) => {
    const figure = document.createElement("figure");
    figure.style.textAlign = "center";
    figure.style.maxWidth = "240px";
  
    const img = document.createElement("img");
    img.src = src;
    img.alt = title;
    img.width = 220;
    img.loading = "lazy";
    img.style.borderRadius = "8px";
    img.style.border = "1px solid var(--card-border)";
  
    const caption = document.createElement("figcaption");
    caption.textContent = title;
    caption.style.marginTop = "0.5rem";
  
    figure.appendChild(img);
    figure.appendChild(caption);
    timelineGallery.appendChild(figure);
  });
  
  timelineSection.appendChild(timelineGallery);
  