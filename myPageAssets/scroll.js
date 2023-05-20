let path = document.querySelector('path');
let pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength + ' ' + pathLength;

path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', () => {
    
    //What % down is it
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    //length to offset the dashes
    var drawLength = pathLength * scrollPercentage;

    //draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength;

    //create parallax effect for any element with scroll class
const target = document.querySelectorAll('.scroll');

var index = 0;
var length = target.length;
for (index; index < length; index++){
    var pos = window.pageYOffset * target[index].dataset.rate;

    if(target[index].dataset.direction === 'vertical'){
        target[index].style.transform = 'translate3d(0px,' +pos+'px, 0px)';
    } else {
        var posX = window.pageYOffset * target[index].dataset.ratex;
        var posY = window.pageYOffset * target[index].dataset.ratey;
        
        //target[index.style.transform] ='translate3d('+posX+'px, '+posY+'px, 0px)';
    }
}
})