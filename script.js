// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 7,
  spaceBetween: 10,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    200: { slidesPerView: 1, spaceBetween: 10 },
    320: { slidesPerView: 2, spaceBetween: 10 },
    640: { slidesPerView: 3, spaceBetween: 10 },
    860: { slidesPerView: 4, spaceBetween: 15 },
    1100: { slidesPerView: 5, spaceBetween: 20 },
    1250: { slidesPerView: 6, spaceBetween: 10 },
  },
});

// "View All" button functionality
document.querySelectorAll(".view-all").forEach((button) => {
  button.addEventListener("click", function () {
    let swiperWrapper = document.querySelector(".swiper-wrapper");
    let swiperContainer = document.querySelector(".mySwiper");

    // Check if grid mode is already applied
    if (!swiperWrapper.classList.contains("grid-view")) {
      swiper.destroy(true, true);

      swiperWrapper.classList.add("grid-view");
      swiperWrapper.style.display = "grid";
      // swiperWrapper.style.gridTemplateColumns = "repeat(6, 1fr)";

      // Hide Swiper navigation and pagination
      document.querySelector(".swiper-button-next").style.display = "none";
      document.querySelector(".swiper-button-prev").style.display = "none";
      document.querySelector(".swiper-pagination").style.display = "none";

      // Hide Swiper container (optional, if needed)
      swiperContainer.style.overflow = "hidden";
    }
  });
});
