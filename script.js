var height = 15;
var attempt = 4;
var intS = 0;
function scrollToEndPage() {
console.log("hight:" + height + " scrollHeight:" + document.body.scrollHeight + " att:" + attempt  );

if (height < document.body.scrollHeight)
{
    //height = document.body.scrollHeight;
    window.scrollTo(0, height);
    attempt++;
    height = parseInt(height) + attempt;
}
esle
{
    clearInterval(intS);
}
}
intS = setInterval(scrollToEndPage,100);


function Complete()
{
    var Elem="Фамилия: " + document.Sel1.Family.value +
        "\nИмя: " + document.Sel1.Name.value +
        "\nОтчество: " + document.Sel1.Patronymic.value +
        "\nГод рождения: " + document.Sel1.year.value +
        "\nПол: " + document.Sel1.Sex.checked +
        "\nТелефон: " + document.Sel1.Phone.value +
        "\nГород: " + document.Sel1.city.value;
    alert(Elem);
}
function CheckAge(year)
{
    if(year<2020&&year>1900)
        return year;
    else
        return  false;
}


function btnClick()
{
    if(document.Test1.Sex[0].checked){
        document.Test1.Sex[1].click();
    }else{
        document.Test1.Sex[0].click();
    }
}



function f()
{
    let a=document.getElementById('s1').value;
    alert(a); //a- значение value

    let b=document.getElementById('s2').value;
    alert(b); 
}

function check()
{ 
  document.getElementById('t1').value= "1";
}




