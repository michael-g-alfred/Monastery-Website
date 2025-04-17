// Data containing a set of albums (each album has a title, subtitle, and images)
const albumsData = [
  {
    title: "عنوان الألبوم ١",
    subtitle: "عنوان الألبوم الفرعى ١",
    images: [
      "Assets/Images/Carousel/01.avif",
      "Assets/Images/Carousel/02.avif",
      "Assets/Images/Carousel/03.avif",
      "Assets/Images/Carousel/04.avif",
      "Assets/Images/Carousel/05.avif",
    ],
  },
  {
    title: "عنوان الألبوم ٢",
    subtitle: "عنوان الألبوم الفرعى ٢",
    images: [
      "Assets/Images/Carousel/01.avif",
      "Assets/Images/Carousel/02.avif",
      "Assets/Images/Carousel/03.avif",
      "Assets/Images/Carousel/04.avif",
      "Assets/Images/Carousel/05.avif",
    ],
  },
  {
    title: "عنوان الألبوم ٣",
    subtitle: "عنوان الألبوم الفرعى ٣",
    images: [
      "Assets/Images/Carousel/01.avif",
      "Assets/Images/Carousel/02.avif",
      "Assets/Images/Carousel/03.avif",
      "Assets/Images/Carousel/04.avif",
      "Assets/Images/Carousel/05.avif",
    ],
  },
  {
    title: "عنوان الألبوم ٤",
    subtitle: "عنوان الألبوم الفرعى ٤",
    images: [
      "Assets/Images/Carousel/01.avif",
      "Assets/Images/Carousel/02.avif",
      "Assets/Images/Carousel/03.avif",
      "Assets/Images/Carousel/04.avif",
      "Assets/Images/Carousel/05.avif",
    ],
  },
  {
    title: "عنوان الألبوم ٥",
    subtitle: "عنوان الألبوم الفرعى ٥",
    images: [
      "Assets/Images/Carousel/01.avif",
      "Assets/Images/Carousel/02.avif",
      "Assets/Images/Carousel/03.avif",
      "Assets/Images/Carousel/04.avif",
      "Assets/Images/Carousel/05.avif",
    ],
  },
];

// Z-Index and Rotation Degrees for images
const imageZIndexes = [304, 303, 302, 301, 300];
const imageDegrees = [`0deg`, `-5deg`, `-10deg`, `-15deg`, `-20deg`];

// Wait until window loads
window.addEventListener("load", function () {
  // Function to create an album card
  function createAlbumCard(albumData) {
    const albumCardContainer = document.getElementById("content05");

    // Create the main card container
    const albumCard = document.createElement("div");
    albumCard.classList.add("albumCard");

    // Create the image gallery container
    const imageGallery = document.createElement("div");
    imageGallery.classList.add("imageGallery");

    // Create and append each image to the gallery
    albumData.images.forEach((src, index) => {
      const imageGalleryItem = document.createElement("div");
      imageGalleryItem.classList.add("imageGallery_Item");

      const img = document.createElement("img");
      img.src = src;
      img.alt = "";
      imageGalleryItem.appendChild(img);
      imageGallery.appendChild(imageGalleryItem);
    });

    // Add the image gallery to the card
    albumCard.appendChild(imageGallery);

    // Add album details (title and subtitle)
    const albumDetails = document.createElement("div");
    albumDetails.classList.add("albumDetails");

    const albumTitle = document.createElement("h2");
    albumTitle.classList.add("albumTitle");
    albumTitle.textContent = albumData.title;
    albumDetails.appendChild(albumTitle);

    const albumSubtitle = document.createElement("p");
    albumSubtitle.classList.add("albumSubtitle");
    albumSubtitle.textContent = albumData.subtitle;
    albumDetails.appendChild(albumSubtitle);

    albumCard.appendChild(albumDetails);

    // Append the card to the container
    albumCardContainer.appendChild(albumCard);
  }

  // Function to create all album cards based on the album data
  function createAllAlbumCards(albumsData) {
    albumsData.forEach((album) => {
      createAlbumCard(album);
    });
  }

  // Generate cards
  createAllAlbumCards(albumsData);

  // Select all image items (after DOM is ready)
  let imageGallery_Item = document.querySelectorAll(".imageGallery_Item");

  // Initial styling for images
  (function imageGallery_ItemInitialState() {
    imageGallery_Item.forEach(function (imageGallery_Item, index) {
      imageGallery_Item.style.zIndex =
        imageZIndexes[index % imageZIndexes.length];
      imageGallery_Item.style.transform = `rotate(${
        imageDegrees[index % imageDegrees.length]
      })`;
      imageGallery_Item.style.transition = "transform 1s ease";
    });
  })();

  // Function to rotate zIndex and rotation degrees continuously
  function cycleZIndex() {
    // Rotate the zIndex and degrees arrays
    imageZIndexes.unshift(imageZIndexes.pop());
    imageDegrees.unshift(imageDegrees.pop());

    // Apply new zIndex and rotation with animation
    imageGallery_Item.forEach(function (imageGallery_Item, index) {
      imageGallery_Item.style.transition = "transform 1s ease";
      imageGallery_Item.style.zIndex =
        imageZIndexes[index % imageZIndexes.length];
      imageGallery_Item.style.transform = `rotate(${
        imageDegrees[index % imageDegrees.length]
      })`;
    });
  }

  // Run the rotation every 2 seconds
  setInterval(cycleZIndex, 2000);
});
