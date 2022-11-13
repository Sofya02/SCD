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