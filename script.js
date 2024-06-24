const closeBtn = document.querySelector("#closeicon");
const menuBtn = document.querySelector("#menubtn");
const navBar = document.querySelector("aside");
const theme = document.querySelector("#theme");
const alinks = document.querySelectorAll("aside a");
console.log(alinks);

// console.log(closeBtn,menuBtn,navBar)

menuBtn.addEventListener("click", () => {
  navBar.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  navBar.style.display = "none";
});

theme.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  theme.querySelector("i:nth-child(1)").classList.toggle("active");
  theme.querySelector("i:nth-child(2)").classList.toggle("active");
});

alinks.forEach((link) => {
  link.addEventListener("click", () => {
    alinks.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});
