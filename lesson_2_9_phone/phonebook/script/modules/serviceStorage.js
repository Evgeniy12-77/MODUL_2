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

export default {
   getStorage,
   setStorage,
   addContactData,
   removeStorage
};
   