'use strict'

const form = document.querySelector('.my-form');

// Два подхода к разработке

//const inputName = document.querySelector('.input-name');
//const inputSurname = document.querySelector('.input-surname');
// Подход неверный такой для работы в формах

      // По событию клик неправильно отправлять форму

form.addEventListener('submit', e => {
   e.preventDefault(); // отмена отправки данных о событии

     // console.log(form.name.value);
     // console.log(form.surname.value);
     // console.log(form.phone.value); // Правильный способ доступа к элементу
   
   const formData = new FormData(e.target);
   //console.log(formData.get('mail'));
   console.log([...formData.entries()]); // получаем итератор 
   //и его итерируем, получаем массив с массивами
   console.log([Object.fromEntries(formData)]);
   //console.log(formData.get('mail')) получим майл
   //console.log(formData.get('mail'));
});

/*form.name.addEventListener('change', e => {
   console.warn(e.type, e.target.value);
}); //change срабатывает сразу когда ввел данные в форму
//change подходит для валидации данных

form.name.addEventListener('focus', e => {
   console.error(e.type, e.target.value);
}); // Валидировать данные нужно 

form.name.addEventListener('blur', e => {
   console.log(e.type, e.target.value);
});


form.name.addEventListener('input', e => {
   console.warn(e.type, e.target.value);
});

form.name.addEventListener('keyup', e => {
   console.warn(e.type, e.target.value);
});

form.name.addEventListener('keydown', e => {
   console.warn(e.type, e.target.value);
});

form.name.addEventListener('keypress', e => {
   console.warn(e.type, e.target.value);
});
*/
//console.log(form.name.value);// обращение напрямую к элементу
//console.log(form.surname.value);
//console.log(form.phone)

//const { name, size, file, description, color:[...color] } = form; 
// - деструктизация данных из формы

const fieldsetRadio = document.querySelector('.fieldset-radio');
form.addEventListener('change', e => {
   console.log(e.target.value);
});

document.addEventListener('keydown', e => {
   if (e.code === 'Escape') {
      form.reset();
   }
});







