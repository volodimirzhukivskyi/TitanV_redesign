const main = document.querySelector("main");
const footer = document.querySelector("footer");
const slides = [{ question: "ваш пол:", questions: ["Мужчина", "Женщина"] }];
const startTest = () => {
  main.textContent = "";
  footer.textContent = "";
  printSlideContainer();
  const nextSlide = document.querySelector(".slide__button");
  const changeCounter = changeSlide();
  nextSlide.onclick = changeCounter;
};
function printSlideContainer() {
  main.className = "main";
  main.insertAdjacentHTML(
    "afterbegin",
    `<div class="slide">
        <div class="slide__container">
        <div class="line">
             <span class="line line--green">
        </div>
         <div id="slide__content" class="slide__content"></div>
         </span><button class="button  button--gray slide__button">далее</button>
    </div>
    </div>
    >`,
  );
}
function printSlideContent(slideCounter, array) {
    const slide = array[slideCounter];

  if (slide) {
    const { question, questions } = slide;
    const slideContent = document.getElementById("slide__content");
    const inputValues = questions.reduce((acum, next) => {
          acum += ` <div>
                    <input type="checkbox" id="scales" name="scales" checked>
                    <label for="scales">${next}</label>
                </div>`;
                return acum
      }, "");
    slideContent.insertAdjacentHTML("afterbegin", `<h2>${question}</h2>${inputValues}`);
  } else {
    //TODO end page
  }
}
function changeSlide() {
  let counter = 0;

  printSlideContent(counter, slides);
  function changeCounter() {
    counter++;
    printSlideContent(counter, slides);
  }
  return changeCounter;
}
const allBtns = document.querySelectorAll(".button");
allBtns.forEach((btn) => (btn.onclick = startTest));
