//выбираем элементы dom для манипуляций
var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");
var lists = document.querySelectorAll("li");
var spans = document.getElementsByTagName("span");
var saveBtn = document.querySelector(".save");


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
        
    var newTodo = this.value;
    this.value = " " ;
        
    icon.classList.add('fas', 'fa-trash-alt');
    spanElement.append(icon);
    ul.appendChild(li).append(spanElement,newTodo);
    //tableMaker();
    new DynamicTable( window, 
      document.getElementById("dynamic"),
      {1:"ФИО спортсмена", 2:"Год", 3:"Старый результат", 4:"Тренировки", 5:"Лучший результат", 6:"Стабильность", 7:"Прогресс", 8:"Шанс"} );
    
    
  
    }
    
});

//сохраняем состояние todolist, чтобы пользователь мог получить к нему доступ позже
saveBtn.addEventListener('click',function(){
  localStorage.setItem('todoList',ul.innerHTML );
  
});

//загружаем список
loadTodo();


/*function tableCreate() {
  const body = document.body,
        tbl = document.createElement('table');
  for (let i = 0; i < 10; i++) {
    const tr = tbl.insertRow();
    for (let j = 0; j < 15; j++) {
        const td = tr.insertCell();
    }
  }
  body.appendChild(tbl);
}
*/
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



if(typeof window.DynamicTable !== 'function') {
 
  function DynamicTable(GLOB, htmlTable, config) {    
      // Так как эта функция является конструктором,
      // подразумевается, что ключевое слово this - будет
      // указывать на экземнпляр созданного объекта. Т.е. 
      // вызывать её нужно с оператором "new".
      // Проверка ниже является страховкой: 
      // если эта функция была вызвана без оператора "new",
      // то здесь эта досадная ситуация исправляется:
      if ( !(this instanceof DynamicTable) ) {
          return new DynamicTable(GLOB, htmlTable, config);   
      }
      // Зависимость:
      var DOC       = GLOB.document,
          // Ссылка на массив строк таблицы:
          tableRows = htmlTable.rows,
          // Кол-во строк таблицы:
          RLength   = tableRows.length,
          // Кол-во ячеек в таблице:
          CLength   = tableRows[0].cells.length,
          // Контейнер для работы в циклах ниже:
          inElement = null,
          // Контейнер кнопки
          button    = null,
          // Контейнер текстового узла кнопки
          butText   = null,
          // В одном из методов ниже, потребуется
          // сохранить контекст:
          self      = this,
          // Счётчики итераций:
          i,j;    
               
      // Метод "Вставить кнопки". 
      // Создаёт/добавляет две кнопки "удалить" и "добавить"
      // завёрнутые в элемент "P". Используются DOM - методы создания 
      // и добавления элементов.
      this.insertButtons = function() {
          // Создаём первую кнопку:
          inElement = DOC.createElement("P");
          inElement.className = "d-butts";
           
          button = DOC.createElement("BUTTON");                   
          button.onclick = this.delRow;
                                       
          butText = DOC.createTextNode("-");
          button.appendChild(butText);    
          // Добавляем её в DOM:      
          inElement.appendChild(button);
          // Создаём вторую кнопку:
          button = DOC.createElement("BUTTON");                   
          button.onclick = this.addRow;
                                       
          butText = DOC.createTextNode("+");
          button.appendChild(butText);
          // Добавляем её в DOM:      
          inElement.appendChild(button);
          // Обнуляем переменную, т.к. 
          // она используется и в других методах.
          return inElement;
      };
      // Метод "Добавить строку"
      this.addRow = function(ev) {
          // Кросс бр. получаем событие и цель (кнопку)
          var e         = ev||GLOB.event,
              target    = e.target||e.srcElement,
              // Получаем ссылку на строку, в которой была кнопка:
              row       = target.parentNode.parentNode.parentNode,
              // Получаем кол-во ячеек в строке:
              cellCount = row.cells.length,
              // Получаем индекс строки в которой была кнопка + 1,
              // что бы добавить строку сразу после той, в которой
              // была нажата кнопка:
              index     = row.rowIndex + 1,
              i;
          // Вставляем строку:
          htmlTable.insertRow(index);         
          // В этом цикле, вставляем ячейки.
          for(i=0; i < cellCount; i += 1) {    
                       
              htmlTable.rows[index].insertCell(i);                
              // Если ячейка последняя...
              if(i == cellCount-1) {
                  // Получаем в переменную кнопки, используя метод, описанный выше:
                  inElement = self.insertButtons();               
              } else {            
                  // Иначе получаем в переменную текстовое поле:      
                  inElement = DOC.createElement("INPUT");
                  // ... и задаём ему имя, типа name[] - которое
                  // впоследствии станет массивом.
                  inElement.name  = config[i+1]+"[]";                 
              }                   
              // Добавляем в DOM, то что получили в переменную:
              htmlTable.rows[index].cells[i].appendChild(inElement);                      
          }
          // Обнуляем переменную, т.к. 
          // она используется и в других методах.
          inElement = null;
          // Во избежании ненужных действий, при нажатии на кнопку
          // возвращаем false:
          return false;
      };
       
      // Метод "Удалить строку"
      // Удаляем строку, на  кнопку, которой нажали:
      this.delRow = function(ev) {
          // Страховка: не даёт удалить строку, если она осталась
          // последней. Цифра 2 здесь потому, что мы считаем так же
          // строку с заголовками TH. Итого получается, что 1 строка
          // с заголовками и 1 строка - с содержимым.
          if(tableRows.length > 2) {
              htmlTable.deleteRow(this.parentNode.parentNode.parentNode.rowIndex);
          } else {
              return false;   
          }           
      };          
       
      // Фактически, ниже это инициализация таблицы:
      // Содержимое ячеек помещается внутрь текстовых
      // полей, а в последнюю ячейку кажой строки, помещаются
      // нопки "удалить" и "добавить" Функция является
      // "вызываемой немедленно"
      return (function() {
          // Мы имеем дело с двумерным массивом: 
          // table.rows[...].cells[...]
          // Поэетому сдесь вложенный цикл.
          // Внешний цикл "шагает" по строкам...
          for( i = 1; i < RLength; i += 1 ) {  
              // Внутренний цикл "шагает" по ячейкам: 
              for( j = 0; j < CLength; j += 1 ) { 
                  // Если ячейка последняя...
                  if( j + 1 == CLength ) {
                      // Помещаем в переменную кнопки:
                      inElement = self.insertButtons();                                       
                  } else {                    
                      // Иначе создаем текстовый элемент,
                      inElement = DOC.createElement("INPUT");
                      // Помещаем в него данные ячейки,
                      inElement.value = tableRows[i].cells[j].firstChild.data;
                      // Присваиваем имя - массив,
                      inElement.name  = config[j+1]+"[]";
                      // Удаляем, уже не нужный экземпляр данных непосредственно
                      // из самой ячейки, потому что теперь данные у нас внутри
                      // текстового поля:
                      tableRows[i].cells[j].firstChild.data = "";
                  }   
                  // Вставляем в ячейку содержимое переменной - это
                  // либо текстовое поле, либо кнопки: 
                  tableRows[i].cells[j].appendChild(inElement);
                  // Обнуляем переменную, т.к. 
                  // она используется и в других методах.
                  inElement = null;
              }       
          }
     
      }());
   
  }// end function DynamicTable
 
}


