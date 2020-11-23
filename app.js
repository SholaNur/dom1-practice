// syntax: element.addEventListener(event,fucntion,useCapture);

let myPar1 = document.getElementById("myPar1");
let myDiv1 = document.getElementById("myDiv1");
let myPar2 = document.getElementById("myPar2");
let myDiv2 = document.getElementById("myDiv2");

myPar1.addEventListener("click", function() {
    myDiv1.style.backgroundColor = "blue"
});

myPar1.onclick = function() { myDiv1.style.backgroundColor = "blue" };
myDiv1.addEventListener("mouseover", function() { myDiv2.style.backgroundColor = "pink" });

document.querySelector('button').addEventListener('click', () => {
    console.log('button was pressed');
})