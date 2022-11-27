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


