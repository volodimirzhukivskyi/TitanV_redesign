import { printQuestionEl } from "../print_elements.js";
import { checkBtnStyle } from "./slide_helper.js";
import { LOADER_SLIDE, FINISH_SLIDE } from "../constans.js";
import { slideLayout } from "../print_elements.js";
import { SLIDES } from "../constans.js";
import { addHeaderContent } from "../print_elements.js";
export function nextSlide(slide) {
  const { question, questions, type, img } = slide;
  const slideContent = document.getElementById("slide__content");

  const inputValues = questions.reduce((acum, next) => {
    acum += printQuestionEl(type, next);
    return acum;
  }, "");
  slideContent.insertAdjacentHTML(
    "afterbegin",
    `<h2   class="slide__title">${question}</h2>${
      img ? img : ""
    }<div class="question_content ${type}">${inputValues}</div>`,
  );
  const questionContent = document.querySelector(".question_content");

  questionContent.addEventListener("click", checkBtnStyle);
}
export function loaderSlide() {
  const slideContent = document.getElementById("slide__content");

  const slideBtn = document.querySelector(".slide__button");

  slideBtn.remove();
  slideContent.insertAdjacentHTML("afterBegin", slideLayout(LOADER_SLIDE));
}
export function finishSlide() {
  const slideContent = document.getElementById("slide__content");

  setTimeout(() => {
    slideContent.textContent = "";
    addHeaderContent("ГоТОВО!");
    slideContent.insertAdjacentHTML("afterBegin", slideLayout(FINISH_SLIDE));
  }, 2000);
}
export function printSlideContent(slideCounter, array) {
  const slideContent = document.getElementById("slide__content");
  slideContent.textContent = "";
  const slide = array[slideCounter];

  if (slide) {
    nextSlide(slide);
  } else {
    loaderSlide();
    finishSlide();
  }
}
export function changeSlide() {
    let counter = 0;

    function changeCounter() {
      counter++;
      printSlideContent(counter, SLIDES);
    }
    function getCounter() {
      return counter;
    }
    return { changeCounter, getCounter };
  }
