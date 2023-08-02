import { SLIDES } from "./constans.js";
import { addHeaderContent, printSlideContainer } from "./print_elements.js";
import { nextBtnHandler } from "./slide/slide_helper.js";
import { printSlideContent, changeSlide } from "./slide/slide.js";
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const allBtns = document.querySelectorAll(".button");
const startTest = () => {
  main.textContent = "";
  footer.textContent = "";
  addHeaderContent("тест на определение IQ");
  printSlideContainer();
  printSlideContent(0, SLIDES);
  const nextSlide = document.querySelector(".slide__button");
  const changeCounter = nextBtnHandler.bind(nextSlide, changeSlide());
  //TODO виправити проблему з хендлером використавши можливість прив'язати контекст.
  nextSlide.onclick = changeCounter;
};
allBtns.forEach((btn) => (btn.onclick = startTest));
// --- Start game
