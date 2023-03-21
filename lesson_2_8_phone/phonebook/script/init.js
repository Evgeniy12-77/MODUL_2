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
   export default init;
/*form[0].addEventListener('click', () => {
   formOverLay.classList.remove('is-visible');
   });
   */

   /*document.addEventListener('touchstart', () => {});
   document.addEventListener('touchmove', () => {});
   document.addEventListener('touchend', () => {}); // события для мобильных устройств
   */


   