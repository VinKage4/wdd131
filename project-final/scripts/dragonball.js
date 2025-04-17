// Display current year

document.getElementById("currentyear").textContent = new Date().getFullYear();

// Display last modified date
document.getElementById("lastmodified").textContent = `Last modified: ${document.lastModified}`;

// Lazy load images
document.querySelectorAll("img").forEach(img => img.loading = "lazy");

// Toggle feature box state
document.querySelectorAll(".feature-box").forEach(box => {
  box.addEventListener("click", () => {
    box.classList.toggle("active");
  });
});

// Toggle mobile nav menu
const hambutton = document.getElementById("hambutton");
const nav = document.querySelector(".main-nav");

hambutton.addEventListener("click", () => {
  nav.classList.toggle("open");
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
const pages = ["home", "timeline", "characters", "gallery", "contact"];
const links = document.querySelectorAll(".main-nav a, .feature-box");

function showPage(id) {
  pages.forEach(page => {
    const section = document.getElementById(page);
    if (section) {
      section.style.display = (page === id) ? "block" : "none";
    }
  });
}

// Set initial visible page
showPage("home");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.getAttribute("data-page");
    showPage(target);
  });
});

// Character carousel
const characters = [
  {
    name: "Goku",
    src: "images/goku.webp",
    description: "Goku is the main protagonist of the Dragon Ball series. Raised on Earth, he possesses a pure heart and an unrelenting drive to become stronger. Starting as a naive and cheerful boy, Goku grows to become the strongest fighter in the universe, achieving numerous transformations including Super Saiyan and Ultra Instinct. His loyalty, courage, and love for his friends make him the series' most beloved hero. Throughout the series, Goku inspires allies and enemies alike, constantly breaking his own limits and representing the ideal of perseverance and selflessness."
  },
  {
    name: "Vegeta",
    src: "images/vegeta.webp",
    description: "Vegeta is the proud Prince of the fallen Saiyan race. Initially introduced as a villain, his journey throughout the series transforms him into one of Earth’s greatest defenders. Struggling with pride, rivalry, and redemption, Vegeta constantly challenges himself to surpass Goku, evolving into a true warrior with immense power and depth. His character arc is one of growth and complexity, highlighting themes of pride, change, and fatherhood."
  },
  {
    name: "Gohan",
    src: "images/gohan.webp",
    description: "Gohan, the first son of Goku and Chi-Chi, is a hybrid Saiyan with extraordinary potential. Unlike his father, Gohan prefers peace and studies but is compelled to fight in moments of crisis. He plays pivotal roles in defeating Cell and Majin Buu, showcasing his unique balance of intellect and strength. Over time, Gohan evolves into a family man and a scholar, yet his latent strength remains a key asset in the Z Fighters' arsenal."
  },
  {
    name: "Bulma",
    src: "images/bulma.webp",
    description: "Bulma is one of the earliest and most important characters in Dragon Ball. A brilliant scientist and inventor, she creates the Dragon Radar and supports Goku and the Z Fighters with technology throughout the series. Her intelligence, sass, and resourcefulness make her a cornerstone of the Dragon Ball world. From time travel to spaceship design, Bulma’s innovations continuously push the story forward."
  },
  {
    name: "Piccolo",
    src: "images/piccolo.webp",
    description: "Piccolo, originally one of Goku’s fiercest enemies, evolves into a wise and powerful ally. As a Namekian warrior, he mentors Gohan during the Saiyan saga and later becomes one of Earth’s key protectors. His stoic nature hides a deep sense of honor, loyalty, and wisdom. Piccolo represents the power of redemption and the importance of unity across former foes."
  },
  {
    name: "Frieza",
    src: "images/frieza.webp",
    description: "Frieza is a tyrannical galactic emperor and one of the most iconic villains in anime. Known for his ruthless tactics and immense power, he is the catalyst behind the Saiyan genocide. Despite numerous defeats, Frieza returns time and again with greater strength, making him a persistent threat and complex character in the Dragon Ball universe. His cunning, ambition, and constant evolution make him a captivating antagonist."
  }
];

