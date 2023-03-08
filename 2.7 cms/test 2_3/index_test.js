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


