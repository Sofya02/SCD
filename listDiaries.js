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
   // document.querySelector("table").id = "new";
    var info = ["ФИО студента и год","Старый результат", "Тренировки", "Лучший результат", "Стабильность", "Прогресс", "Шанс"];
    var newTodo = this.value;
    this.value = " " ;
        
    icon.classList.add('fas', 'fa-trash-alt');
    spanElement.append(icon);
    ul.appendChild(li).append(spanElement,newTodo);
    for (let i = 0; i < 10; i++) {
        const tr = t.insertRow();
 
        for (let j = 0; j < 7; j++) {
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

  
    }
    
});

//сохраняем состояние todolist, чтобы пользователь мог получить к нему доступ позже
saveBtn.addEventListener('click',function(){
  localStorage.setItem('todoList',ul.innerHTML );
});

//загружаем список
loadTodo();

/*
function tableMaker()
{

  var student;
  for (var j = 0; j < 10; j++) {
      student = {
          number: "№" + j,
          fio: "ФИО спортсмена" + j,
          year: "Год" + j,
          lastRes: "Старый результата" + j,
          numC: "Тренировки" + j,
          bestRes: "Лучший результат" + j,
          stab: "Стабильность" + j,
          progress: "Прогресс" + j,
          chance: "Шанс" + j,
      };
      var table = document.getElementById("myTable");
      var row = table.insertRow(j);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);
      var cell9 = row.insertCell(8);
  
      cell1.innerHTML = student.number,
      cell2.innerHTML = student.fio,
      cell3.innerHTML = student.year;
      cell4.innerHTML = student.lastRes,
      cell5.innerHTML = student.numC,
      cell6.innerHTML = student.bestRes;
      cell7.innerHTML = student.stab,
      cell8.innerHTML = student.progress,
      cell9.innerHTML = student.chance;
  }
  
}

*/




