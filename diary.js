document.addEventListener('DOMContentLoaded', function() {
  var diary = JSON.parse(localStorage.getItem("diary") || "[]");
  
  var data = [];
  
  if(diary.length) data = diary;
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
  var tbody = document.querySelector("#tablebody2");
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
      })("#table2")
  /* добавление данных */
  document.diary.addEventListener('submit', function(event) {
      event.preventDefault();
      var diary = this;
      var item = ["gender","pool","distance","style_swim"].map(function(name) {
        return diary[name].value
      });
      diary.reset();
      data.push(item);
      localStorage.setItem("diaries", JSON.stringify(data));
      createTable(data, tbody);
      
  })
  });

