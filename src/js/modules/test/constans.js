export const SLIDES = [
    { question: "Ваш пол:", questions: ["Мужчина", "Женщина"], type: "inputs" },
    {
      question: "укажите ваш возраст: ",
      questions: ["До 18", "От 18 до 28", "от 29 до 35", "От 36"],
      type: "inputs",
    },
    {
      question: "Выберите лишнее: ",
      questions: ["Дом", "Шалаш", "Бунгало", "Скамейка", "Хижина"],
      type: "inputs",
    },
    {
      question: `Продолжите числовой ряд:
    18  20  24  32  `,
      questions: ["62", "48", "74", "57", "60", "77"],
      type: "inputs",
    },
    {
      question: `Какой из городов лишний?`,
      questions: ["Вашингтон", "Лондон", "Париж", "Нью-Йорк", "Москва", "Оттава"],
      type: "inputs",
    },
    {
      question: `Выберите цвет, который сейчас наиболее Вам приятен:`,
      questions: [
        "#A8A8A8",
        "#0000A9",
        "#00A701",
        "#F60100",
        "#FDFF19",
        "#A95403",
        "#000000",
        "#850068",
        "#46B2AC",
      ],
      type: "picture",
    },
    {
      question: `Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:`,
      questions: [
        "#A8A8A8",
        "#0000A9",
        "#00A701",
        "#F60100",
        "#FDFF19",
        "#A95403",
        "#000000",
        "#850068",
        "#46B2AC",
      ],
      type: "picture",
    },
    {
      question: `Выберите правильную фигуру из четырёх пронумерованных.`,
      questions: [1, 2, 3, 4],
      img: `<div ><img class="test-img" src="./img/test/people.png"/></div>`,
      type: "numberBlock",
    },
    {
      question: "Вам привычнее и важнее:",
      questions: [
        "Наслаждаться каждой минутой проведенного времени",
        "Быть устремленными мыслями в будущее",
        "Учитывать в ежедневной практике прошлый опыт",
      ],
      type: "inputs",
    },
    {
      question:
        "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ",
      questions: [
        "оно остроконечное",
        "оно устойчиво",
        "оно-находится в состоянии равновесия",
      ],
      type: "inputs",
      img: `<div ><img class="test-img" src="./img/test/triangle.png"/></div>`,
    },
  {
    question: `Вставьте подходящее число`,
    questions: [12, 22, 32, 32, 43, 46, 45],
    img: `<div ><img class="test-img" src="./img/test/star.png"/></div>`,
    type: "numberBlock",
  },
];
////////////////Style buttons////////////////////////
export const ADD_STYLE = "ADD_STYLE";
export const REMOVE_STYLE = "REMOVE_STYLE";
/////////////////Slide change////////////////////////

export const LOADER_SLIDE = "LOADER_SLIDE";
export const FINISH_SLIDE = "FINISH_SLIDE";