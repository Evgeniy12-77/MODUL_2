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
