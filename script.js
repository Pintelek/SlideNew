const btnDown = document.querySelector('.down-btn');
const btnUp = document.querySelector('.up-btn');
const SIDEBAR = document.querySelector('.sidebar');
const SLIDE = document.querySelector('.main-slides');
const IMG = document.querySelectorAll('.image');
let count = 0;

SIDEBAR.style.top = `-${(IMG.length - 1) * 100}vh`;


btnUp.addEventListener('click', () =>{
  changeBar('up')
});
btnDown.addEventListener('click', ()=>{
  changeBar('down')
}
);

function changeBar(option){
  if(option === 'up'){
    count++;
    if(count === IMG.length){
      count = 0;
    }
    SLIDE.style.top = `-${count * 100}vh`;
    SIDEBAR.style.top = `${-((IMG.length -1) - count)* 100}vh`;
  }

  if(option === 'down'){
    count--;
    if(count < 0){
      count = (IMG.length - 1);
    }
    SLIDE.style.top = `-${count * 100}vh`;
    SIDEBAR.style.top = `${-((IMG.length -1) - count)* 100}vh`;
  }
}

