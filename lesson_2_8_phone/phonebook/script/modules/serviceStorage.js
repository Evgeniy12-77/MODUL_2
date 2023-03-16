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
