
import {modalControl,
deleteControl,
formControl} from './modules/control.js';
import create from './modules/createElements.js';
const {   
   hoverRow,
} = create;
import {renderPhoneBook,
renderContacts} from './modules/render.js';

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




   
      