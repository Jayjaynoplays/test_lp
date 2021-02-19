var width = $(window).width();
var rowArr = document.querySelectorAll('.row')
if(767.98 <= width <= 991.98){
    rowArr[1].classList.add('memberPhoto__768');
    rowArr[2].classList.add('memberPhoto__768');
}
