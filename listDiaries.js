//выбираем элементы dom для манипуляций
var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");
var lists = document.querySelectorAll("li");
var spans = document.getElementsByTagName("span");
var saveBtn = document.querySelector(".save");
//var createTable = document.querySelector(".but_table");

//функция для загрузки todo, если список найден в локальном хранилище.
function loadTodo(){
  if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem('todoList');
  }
}

// прослушиватель событий для ввода, чтобы добавить новую задачу в список.
input.addEventListener("keypress",function(keyPressed){
  if(keyPressed.which === 13){
    //создание списков и диапазонов при нажатии Enter
    var li = document.createElement("li");
    var spanElement = document.createElement("span");
    var icon = document.createElement("i");
    var t = document.createElement("table");

    var newTodo = this.value;
    this.value = " " ;
        
    icon.classList.add('fas', 'fa-trash-alt');
    spanElement.append(icon);
    ul.appendChild(li).append(spanElement,newTodo);
    for (let i = 0; i < 10; i++) {
        const tr = t.insertRow();
 
        for (let j = 0; j < 10; j++) {
           const td = tr.insertCell();
        }
    }
    li.appendChild(t);

    // Получение элемента таблицы
     var tables = document.getElementsByTagName("table");
    // Цикл по таблицам
    for (var i = 0; i < tables.length; i++) {
     // Получаем i-ю таблицу
     var table = tables[i];
     // Установить идентификатор динамически
     table.setAttribute("id", i + 1);

    }
        
    //Формирование названий столбцов
    var x=document.getElementById('1').rows[0].cells;
    x[0].innerHTML="Данные о спортсмене";
    x[1].innerHTML="Старый результат";
    x[2].innerHTML="Тренировка1";
    x[3].innerHTML="Тренировка2";
    x[4].innerHTML="Тренировка3";
    x[5].innerHTML="Тренировка4";
    x[6].innerHTML="Тренировка5";
    x[7].innerHTML="Лучший результат";
    x[8].innerHTML="Стабильность";
    x[9].innerHTML="Прогресс";
    x[10].innerHTML="Шанс";

    //активация ячейки
    var a=document.getElementById('1').rows[2].cells;
    for (var i = 0; i < a.length; i++) {
        x[0].innerHTML="Время";
    }
}
    
});

//сохраняем состояние todolist, чтобы пользователь мог получить к нему доступ позже
saveBtn.addEventListener('click',function(){
  localStorage.setItem('todoList',ul.innerHTML );
});

//загружаем список
loadTodo();

