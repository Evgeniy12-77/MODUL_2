/*
{
   const app = () => {
   console.log('Мое новое крутое приложение');
};
app();
}
*/
import modukeOne from './module/moduleOne.js';
import moduleTwo from './module/moduleTwo.js;'

const {postfix, names} = require('./module/moduleTwo');

names.forEach(name => {
   console.log(moduleOne(name, postfix));
});
