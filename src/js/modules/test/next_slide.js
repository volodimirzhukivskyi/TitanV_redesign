import { ADD_STYLE, REMOVE_STYLE } from "./constans.js";

export function nextBtnHandler(button,func) {
  changeNextBtnCss(button, ADD_STYLE);

  func();
}
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
