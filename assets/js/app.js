const inner_home = document.getElementById("inner-home");
const inner_about = document.getElementById("inner-about");
const inner_image = document.getElementById("inner-image");
const inner_service = document.getElementById("inner-service");
const burgerElement = document.querySelector(".hamburger");

// onscroll down hide navbar & onscroll up show navbar
var lastscrolltop = 0;
navbar = document.getElementsByClassName("nav-main")[0];
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastscrolltop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }
  lastscrolltop = scrollTop;
  navbar.classList.add("navbar-sticky", window.scrollY > 0);
});

// carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<span><i class='fa-solid fa-chevron-left'></i></span>",
    "<span><i class='fa-solid fa-chevron-right'></i></span>",
  ],
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

// click event on hamburger
burgerElement.addEventListener("click", (e) => {
  const isExpanded = burgerElement.getAttribute("aria-expanded") === "true";
  burgerElement.setAttribute("aria-expanded", !isExpanded);

  document.querySelector(".sidebar").classList.toggle("show-sidebar");
});

inner_home.addEventListener("click", () => {
  sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("show-sidebar");
  const isExpanded = burgerElement.getAttribute("aria-expanded") === "true";
  burgerElement.setAttribute("aria-expanded", !isExpanded);
});

inner_about.addEventListener("click", () => {
  sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("show-sidebar");
  const isExpanded = burgerElement.getAttribute("aria-expanded") === "true";
  burgerElement.setAttribute("aria-expanded", !isExpanded);
});
inner_image.addEventListener("click", () => {
  sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("show-sidebar");
  const isExpanded = burgerElement.getAttribute("aria-expanded") === "true";
  burgerElement.setAttribute("aria-expanded", !isExpanded);
});
inner_service.addEventListener("click", () => {
  sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("show-sidebar");
  const isExpanded = burgerElement.getAttribute("aria-expanded") === "true";
  burgerElement.setAttribute("aria-expanded", !isExpanded);
});
