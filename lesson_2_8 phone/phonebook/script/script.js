'use strict';

const {
   modalControl,
   deleteControl,
   formControl,
} = require('./modules/control');


const {
   renderPhoneBook,
   renderContacts,
} = require('./modules/render');

const {
   getStorage,
} = require('./modules/serviceStorage');





const data = [];

   { 
      const init = (selectorApp, title) => {

      const app = document.querySelector(selectorApp);
      const data = getStorage();

      const {list, 
         logo, 
         btnAdd, 
         formOverLay, 
         form, 
         btnDel,} = renderPhoneBook(app, title);

       //Функционал

      const allRow = renderContacts(list, data);
      const {closeModal} = modalControl(btnAdd,formOverLay);      

      hoverRow(allRow, logo);
      deleteControl(btnDel, list);
      formControl(form, list,  closeModal);
      console.log(btnAdd); 
      
         };
      /*form[0].addEventListener('click', () => {
      formOverLay.classList.remove('is-visible');
      });
      */

      /*document.addEventListener('touchstart', () => {});
      document.addEventListener('touchmove', () => {});
      document.addEventListener('touchend', () => {}); // события для мобильных устройств
      */
   window.phoneBookInit = init;
   };