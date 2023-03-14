'use strict';

const data = [
   {
   name: 'Иван',
   surname: 'Петров',
   phone: '+79514545454',
   },
   {
   name: 'Игорь',
   surname: 'Семёнов',
   phone: '+79999999999',
   },
   {
   name: 'Семён',
   surname: 'Иванов',
   phone: '+79800252525',
   },
   {
   name: 'Мария',
   surname: 'Попова',
   phone: '+79876543210',
   },
];


{  
   const addContactData = contact => {
      data = JSON.parse(localStorage.getItem('data'));
      contact = {name: contact.name, surname: contact.surname, phone: contact.phone};
      data.push(contact);
      localStorage.setItem('data', JSON.stringify(data));
      console.log('data', data);
   };
   

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

   const renderContacts = (elem, data) => {
      const allRow = data.map(createRow);
      elem.append(...allRow);
      return allRow;
   };

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
            target.closest('.contact').remove();
         }
      });
   }; 

   console.log(CreateForm());

   const addContactPage = (contact, list) => {
      list.append(createRow(contact));
   };

   const formControl = (form, list, closeModal) => {
   form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const newContact = Object.fromEntries(formData);
      console.log(newContact.name);
      //localStorage.setItem('newContact', JSON.stringify({name: newContact.name, surname: newContact.surname, phone: newContact.phone}));      
      addContactPage(newContact, list);
      addContactData(newContact);
      form.reset();
      closeModal();
   });
   };

   const init = (selectorApp, title) => {

      const app = document.querySelector(selectorApp);

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