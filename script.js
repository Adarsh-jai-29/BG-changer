var button = document.querySelector('.btn');
var button1 = document.querySelector('.btn1');

console.log(button)

button.addEventListener("click",
function(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);

  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`

  button1.innerHTML = `rgb(${red},${green}, ${blue})`
})



 
