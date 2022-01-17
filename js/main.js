$(document).ready(function () {
  $(".section-employer").slick({
    slidesToShow: 3,
    infinite: true,
    speed: 800,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

$(".responsive").slick({
  slidesToShow: 3,
  infinite: true,
  speed: 800,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        infinite: true,
        speed: 800,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        infinite: true,
        speed: 800,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
});

const showMenuMobile = () => {
  const btnOpen = document.querySelector(".btn-open-menu");
  const blockMenuMobile = document.querySelector(".list-menu-mobile");
  btnOpen.addEventListener("click", (e) => {
    blockMenuMobile.style.display = "block";
    blockMenuMobile.classList.add("show");
  });
};
const hideMenuMobile = () => {
  const btnClose = document.querySelector(".btn-close-menu");
  const blockMenuMobile = document.querySelector(".list-menu-mobile");
  btnClose.addEventListener("click", (e) => {
    blockMenuMobile.classList.remove("show");
    blockMenuMobile.style.display = "none";
  });
};
showMenuMobile();
hideMenuMobile();
