import { printSlideContainer } from "./print_elements.js";
import { ADD_STYLE, REMOVE_STYLE, SLIDES } from "./constans.js";
import { changeNextBtnCss, nextBtnHandler } from "./next_slide.js";
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const startTest = () => {
  main.textContent = "";
  footer.textContent = "";
  printSlideContainer();
  const nextSlide = document.querySelector(".slide__button");
  // const changeCounter = () => ;
  //TODO виправити проблему з хендлером використавши можливість прив'язати контекст.
  // nextSlide.onclick =nextBtnHandler(nextSlide,changeSlide()) ;
};

function printSlideContent(slideCounter, array) {
  const slide_content = document.getElementById("slide__content");
  slide_content.textContent = "";
  const slide = array[slideCounter];

  if (slide) {
    const { question, questions } = slide;
    const slideContent = document.getElementById("slide__content");
    const inputValues = questions.reduce((acum, next, i, arr) => {
      acum += `
                    <input type="radio" class="custom-radio" id=${next}  name="scales" >
                    <label class="input" for=${next}>${next}</label>
                `;
      return acum;
    }, "");
    slideContent.insertAdjacentHTML(
      "afterbegin",
      `<h2 class="slide__title">${question}</h2><div class="inputs">${inputValues}</div>`,
    );
    const inputs = document.querySelector(".inputs");
    inputs.addEventListener("change", () => {
      const slideBtn = document.querySelector(".slide__button");

      changeNextBtnCss(slideBtn, REMOVE_STYLE);
      slideBtn.disabled = false;
    });
  } else {
    //TODO end page
  }
}
function changeSlide() {
  let counter = 0;

  printSlideContent(counter, SLIDES);
  function changeCounter() {
    counter++;
    printSlideContent(counter, SLIDES);
  }
  return changeCounter;
}
const allBtns = document.querySelectorAll(".button");
allBtns.forEach((btn) => (btn.onclick = startTest));
