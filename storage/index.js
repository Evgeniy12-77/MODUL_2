'use strict'
/*
sessionStorage.setItem('test', '123');
const ss = sessionStorage.getItem('test');
console.log('ss: ', ss);

localStorage.setItem('test1', '12345');
localStorage.setItem('test2', '123456');
localStorage.setItem('test3', '1234567');
const ls = localStorage.getItem('test3');
console.log('ls: ', ls);
*/

//localStorage.removeItem('test2');
//sessionStorage.removeItem('test');
//localStorage.clear();
//sessionStorage.clear();

//localStorage.setItem('test1', true);
//localStorage.setItem('test2', false);
//localStorage.setItem('test3', 123);
//localStorage.setItem('test4', JSON.stringify([1, 2, 3]));
//localStorage.setItem('test5', JSON.stringify({a: 1, b: 2}));

//const test4 = JSON.parse(localStorage.getItem('test4')); //распарсить данные
//const test5 = JSON.parse(localStorage.getItem('test5'));
/*
const getLocalStorageData = () => Object.entries(localStorage)
.reduce((acc, [key, value]) => {
   let newValue;
   try {
      newValue = JSON.parse(value);
   } catch {
      newValue = value;
   }
   return {
      ...acc,
      [key]: newValue,
   };
},
{});
*/

//console.log(getLocalStorageData());

   