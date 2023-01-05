

var gender = localStorage.getItem('[name = "gender"]');
var pool = localStorage.getItem('[name = "pool"]');
var style_swim = localStorage.getItem('[name = "style_swim"]');
var distance = localStorage.getItem('[name = "distance"]');
document.writeln( gender + " Бассейн " + pool + "м, " + distance + "м " + style_swim);
createDiary.onclick = function() {
alert(gender + " Бассейн " + pool + "м, " + distance + "м " + style_swim);
};