let currentIndex = 0;
const imageElement = document.getElementById("characterImage");
const nameElement = document.getElementById("characterName");
let charDescElement = document.getElementById("characterDesc");
if (!charDescElement) {
  charDescElement = document.createElement("p");
  charDescElement.id = "characterDesc";
  imageElement.after(charDescElement);
}

function updateCharacter() {
  const char = characters[currentIndex];
  imageElement.src = char.src;
  imageElement.alt = char.name;
  nameElement.textContent = char.name;
  charDescElement.textContent = char.description;
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

  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastmodified").textContent = `Last modified: ${document.lastModified}`;
});

// Timeline images
const timelineImages = [
  {
    title: "Dragon Ball",
    src: "images/timeline-dragonball.webp",
    description: "Dragon Ball begins the legendary saga with a young, energetic Goku and his adventure to find the seven mystical Dragon Balls. This part of the series blends humor, adventure, and martial arts as Goku makes friends like Bulma, Master Roshi, and Krillin. It introduces key elements like the World Martial Arts Tournament and shapes Goku’s character through battles, training, and exploration.\n\nAs Goku grows, he encounters powerful opponents such as the Red Ribbon Army and King Piccolo, pushing him to reach new levels of strength. The foundations of loyalty, determination, and friendship laid here ripple through the rest of the franchise."
  },
  {
    title: "Dragon Ball Z",
    src: "images/timeline-z.webp",
    description: "Dragon Ball Z catapults the series into cosmic-scale battles and introduces the concept of Saiyans, energy transformations, and galactic threats. Goku discovers his Saiyan lineage, and the Z Fighters rise to face foes like Vegeta, Frieza, Cell, and Majin Buu. Each arc introduces legendary transformations such as Super Saiyan and Super Saiyan 2.\n\nThemes of sacrifice, rebirth, and protecting loved ones take center stage. DBZ deepens the lore with time travel, fusion techniques, and divine beings, transforming Dragon Ball into one of the most influential anime of all time."
  },
  {
    title: "Dragon Ball GT",
    src: "images/timeline-gt.webp",
    description: "Dragon Ball GT explores new territory by turning Goku into a child and sending him across the galaxy in search of the Black Star Dragon Balls. Though considered non-canon by many fans, GT offers unique characters, creative plotlines, and bold power-ups.\n\nThe Baby Saga, Super Android 17, and the Shadow Dragons arcs explore revenge, legacy, and imbalance in the Dragon Balls’ use. GT introduced Super Saiyan 4, a fan-favorite transformation that blends primal strength with sleek design."
  },
  {
    title: "Dragon Ball Super",
    src: "images/timeline-super.webp",
    description: "Dragon Ball Super elevates the series with new gods, universes, and transformations. It introduces Beerus, the God of Destruction, and Whis, as Goku and Vegeta train to face divine threats. The Universe 6 tournament and the Tournament of Power bring in dozens of new characters, including Jiren and Hit.\n\nSuper delves into Ultra Instinct, a state of instinctual combat mastery. With arcs like the Future Trunks saga and the rise of Moro in the manga, Dragon Ball Super continues to blend legacy, innovation, and high-stakes action, proving the franchise’s timeless appeal."
  }
];

let timelineIndex = 0;
const timelineImg = document.getElementById("timelineImage");
const timelineTitle = document.getElementById("timelineTitle");
const timelinePrevBtn = document.getElementById("timelinePrevBtn");
const timelineNextBtn = document.getElementById("timelineNextBtn");
let timelineDesc = document.getElementById("timelineDesc");
if (!timelineDesc) {
  timelineDesc = document.createElement("p");
  timelineDesc.id = "timelineDesc";
  timelineImg.after(timelineDesc);
}

function updateTimeline() {
  const item = timelineImages[timelineIndex];
  timelineImg.src = item.src;
  timelineImg.alt = item.title;
  timelineTitle.textContent = item.title;
  timelineDesc.textContent = item.description;
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

  document.querySelectorAll("img").forEach(img => {
    img.style.width = "100%";
    if (img.closest("#timeline-carousel")) {
      img.style.maxWidth = "700px";
    } else {
      img.style.maxWidth = "500px";
    }
    img.style.height = "auto";
    img.style.borderRadius = "8px";
    img.style.border = "1px solid var(--card-border)";
    img.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
    img.style.display = "block";
    img.style.margin = "1rem auto";
  });
});
