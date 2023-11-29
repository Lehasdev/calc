let numberOne = '';
const inner =document.querySelector('.input');

const nmButtons = document.querySelectorAll('.number');
  nmButtons.forEach((el)=>{
    el.addEventListener('click',()=>firstInner(el.id));
  });

const opButtons = document.querySelectorAll('.operation');
  opButtons.forEach((el)=>{
    el.addEventListener('click',()=>operation(el.id));
})

resultButton= document.querySelector('.equals');
resultButton.addEventListener('click',()=>result());

const clButton = document.getElementById('ac');
  clButton.addEventListener('click',()=>{numberOne = '';
    inner.innerHTML=numberOne;
});


function firstInner(id){
  numberOne += id;
  inner.innerHTML=numberOne;
}
function operation(id){
  if(numberOne.slice(-1)=='+'|| 
      numberOne.slice(-1)=='-'||
      numberOne.slice(-1)=='*'||
      numberOne.slice(-1)=='/') {return} else {
      numberOne+=id;
    inner.innerHTML=numberOne;
}
}
function result(){
  inner.innerHTML=eval(numberOne);
}