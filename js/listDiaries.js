/*var div = document.getElementById('list');
var ul = document.createElement('ul');

div.appendChild(ul);

var gender = localStorage.getItem('[name = "gender"]');
var pool = localStorage.getItem('[name = "pool"]');
var style_swim = localStorage.getItem('[name = "style_swim"]');
var distance = localStorage.getItem('[name = "distance"]');
var str = document.writeln( gender + " Бассейн " + pool + "м, " + distance + "м " + style_swim);

var data = [str, "Вторая строка", "n строка"];

for (var i = 0, ln = data.length; i < ln; i++) {
  var li = document.createElement('li');
  li.innerHTML = data[i];
  ul.appendChild(li);
}*/


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
    
    }
    
});


//сохраняем состояние todolist, чтобы пользователь мог получить к нему доступ позже
saveBtn.addEventListener('click',function(){
  localStorage.setItem('todoList',ul.innerHTML );
  
});


//загружаем список
loadTodo();



