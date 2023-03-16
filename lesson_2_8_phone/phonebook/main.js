(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

const { 
   createRow,
} = require('./createElements');

const {
   addContactData,
   removeStorage,
} = require('./serviceStorage');



const modalControl = (btnAdd, formOverLay) => {
   const openModal = () => {
      formOverLay.classList.add('is-visible');
   };
   const closeModal = () => {
      formOverLay.classList.remove('is-visible');
   };   
   btnAdd.addEventListener('click', openModal);  

formOverLay.addEventListener('click', e => {
   const target = e.target;
   if(target === formOverLay ||
      target.classList.contains('close')) {
      closeModal();
   };
});
return {
   closeModal,
};
};

const deleteControl = (btnDel, list) => {
btnDel.addEventListener('click', () => {
   document.querySelectorAll('.delete').forEach(del => {
      del.classList.toggle('is-visible');
   });
});

   list.addEventListener('click', e => {
      const target = e.target;
      if(target.closest('.del-icon')) {
         const delRow = target.closest('.contact');
         delRow.remove();
         const phone = delRow.children[3].textContent;
         console.log(phone);
         removeStorage(phone);
      }
   });
}; 

const addContactPage = (contact, list) => {
   list.append(createRow(contact));
};

const formControl = (form, list, closeModal) => {
form.addEventListener('submit', e => {
   e.preventDefault();
   const formData = new FormData(e.target);
   const newContact = Object.fromEntries(formData);
   console.log(newContact.name);
   addContactPage(newContact, list);
   addContactData(newContact);
   form.reset();
   closeModal();
});
};

module.exports = {
   modalControl,
   deleteControl,
   formControl,
};

},{"./createElements":2,"./serviceStorage":4}],2:[function(require,module,exports){
'use strict';

const createContainer = () => {
   const container = document.createElement('div');
   container.classList.add('container');
   return container;
};

const createHeader = () => {
   const header = document.createElement('header');
   header.classList.add('header');

   const headerContainer = createContainer();
   header.append(headerContainer);

   header.headerContainer = headerContainer;
   return header
};

const createLogo = title => {
const h1 = document.createElement('h1');
h1.classList.add('logo');
h1.textContent = `Телефонный справочник. ${title}`;
return h1;
};

const createMain = () => {
   const main = document.createElement('main');
   const mainContainer = createContainer();
   main.append(mainContainer);
   main.mainContainer = mainContainer;
   return main;
};

const createFooter = () => {
   const footer = document.createElement('footer');
   footer.classList.add('footer');

   const footerContainer = createContainer();
   footer.append(footerContainer);

   footer.footerContainer = footerContainer;
   footer.textContent = `Все права защищены. Евгений`;
   return footer;
};

const createButtonsGroup = params => {
   const btnWrapper = document.createElement('div');
   btnWrapper.classList.add('btn-wrapper');

   const btns = params.map(({className, type, text}) => {
      const button = document.createElement('button');
      button.type = type;
      button.textContent = text;
      button.className = className;
      return button;
   });

   btnWrapper.append(...btns);

   return {
      btnWrapper,
      btns,
   };
};

const createTable = () => {
   const table = document.createElement('table');
   table.classList.add('table', 'table-striped');

   const thead = document.createElement('thead');
   thead.insertAdjacentHTML('beforeend', `
   <tr>
   <th class="delete">Удалить</th>
   <th>Имя</th>
   <th>Фамилия</th>
   <th>Телефон</th>
   </tr>`);

   const tbody = document.createElement('tbody');
   table.append(thead, tbody);
   table.tbody = tbody;
   return table;
};

const CreateForm = () => {

   const overlay = document.createElement('div');
   overlay.classList.add('form-overlay');

   const form = document.createElement('form');
   form.classList.add('form');
   form.insertAdjacentHTML('beforeend', `
   <button class="close" type="button"></button>
   <h2 class="form-title">Добавить контакт</h2>
   <div class="form-group">
      <label class="form-label" for="name">Имя:</label>
   <input class="form-input" name="name" 
   id="name" type="text" required>
   </div>
   <div class="form-group">
      <label class="form-label" for="surname">Фамилия:</label>
   <input class="form-input" name="surname" 
   id="surname" type="text" required>
   </div>
   <div class="form-group">
      <label class="form-label" for="phone">Телефон:</label>
   <input class="form-input" name="phone" 
   id="phone" type="number" required>
   </div>
   `);  

   const buttonGroup = createButtonsGroup([
      {
         className: 'btn btn-primary mr-3',
         type: 'submit',
         text: 'Добавить',
      },
      {
         className: 'btn btn-danger',
         type: 'reset',
         text: 'Отмена',
      },
   ]);

   console.log(buttonGroup);

   form.append(...buttonGroup.btns);

   overlay.append(form);
   return {
      overlay,
      form,
   };      
};



const createRow = ({ name: firstName, surname, phone }) => {

   const tr = document.createElement('tr');     
   tr.classList.add('contact');
   const tdDel = document.createElement('td'); 
   tdDel.classList.add('delete');
   const buttonDel = document.createElement('button');
   buttonDel.classList.add('del-icon');
   tdDel.append(buttonDel);

   const tdName = document.createElement('td');
   tdName.textContent = firstName;
   
   const tdSurname = document.createElement('td');
   tdSurname.textContent = surname;
   
   const tdPhone = document.createElement('td');
   const phoneLink = document.createElement('a');
   phoneLink.href = `tel:${phone}`;
   phoneLink.textContent = phone;
   tr.phoneLink = phoneLink;

   tdPhone.append(phoneLink);

   tr.append(tdDel, tdName, tdSurname, tdPhone);

   return tr;
};

module.exports = {
   createHeader,
   createLogo,
   createMain,
   createButtonsGroup,
   createTable,
   CreateForm,
   createFooter,
   createRow,
};


},{}],3:[function(require,module,exports){
'use strict';

const { 
   createHeader,
   createLogo,
   createMain,
   createButtonsGroup,
   createTable,
   CreateForm,
   createFooter,
   createRow,
} = require('./createElements');

const renderPhoneBook = (app, title) => {
   const header = createHeader();
   const logo = createLogo(title);
   const main = createMain();
   const buttonGroup = createButtonsGroup([
      {
         className: 'btn btn-primary mr-3 js-add',
         type: 'button',
         text: 'Добавить',
      },
      {
         className: 'btn btn-danger',
         type: 'button',
         text: 'удалить',
      },
   ]);

   const table = createTable();
   const {form, overlay} = CreateForm();
   const footer = createFooter();

   header.headerContainer.append(logo);
   main.mainContainer.append(buttonGroup.btnWrapper, table, overlay);
   app.append(header, main, footer);
   return {
      list: table.tbody,
      logo,
      btnAdd: buttonGroup.btns[0],
      btnDel: buttonGroup.btns[1],
      formOverLay: overlay,
      form: form,
   };
};

const renderContacts = (elem, data) => {
   const allRow = data.map(createRow);
   elem.append(...allRow);
   return allRow;
};

module.exports = {
   renderPhoneBook,
   renderContacts,
};



},{"./createElements":2}],4:[function(require,module,exports){
'use strict';


const getStorage = () => JSON.parse(localStorage.getItem('storageData')) || [] ;

const setStorage = (data) => localStorage.setItem('storageData', JSON.stringify(data)); 


   const addContactData = contact => {      
      const data = getStorage('storageData');
      data.push(contact);
      setStorage(data);
      console.log('data', data);
   };

   const removeStorage = (number) => {
      const data = getStorage('storageData');
      const newData = data.filter(el => el.phone !== number);
      setStorage(newData);
   };

   module.exports = {
      getStorage,
      setStorage,
      addContactData,
      removeStorage,
   };

},{}],5:[function(require,module,exports){
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
      
      const hoverRow = (allRow, logo) => {
         const text = logo.textContent;
         console.log(text)
         allRow.forEach(contact => {
            contact.addEventListener('mouseenter', () => {
               logo.textContent = contact.phoneLink.textContent;
            });
            contact.addEventListener('mouseleave', () => {
               logo.textContent = text;
            });
         });
      };

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
},{"./modules/control":1,"./modules/render":3,"./modules/serviceStorage":4}]},{},[5]);
