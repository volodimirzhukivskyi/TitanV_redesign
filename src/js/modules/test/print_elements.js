export function printSlideContainer() {
  const main = document.querySelector("main");

  main.className = "main";
  main.insertAdjacentHTML(
    "afterbegin",
    `<div class="slide">
          <div class="slide__container">
          <div class="line">
               <span class="line line--green"> </span>
          </div>
           <div id="slide__content" class="slide__content"></div>
          <button disabled class="button  button--gray slide__button">далее</button>
      </div>
      </div>
      >`,
  );
}
export function printQuestionEl(type, payload) {
  switch (type) {
    case "inputs": {
      return `<input type="radio" class="custom-radio" id=${payload}  name="scales" >
    <label class="input" for=${payload}>${payload}</label>`;
    }
    case "picture": {
      return `<input style="background-color:${payload} ;" class="colorblock" type="button"/>
    `;
    }
    default:
      break;
  }
}
