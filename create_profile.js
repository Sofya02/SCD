/* Рабочий метод */
/*const isCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type);

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

    localStorage.setItem('data',JSON.stringify(data));;
    console.log(JSON.parse(localStorage.getItem('data')));
}

//form.addEventListener('submit', getFormValue);


window.addEventListener('storage',()=>{
    ('storage', ({ url, key, newValue: value }) => {  
        console.log(`Key '${key}' changed value to '${value}' from '${url}'`);
   });
});


window.addEventListener('storage', (event) => console.log(event));

*/    


document.addEventListener('DOMContentLoaded', function() {
    var localData = JSON.parse(localStorage.getItem("localData") || "[]");
    
    var data = [];
    
    if(localData.length) data = localData;
    /* создание таблицы */
    function createHTML(data) {
            return data.reduce(function(html, text) {
                var tr  = "<tr><td>" + text.join("<td>");
                return html + tr;
            }, "");
        }
    
    function createTable(data, tbody)
    {
       var html = createHTML(data);
       tbody.innerHTML = html
    }
    var tbody = document.querySelector("#tablebody");
    createTable(data, tbody);
    
    /* сортировка */
    (function(f) {
        var collator = new Intl.Collator(["en", "ru"], { numeric: true });
            function g(c, k) {
                return function(b, a) {
                    b = b.cells[c].textContent;
                    a = a.cells[c].textContent;
                    return k * collator.compare(a, b)
                }
            }
            var d = document.querySelector(f);
            [].slice.call(d.rows[0].cells).forEach(function(c, b) {
                var a = 1;
                c.addEventListener("click", function(event) {
                    event.preventDefault();
                    var e = [].slice.call(d.rows, 1),
                    tbody = e[0].parentNode;
                    e.sort(g(b,a));
                    e.forEach(function(a) {
                        tbody.appendChild(a)
                    });
                    a = -a;
                })
            })
        })("#table")
    /* добавление данных */
    document.form.addEventListener('submit', function(event) {
        event.preventDefault();
        var form = this;
        var item = ["family","username","patronymic","year","gender","phone","city"].map(function(name) {
          return form[name].value
        });
        form.reset();
        data.push(item);
        localStorage.setItem("localData", JSON.stringify(data));
        createTable(data, tbody);
        
    })
    });