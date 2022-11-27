let formData={};//Получение данных из input

const form = document.querySelector('form');//получение формы для работы

const LS = localStorage;

//получить данные из input
form.addEventListener('input',function(event){
    formData[event.target.name] = event.target.value;

    LS.setItem('formData',JSON.stringify(formData));
});


//восстановление данных
if(LS.getItem('formData')){
   formData = JSON.parse(LS.getItem('formData')); 
   console.log(formData);
}

