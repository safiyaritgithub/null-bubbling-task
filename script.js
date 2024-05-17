
let myVar = null;
console.log(myVar); 

let myNum;
console.log(myNum); 

let obj = {};
console.log(obj.property); 


// BUBBLING
document.getElementById('outer').addEventListener('click', function() {
  console.log('Outer div clicked');
});

document.getElementById('inner').addEventListener('click', function() {
  console.log('Inner div clicked');
});

//  BUBBLING PREVENTING 
document.getElementById('inner').addEventListener('click', function(event) {
  console.log('Inner div clicked');
  event.stopPropagation(); 
});

