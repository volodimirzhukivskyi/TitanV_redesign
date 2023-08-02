import { FINISH_SLIDE, LOADER_SLIDE } from "./constans.js";

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
export function addHeaderContent(title, className = "") {
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
      return `<input type="radio" class="custom-radio" id="${payload}"  name="scales" >
    <label class="input" for="${payload}">${payload}</label>`;
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
export function slideLayout(type) {
  switch (type) {
    case LOADER_SLIDE:
      return `<h2 class="slide__title">Обработка результатов</h2>
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
     .... ...................................................</p>`;
    case FINISH_SLIDE:
      return `<h2 class="finish-slide__title">Ваш результат рассчитан:</h2>
  <p class="finish-slide__text"><u>вы относитесь к 3%</u> респондентов, чей уровень интеллекта более чем на
  15 пунктов отличается от среднего в большую или меньшую сторону! </p>
  <h2 class="finish-slide__title finish-slide__title--green">Скорее получите свой результат!
  </h2>
  <p class="finish-slide__alert">В целях защиты персональных
  данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона
  </p>
  <p class="finish-slide__info">Звоните скорее, запись доступна всего <br><span class="finish-slide__number">10:00</span> минут

  </p>
  <a class="finish-slide__phone" target="_blank" rel="noopener noreferrer"
  ><img src="./img/icons/call.png"/><p class="finish-slide__phone-text">позвонить и прослушать
  результат </p></a>
  `;
    default:
      break;
  }
}
