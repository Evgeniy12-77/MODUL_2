'use strict'
const overlay = document.querySelector('.overlay');
const active = document.querySelector('.active');
overlay.remove(active);

const objGood = {
  id: 2,
  title: 'Телевизор DEXP',
  category: 'Техника для дома',
  units: 'шт',
  count: 15,
  price: 1000,
};

const createRow = (obj, i) => {
  const tr = document.createElement('tr');

  const td_1 = document.createElement('td');
  td_1.classList.add('table__cell', 'table__cell_number');
  td_1.textContent = i = 1;
  tr.appendChild(td_1);

  const td_2 = document.createElement('td');
  td_2.classList.add('table__cell', 'table__cell_left', 'table__cell_name');
  const id = obj.id;
  td_2.setAttribute('data-id', id);
  const span = document.createElement('span');
  span.classList.add('table__cell-id');
  const spanText = `id: ${obj.id}`;
  span.insertAdjacentText('afterbegin', spanText);
  td_2.appendChild(span);
  const productName = obj.name;
  td_2.insertAdjacentText('beforeend', productName)
  tr.appendChild(td_2);

  const td_3 = document.createElement('td');
  td_3.classList.add('table__cell', 'table__cell_left');
  td_3.textContent = obj.category;
  tr.appendChild(td_3);

  const td_4 = document.createElement('td');
  td_4.className = 'table__cell';
  td_4.textContent = obj.units;
  tr.appendChild(td_4);

  const td_5 = document.createElement('td');
  td_5.className = 'table__cell';
  td_5.textContent = obj.count;
  tr.appendChild(td_5);

  const td_6 = document.createElement('td');
  td_6.className = 'table_cell';
  td_6.textContent = `$${obj.price}`;
  tr.appendChild(td_6);

  const td_7 = document.createElement('td');
  td_7.classList.add('table__cell', 'table__cell_total');
  td_7.textContent = `$${obj.price * obj.count}`;
  tr.appendChild(td_7);


};
createRow(objGood);
