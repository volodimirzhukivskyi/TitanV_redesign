import { REMOVE_STYLE, SLIDES } from "./constans.js";
import { changeNextBtnCss, nextBtnHandler } from "./next_slide.js";
import { printQuestionEl, printSlideContainer } from "./print_elements.js";
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const allBtns = document.querySelectorAll(".button");

const startTest = () => {
  main.textContent = "";
  footer.textContent = "";
  printSlideContainer();
  printSlideContent(0, SLIDES);
  const nextSlide = document.querySelector(".slide__button");
  const changeCounter = nextBtnHandler.bind(nextSlide, changeSlide());
  //TODO виправити проблему з хендлером використавши можливість прив'язати контекст.
  nextSlide.onclick = changeCounter;
};
allBtns.forEach((btn) => (btn.onclick = startTest));
// --- Start game
function printSlideContent(slideCounter, array) {
  const slide_content = document.getElementById("slide__content");
  slide_content.textContent = "";
  const slide = array[slideCounter];

  if (slide) {
    const { question, questions, type } = slide;
    const slideContent = document.getElementById("slide__content");
    const inputValues = questions.reduce((acum, next, i, arr) => {
      acum += printQuestionEl(type, next);
      return acum;
    }, "");
    slideContent.insertAdjacentHTML(
      "afterbegin",
      `<h2 class="slide__title">${question}</h2><div class="question_content ${type}">${inputValues}</div>`,
    );
    const questionContent = document.querySelector(".question_content");
    // questionContent.addEventListener("change", () => {
    //   const slideBtn = document.querySelector(".slide__button");

    //   changeNextBtnCss(slideBtn, REMOVE_STYLE);
    //   slideBtn.disabled = false;
    // });
    questionContent.addEventListener("click", (e) => {
      if (e.target.tagName === "INPUT") {
        console.log(e.target.type);
        if (event.target.type === "button") {
          const prevBtn = document.querySelector(".activeBtn");
          prevBtn?.classList.remove("activeBtn")
          e.target.classList.add("activeBtn");
        }
        const slideBtn = document.querySelector(".slide__button");

        changeNextBtnCss(slideBtn, REMOVE_STYLE);
        slideBtn.disabled = false;
      }
    });
  } else {
    //TODO end page
  }
}
function changeSlide() {
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
