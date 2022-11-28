/*  1 способ
let formData={};//Получение данных из input

const form = document.querySelector('form');//получение формы для работы

//получить данные из input
form.addEventListener('input',function(event){
    formData[event.target.name] = event.target.value;

    localStorage.setItem('formData',JSON.stringify(formData));
});


//восстановление данных
if(localStorage.getItem('formData')){
    
   formData = JSON.parse(localStorage.getItem('formData')); 
   console.log(formData);
}

 window.addEventListener('storage',()=>{
  console.log('storage has changed');
 })

*/

/* 2 способ
//first check to see how many form records exist, if none set to 0 in storage
if (!localStorage.getItem('form')) {
    localStorage.setItem('form', 0);
}
else {
    form = localStorage.getItem('form');
}

//increment to the next form entry
form++;

//save the form data to localStorage
localStorage.setItem('form.' + form + '.firstName', JSON.stringify(form));

//lastly, save the number of forms to localStorage
localStorage.setItem('form', form);
*/

/* Рабочий метод */
const isCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type);

const {form} = document.forms;

function getFormValue(event) {
event.preventDefault();

    const data = {};

    for (let field of form) {
   const {name} = field;

        if (name) {
       const {type, checked, value} = field;

            data[name] = isCheckboxOrRadio(type) ? checked : value;
   }
}

    localStorage.setItem('data',JSON.stringify(data));
    console.log(data);
}

form.addEventListener('submit', getFormValue);


window.addEventListener('storage',()=>{
    console.log('storage has changed');
   })

