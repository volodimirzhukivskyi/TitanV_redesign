const main = document.querySelector("main");
const footer = document.querySelector("footer");

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
  //   const slide = array[slideCounter];
  const slide = slideCounter;

  if (slide) {
    console.log(`prinSlide - ${slideCounter}`);
  } else {
    //TODO end page
  }
}
function changeSlide() {
  let counter = 0;

  printSlideContent(counter);
  function changeCounter() {
    counter++;
    printSlideContent(counter);
  }
  return changeCounter;
}
const allBtns = document.querySelectorAll(".button");
allBtns.forEach((btn) => (btn.onclick = startTest));
