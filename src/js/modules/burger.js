export const buttonOpen = document.querySelector(".header-burger");
const hideBlock = document.querySelector(".hide-block");
const closeBtn = document.querySelector(".burger-close");
buttonOpen.onclick = function () {
  hideBlock.classList.add("active");
};
closeBtn.onclick = function () {
  hideBlock.classList.remove("active");
};
