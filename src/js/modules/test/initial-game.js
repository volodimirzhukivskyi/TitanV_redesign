import { REMOVE_STYLE, SLIDES } from "./constans.js";
import { changeNextBtnCss, nextBtnHandler } from "./next_slide.js";
import {
  printQuestionEl,
  printSlideContainer,
  addHeaderContent,
} from "./print_elements.js";
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
function printSlideContent(slideCounter, array) {
  const slideContent = document.getElementById("slide__content");
  const slideBtn = document.querySelector(".slide__button");
  slideContent.textContent = "";
  const slide = array[slideCounter];

  if (slide) {
    const { question, questions, type, img } = slide;

    const inputValues = questions.reduce((acum, next, i, arr) => {
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

    questionContent.addEventListener("click", (e) => {
      if (e.target.tagName === "INPUT") {
        if (event.target.type === "button") {
          const prevBtn = document.querySelector(".activeBtn");
          prevBtn?.classList.remove("activeBtn");
          e.target.classList.add("activeBtn");
        }

        changeNextBtnCss(slideBtn, REMOVE_STYLE);
        slideBtn.disabled = false;
      }
    });
  } else {
    slideBtn.remove();
    slideContent.insertAdjacentHTML(
      "afterBegin",
      `<h2 class="slide__title">Обработка результатов</h2>
   <div class="lds-roller">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>

    <p>Определение стиля мышления...........
        .... ...................................................</p>`,
    );
    setTimeout(() => {
      slideBtn.remove();
      slideContent.insertAdjacentHTML(
        "afterBegin",
        `<h2 class="slide__title">Ваш результат рассчитан:</h2>
     <p><u>вы относитесь к 3%</u> респондентов, чей уровень интеллекта более чем на
     15 пунктов отличается от среднего в большую или меньшую сторону! </p>
     <h2 class="slide__title">Скорее получите свой результат!
     </h2>
     <p>В целях защиты персональных
     данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона
     </p>
     <p>Звоните скорее, запись доступна всего <br><span>10:00</span> минут

     </p>
     <a href=""></a>
     `,
      );}, 2000);
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
