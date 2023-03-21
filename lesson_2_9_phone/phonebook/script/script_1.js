
import control from './modules/control.js';
const {modalControl,
deleteControl,
formControl} = control;

import create from './modules/createElements.js';
const {   
   hoverRow,
} = create;

import render from './modules/render.js';
const {renderPhoneBook,
renderContacts} = render;

import service from './modules/serviceStorage.js';
const { getStorage } = service;

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
      };
   window.phoneBookInit = init;




   
      