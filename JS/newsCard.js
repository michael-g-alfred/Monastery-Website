var content02 = document.querySelector("#content02");

// Custom newsCardData for each newsCard, including image source
var newsCardData = [
  {
    title: "إفتتاح مكتبة المحبة",
    description:
      "إفتتاح مكتبة المحبة فى اليوم ٢٠ من مارس ٢٠٢٥ على يد صاحبة النيافة الحبر الجليل الإنبا تادرس.",
    image: "Assets/Images/Alexandria-Egypt.jpg",
  },
  { title: "العنوان ٢", description: "الوصف ٢", image: "images/img2.jpg" },
  { title: "العنوان ٣", description: "الوصف ٣", image: "images/img3.jpg" },
  { title: "العنوان ٤", description: "الوصف ٤", image: "images/img4.jpg" },
  { title: "العنوان ٥", description: "الوصف ٥", image: "images/img5.jpg" },
];

for (let i = 0; i < newsCardData.length; i++) {
  // Create a new div element
  var newsCard = document.createElement("div");

  // Add general and unique classes
  newsCard.classList.add("newsCard", `newsCard-${i + 1}`);

  // Set the inner HTML using the newsCardData array
  newsCard.innerHTML = `
    <img src="${newsCardData[i].image}" alt="Image ${i + 1}">
    <div><h2>${newsCardData[i].title}</h2><h3>${
    newsCardData[i].description
  }</h3></div>
  `;

  // Append the newsCard to the main container
  content02.appendChild(newsCard);
}
