var rightBtn = document.querySelector('.btn-right');
var leftBtn = document.querySelector('.btn-left');
var sliderWindow = document.querySelector('.slider-child');
var sliderDots = document.querySelectorAll('.dot');

var slideIndex = 0;

rightBtn.onclick = moveRight;
function moveRight(){
    var currentPosition = parseInt(getComputedStyle(sliderWindow).marginLeft);
    var i;
    if(currentPosition > -2100){
        sliderWindow.style.marginLeft = currentPosition - 700 + 'px'; 

        for(i = 0; i < sliderDots.length; i++){
            var isActive = sliderDots[i].classList.contains('active');
            if(isActive && i < sliderDots.length - 1){
                sliderDots[i].classList.remove('active');
                sliderDots[i + 1].classList.add('active');
                break;
            }
        }
    }
    else{
        sliderWindow.style.marginLeft = currentPosition + 2100 + 'px';
        sliderDots[slideIndex + 3].classList.remove('active');
        sliderDots[slideIndex].classList.add('active');
    }
}

leftBtn.onclick = moveLeft;
function moveLeft(){
    var currentPosition = parseInt(getComputedStyle(sliderWindow).marginLeft);
    var i;
    if(currentPosition < 0){
        sliderWindow.style.marginLeft = currentPosition + 700 + 'px'; 

        for(i = 0; i < sliderDots.length; i++){
            var isActive = sliderDots[i].classList.contains('active');
            if(isActive && i < sliderDots.length){
                sliderDots[i].classList.remove('active');
                sliderDots[i - 1].classList.add('active');
                break;
            }
        }
    }

    else{
        sliderWindow.style.marginLeft = currentPosition - 2100 + 'px';
        sliderDots[slideIndex].classList.remove('active');
        sliderDots[slideIndex + 3].classList.add('active');
    }
}

var element = document.querySelector('.list');
element.onclick = myFunction;

function myFunction(e){
    var elems = document.querySelector('.select');
    if(elems != null){
        elems.classList.remove('select');
    }
    e.target.className = "select";
}
