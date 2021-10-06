window.onscroll = function() {scrollFuntion()}
var pixel= 177;
function scrollFuntion(){
    if(document.body.scrollTop > pixel || document.documentElement.scrollTop > pixel)
    {
        document.getElementById("menu-top").style.display = "block";
    } else
    {
        document.getElementById("menu-top").style.display = "none";
    }
}