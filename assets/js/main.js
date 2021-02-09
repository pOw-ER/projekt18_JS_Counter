let counter = document.getElementById('counter');
let count = 0;

function increment(){
  count+=1;
  counter.innerHTML = count;
}
function decrement(){
  count-=1;
  counter.innerHTML = count;
}
function plus10(){
  count+=10;
  counter.innerHTML = count;
}
function minus10(){
  count-=10;
  counter.innerHTML = count;
}
function plus100(){
  count+=100;
  counter.innerHTML = count;
}
function minus100(){
  count-=100;
  counter.innerHTML = count;
}
function resetCounter(){
  count=0;
  counter.innerHTML = count;
}
function multiply(){
  count*=2;
  counter.innerHTML = count;
}
