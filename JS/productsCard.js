var content04 = document.querySelector("#content04");

// Custom productsCardData for each newsCard, including image source
var productsCardData = [
  {
    title: "برطمان مخلل ١كجم",
    image: "Assets/Images/Alexandria-Egypt.jpg",
    price: "150 جنيه",
  },
  {
    title: "برطمان مخلل ٥كجم",
    image: "Assets/Images/Alexandria-Egypt.jpg",
    price: "700 جنيه",
  },
  {
    title: "برطمان مخلل ٥كجم",
    image: "Assets/Images/Alexandria-Egypt.jpg",
    price: "700 جنيه",
  },
  {
    title: "برطمان مخلل ٥كجم",
    image: "Assets/Images/Alexandria-Egypt.jpg",
    price: "700 جنيه",
  },
  {
    title: "برطمان مخلل ٥كجم",
    image: "Assets/Images/Alexandria-Egypt.jpg",
    price: "700 جنيه",
  },
  {
    title: "برطمان مخلل ٥كجم",
    image: "Assets/Images/Alexandria-Egypt.jpg",
    price: "700 جنيه",
  },
  {
    title: "برطمان مخلل ٥كجم",
    image: "Assets/Images/Alexandria-Egypt.jpg",
    price: "700 جنيه",
  },
  {
    title: "برطمان مخلل ٥كجم",
    image: "Assets/Images/Alexandria-Egypt.jpg",
    price: "700 جنيه",
  },
  {
    title: "برطمان مخلل ٥كجم",
    image: "Assets/Images/Alexandria-Egypt.jpg",
    price: "700 جنيه",
  },
  {
    title: "برطمان مخلل ٥كجم",
    image: "Assets/Images/Alexandria-Egypt.jpg",
    price: "700 جنيه",
  },
];

for (let i = 0; i < productsCardData.length; i++) {
  // Create a new div element
  var productsCard = document.createElement("div");

  // Add general and unique classes
  productsCard.classList.add("productsCardContainer");

  // Set the inner HTML using the productsCardData array
  productsCard.innerHTML = `
<div class="productsCardLeft">
  <img src="${productsCardData[i].image}" alt="Image ${i + 1}">
</div>
<div class="productsCardRight">
  <div class="product-name">${productsCardData[i].title}</div>
  <div class="product-price">${productsCardData[i].price}</div>
</div>
`;

  // Append the productsCard to the main container
  content04.appendChild(productsCard);
}
