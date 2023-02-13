'use strict'
const body = document.querySelector('body');

body.style.backgroundColor = 'black';
body.style.color = 'red';

const overlay = document.querySelector('.overlay');
const active = document.querySelector('.active');

overlay.remove(active);
body.remove(overlay);

const createRow = () => {

  return `
  <tr>
  <td class="table__cell ">2</td>
  <td class="table__cell table__cell_left table__cell_name" data-id="24601654816512">
  <span class="table__cell-id">id: 24601654816512</span>Телевизор DEXP</td>
  <td class="table__cell table__cell_left">Техника для дома</td>
  <td class="table__cell">шт</td>
  <td class="table__cell">15</td>
  <td class="table__cell">$1000</td>
  <td class="table__cell">$15000</td>
  <td class="table__cell table__cell_btn-wrapper">
    <button class="table__btn table__btn_pic"></button>
    <button class="table__btn table__btn_edit"></button>
    <button class="table__btn table__btn_del"></button>
  </td>
</tr>
    Your HTML CODE
  `;
};
const table = createRow();
document.body.append(table);
table.outerHTML;

//alert(createRow());














