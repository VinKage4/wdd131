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

// Character carousel
const characters = [
    { name: "Goku", src: "images/goku.webp" },
    { name: "Vegeta", src: "images/vegeta.webp" },
    { name: "Gohan", src: "images/gohan.webp" },
    { name: "Bulma", src: "images/bulma.webp" },
    { name: "Piccolo", src: "images/piccolo.webp" },
    { name: "Frieza", src: "images/frieza.webp" }
  ];
  
  let currentIndex = 0;
  
  const imageElement = document.getElementById("characterImage");
  const nameElement = document.getElementById("characterName");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  
  function updateCharacter() {
    const char = characters[currentIndex];
    imageElement.src = char.src;
    imageElement.alt = char.name;
    nameElement.textContent = char.name;
  }
  
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + characters.length) % characters.length;
    updateCharacter();
  });
  
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % characters.length;
    updateCharacter();
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    updateCharacter();
  
    // Footer data
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastmodified").textContent = `Last modified: ${document.lastModified}`;
  });
  
// Timeline images
  const timelineImages = [
    {
        title: "Dragon Ball",
        src: "images/timeline-dragonball.webp",
        description: "The beginning of Goku's journey as a child discovering martial arts, friendship, and the Dragon Balls."
      },
      {
        title: "Dragon Ball Z",
        src: "images/timeline-z.webp",
        description: "Goku faces powerful foes like the Saiyans, Frieza, Cell, and Majin Buu, discovering Super Saiyan forms."
      },
      {
        title: "Dragon Ball GT",
        src: "images/timeline-gt.webp",
        description: "A side sequel exploring Goku turned into a kid again and introducing Super Saiyan 4 and Baby."
      },
      {
        title: "Dragon Ball Super",
        src: "images/timeline-super.webp",
        description: "The multiverse saga begins with gods, Ultra Instinct, and battles against Jiren, Zamasu, and more."
      }
    ];
  
  let timelineIndex = 0;
  
  const timelineImg = document.getElementById("timelineImage");
  const timelineTitle = document.getElementById("timelineTitle");
  const timelinePrevBtn = document.getElementById("timelinePrevBtn");
  const timelineNextBtn = document.getElementById("timelineNextBtn");
  
  function updateTimeline() {
    const item = timelineImages[timelineIndex];
    timelineImg.src = item.src;
    timelineImg.alt = item.title;
    timelineTitle.textContent = item.title;
    timelineDesc.textContent = current.description;
  }
  
  timelinePrevBtn.addEventListener("click", () => {
    timelineIndex = (timelineIndex - 1 + timelineImages.length) % timelineImages.length;
    updateTimeline();
  });
  
  timelineNextBtn.addEventListener("click", () => {
    timelineIndex = (timelineIndex + 1) % timelineImages.length;
    updateTimeline();
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    updateTimeline();
  });
  