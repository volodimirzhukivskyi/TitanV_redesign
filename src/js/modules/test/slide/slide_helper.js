import { ADD_STYLE, REMOVE_STYLE } from "../constans.js";

export function nextBtnHandler(changeSlide) {
  changeNextBtnCss(this, ADD_STYLE);
  changeStyleLine(changeSlide.getCounter() + 1);
  changeSlide.changeCounter();
}
export function changeStyleLine(counter) {
  const line = document.querySelector(".line--green");
  line.style.width = `${counter}0%`;
}
export const checkBtnStyle = (e) => {
  const slideBtn = document.querySelector(".slide__button");
  if (e.target.tagName === "INPUT") {
    if (event.target.type === "button") {
      const prevBtn = document.querySelector(".activeBtn");
      prevBtn?.classList.remove("activeBtn");
      e.target.classList.add("activeBtn");
    }

    changeNextBtnCss(slideBtn, REMOVE_STYLE);
    slideBtn.disabled = false;
  }
};
export function changeNextBtnCss(button, type) {
  switch (type) {
    case ADD_STYLE:
      {
        button.classList.add("button--gray");
      }
      break;
    case REMOVE_STYLE:
      {
        button.classList.remove("button--gray");
      }
      break;

    default:
      break;
  }
}
