'use strict'

const obj_1 = {
  "text": "Heading 1",
  "element": "h1", // Корневой элемент.
  "properties": "Balboa Light, 30px", // Третий столбец текста.
  "usage": ["Product title (once on a page)", "Illustration headline"] // Четвёртый столбец текста. Каждый элемент - это дочерний узел.
};


function render(createElement) {
  return createElement("div", { class: "container" }, [
    createElement("p", { class: "my-awesome-class" }, "Some cool text")
  ])
};

console.log(render(obj_1));
function renderSum (obj) {
  const arrayPRoductPrice = Object.entries(td_6);
  const sumGood = arrayPRoductPrice.map(item => item[1]);
  const sumGood_1 = sumGood.map(item => item.textContent);
  const sumGood_2 = sumGood_1.map(item => Number(item));
  console.log(sumGood_2);
  const totalSum = sumGood_1.reduce((sum, current) => sum + current);
  console.log(totalSum);
  };

  renderSum(td_6);


