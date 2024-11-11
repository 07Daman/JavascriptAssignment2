// Array of image data (for the gallery)
const images = [
    { src: "flowers-pink-large.jpg", thumb: "flowers-pink-small.jpg", title: "Flowers - Pink" },
    { src: "flowers-purple-large.jpg", thumb: "flowers-purple-small.jpg", title: "Flowers - Purple" },
    { src: "flowers-red-large.jpg", thumb: "flowers-red-small.jpg", title: "Flowers - Red" },
    { src: "flowers-white-large.jpg", thumb: "flowers-white-small.jpg", title: "Flowers - White" },
    { src: "flowers-yellow-large.jpg", thumb: "flowers-yellow-small.jpg", title: "Flowers - Yellow" }
];

let currentIndex = 0;

// Get elements from the DOM
const featuredImage = document.getElementById("featured-image");
const caption = document.querySelector("figcaption");
const nextButton = document.getElementById("next-button");
const thumbnailContainer = document.getElementById('thumbnails');

// Function to update the featured image
function updateImage() {
    featuredImage.src = `images/${images[currentIndex].src}`;
    caption.textContent = images[currentIndex].title;

    // Update active class for thumbnails
    document.querySelectorAll('#thumbnails img').forEach((thumb, idx) => {
        thumb.classList.toggle('active', idx === currentIndex);
    });
}

// Dynamically build the thumbnails with captions
images.forEach((image, index) => {
    const li = document.createElement('li');

    // Create and configure thumbnail image
    const img = document.createElement('img');
    img.src = `images/${image.thumb}`;
    img.alt = image.title + ' thumbnail';
    img.classList.toggle('active', index === currentIndex);

    // Add click event for each thumbnail
    img.addEventListener('click', () => {
        currentIndex = index;
        updateImage();
    });

    // Create and configure caption for the thumbnail
    const figcaption = document.createElement('figcaption');
    figcaption.textContent = image.title;

    // Append image and caption to the list item, then to the thumbnail container
    li.appendChild(img);
    li.appendChild(figcaption);
    thumbnailContainer.appendChild(li);
});

// Event listener for the "Next Image" button
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Initialize with the first image
updateImage();


