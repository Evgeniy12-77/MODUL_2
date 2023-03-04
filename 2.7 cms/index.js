'use strict'

const objGood = {
  id: 2,
  title: 'Телевизор DEXP',
  category: 'Техника для дома',
  units: 'шт',
  count: 15,
  price: 1000,
};

let goods = [
  {
    "id": 1,
    "name": "Смартфон Xiaomi 11T 8/128GB",
    "price": 27000,
    "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
    "category": "mobile-phone",
    "discont": false,
    "count": 3,
    "units": "шт",
    "images": {
      "small": "img/smrtxiaomi11t-m.jpg",
      "big": "img/smrtxiaomi11t-b.jpg",
    },
  },
  {
    "id": 2,
    "name": "Радиоуправляемый автомобиль Cheetan",
    "price": 4000,
    "description": "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
    "category": "toys",
    "discont": 5,
    "count": 1,
    "units": "шт",
    "images": {
      "small": "img/cheetancar-m.jpg",
      "big": "img/cheetancar-b.jpg",
    },
  },
  {
    "id": 3,
    "name": "ТВ приставка MECOOL KI",
    "price": 12400,
    "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
    "category": "tv-box",
    "discont": 15,
    "count": 4,
    "units": "шт",
    "images": {
      "small": "img/tvboxmecool-m.jpg",
      "big": "img/tvboxmecool-b.jpg",
    },
  },
  {
    "id": 4,
    "name": "Витая пара PROConnect 01-0043-3-25",
    "price": 22,
    "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
    "category": "cables",
    "discont": false,
    "count": 420,
    "units": "v",
    "images": {
      "small": "img/lan_proconnect43-3-25.jpg",
      "big": "img/lan_proconnect43-3-25-b.jpg"
    },
  },
];

const createRow = (obj) => {
  const returnColumn = () => {
  return `<tr class='trdel'>
  <td class="table__cell" name="id">${obj.id}</td>
      <td class="table__cell table__cell_left table__cell_name"
      data-id="24601654816512" type="text" name="name">
      <span class="table__cell-id">id: 24601654816512</span>
      ${obj.name}</td>
      <td class="table__cell table__cell_left">${obj.category}</td>
      <td class="table__cell">${obj.units}</td>
      <td class="table__cell">${obj.count}</td>
      <td class="table__cell">$ ${obj.price}</td>
      <td class="table__cell sum-cell">$ ${obj.price * obj.count}</td>
      <td class="table__cell table__cell_btn-wrapper">
        <button class="table__btn table__btn_pic"></button>
        <button class="table__btn table__btn_edit"></button>
        <button class="table__btn table__btn_del"></button>
      </td>
    </tr>`
    };

  const table = document.querySelector('.table__body');
  const column = returnColumn();
  table.insertAdjacentHTML('beforeend', column);
};

function totalPrice(Array) {
  for (let i = 0; i < Array.length; i++) {
    const sumGood = Array.map(item => item.count * item.price);
    const totalSum = sumGood.reduce((sum, current) => sum + current);
    const tableTotal = document.querySelector('.cms__total-price');
    tableTotal.textContent = totalSum;
    console.log(totalSum);
};
};

  function renderArray(Array) {
  for (let i = 0; i < Array.length; i++) {
  createRow(Array[i]);
  };
  };

renderArray(goods);
totalPrice(goods);

const tableBody = document.querySelector('.table__body');
const td_6 = tableBody.querySelectorAll('.sum-cell');
const overlay = document.querySelector('.overlay');
const active = document.querySelector('.active');
const modal = document.querySelector('.panel__add-goods');
const cms = document.querySelector('.cms');
const modalClose = document.querySelector('.modal__close');
const form = document.querySelector('.modal__form');

modal.addEventListener('click', () => {
cms.append(overlay);
});

const closeModal = () => {
  modalClose.addEventListener('click', () => {
    overlay.remove(active);
  });
  };
closeModal();

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newProduct = ([Object.fromEntries(formData)]);
  const total = document.querySelector('.modal__total-price');
  total.textContent = form.count.value * form.price.value;
  renderArray(newProduct);
  closeModal();
});

const trDelete = () => {
  tableBody.addEventListener('click', e => {
    const target = e.target;
    if(target.closest('.table__btn_del')) {
      target.closest('.trdel').remove();
      console.log(tableBody);
    }; }
    )};

  trDelete();
