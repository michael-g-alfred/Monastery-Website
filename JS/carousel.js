const data = [
  {
    img: "Assets/Images/Carousel/01.avif",
    text: "هذا هو النص الخاص بالشريحة الأولى",
  },
  {
    img: "Assets/Images/Carousel/02.avif",
    text: "هذا هو النص الخاص بالشريحة الثانية",
  },
  {
    img: "Assets/Images/Carousel/03.avif",
    text: "هذا هو النص الخاص بالشريحة الثالثة",
  },
  {
    img: "Assets/Images/Carousel/04.avif",
    text: "هذا هو النص الخاص بالشريحة الرابعة",
  },
  {
    img: "Assets/Images/Carousel/05.avif",
    text: "هذا هو النص الخاص بالشريحة الخامسة",
  },
];

let currentIndex = 0;

const carouselCenter = document.querySelector(".carouselItem.center");
const carouselLeft = document.querySelector(".carouselItem.left");
const carouselRight = document.querySelector(".carouselItem.right");
const dotsContainer = document.querySelector(".carouselDots");

// Create dots dynamically
dotsContainer.innerHTML = "";
data.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("carouselDot");
  if (index === currentIndex) dot.classList.add("carouselActive");
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
  });
  dotsContainer.appendChild(dot);
});

// Update carousel
const updateCarousel = () => {
  const prevIndex = (currentIndex - 1 + data.length) % data.length;
  const nextIndex = (currentIndex + 1) % data.length;

  carouselCenter.innerHTML = `
    <img src="${data[currentIndex].img}" alt="center image" class="carouselImages">
    <h2 class="carouselTitle">${data[currentIndex].text}</h2>
  `;

  carouselLeft.innerHTML = `
    <img src="${data[prevIndex].img}" alt="left image" class="carouselImages">
  `;

  carouselRight.innerHTML = `
    <img src="${data[nextIndex].img}" alt="right image" class="carouselImages">
  `;

  document.querySelectorAll(".carouselDot").forEach((dot, index) => {
    dot.classList.toggle("carouselActive", index === currentIndex);
  });
};

// Auto-rotate
setInterval(() => {
  currentIndex = (currentIndex + 1) % data.length;
  updateCarousel();
}, 5000);

// Initial display
updateCarousel();
