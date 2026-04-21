  window.addEventListener("load", () => {
  document.getElementById("home").classList.add("show");

  // Apply saved theme preference
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("darkmode");
  }
});

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Theme switch toggle
const themeSwitch = document.getElementById("theme-switch");
themeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");

  // Save preference
  if (document.body.classList.contains("darkmode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
