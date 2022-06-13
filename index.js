
function addingEventListener() {
    
const input = document.getElementById('input');
input.addEventListener('click', function() {
  alert('I was clicked!');
});
    
}




//console.log(addEventListener());


const input2 = document.getElementById("input")
input2.addEventListener("click", clickMe);

function clickMe() {
  alert("He you look for me?")
}
console.log(addEventListener("click", clickMe))