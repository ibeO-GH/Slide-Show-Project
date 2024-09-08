// Declaring an array for the images.
let images = [
  "/assets/beautiful-landscape-mother-nature_23-2148992406.avif",
  "/assets/close-up-squirrel-wooden-post_1048944-30370286.avif",
  "/assets/green-moss-rotting-tree-trunk-forest_1048944-30372317.avif",
  "/assets/medium-shot-woman-living-farmhouse_23-2150621719.avif",
  "/assets/squirrel-sitting-tree-branch_1048944-30371835.avif",
  "/assets/trees-growing-forest_1048944-30368869.avif",
];

// Declaring variable to help keep track of the current index.
let currentIndex = 0;

// creating a function for increasing the currentIndex.
function nextSlide() {
  currentIndex =
    (currentIndex + 1) %
    images.length; /*currentIndex is incremented by 1. The modulo operator (%) ensures that if currentIndex exceeds the length
  of the images array, it wraps around to 0. "% images.length" makes sure that the index stays within the valid range of the array.*/

  document.getElementById("slider-image").src = images[currentIndex]; // updates the src attribute of the <img> element to the new image.
}

// creating a function for decreasing the currentIndex.
function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("slider-image").src =
    images[
      currentIndex
    ]; /* "currentIndex - 1" decreases the index to move to the previous image.
  "+ images.length" ensures that if the index is negative (i.e on the first image), it wraps around to the end of the array.
   "% images.length" makes sure that the index stays within the valid range of the array. */
}

/* toggle menu */
const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-menu");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("tablet-active");
});
