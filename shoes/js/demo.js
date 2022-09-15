let icon = document.querySelector("#bar");
let side = document.querySelector("header");

console.log(icon, side);
icon.onclick = () => {
    icon.classList.toggle("fa-times");
    side.classList.toggle("active");
}