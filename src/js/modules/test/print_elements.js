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
        `,
  );
}
export function addHeaderContent(title,className="") {
  const header = document.querySelector("header");
  const titleHeader = header.querySelector(".header__title");
  if (!titleHeader) {
    header.insertAdjacentHTML(
      "beforeend",
      `<img class="header__img" src="./img/rain_bk3.png"/><h2 class="header__title ${className}">${title}
    </h2>`,
    );
  } else {
    titleHeader.textContent = title;
  }
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
    case "numberBlock": {
      return `<input class="colorblock numberBlock__item" type="button" value=${payload}>`;
    }
    default:
      break;
  }
}
