//GetElementsById
/* console.log(document.getElementById('title')); */
/* var title = document.getElementById('title');
console.log(title.innerHTML);
console.log(title.textContent); */
/* title.textContent = '<span>LISTA DE Q HACERES</span>' ;*///no se puede poner html
/* title.innerHTML = '<span>LISTA DE Q HACERES</span>';//se puede poner html */
/* title.style.color = 'red'; */

//GetElementsByClassName
// var task = document.getElementsByClassName('task');
/* console.log(task); */
// console.log(task[0]);

/* 
for (var i = 0; i < task.length; i++) {
        var element = task[i];
        element.style.color = 'red';
} */

//GetElementsByTagName
/* 
var task = document.getElementsByTagName('li');
console.log(task); */


//getelementbyname
// console.log(document.getElementsByName('newTask'))
// var input = document.getElementsByName('newTask');

//querySelector
/* 
var element = document.querySelector('li');//selecciona el primer elemento que encuentre
var element2 = document.querySelectorAll('li');//selecciona todos los elementos que encuentre
var element3 = document.querySelector('#taskList li');//selecciona el primer elemento que encuentre
console.log(element);
console.log(element2);
 */


//child
/* 
var list = document.querySelector('ul');
console.log(list.childNodes);//todos los nodos hijos incluyendo los espacios en blanco
console.log(list.children);//solo los nodos hijos
console.log(list.firstChild);//primer nodo hijo que puede ser un espacio en blanco
console.log(list.firstElementChild);//primer nodo hijo que es un elemento
console.log(list.lastChild);//ultimo nodo hijo que puede ser un espacio en blanco
console.log(list.lastElementChild);//ultimo nodo hijo que es un elemento
 */

//siblings
/* 
var list= document.querySelector('li');
console.log(list.nextElementSibling);
console.log(list.previousElementSibling);
console.log(list.previoussibling);
console.log(list.nextsibling);
*/


//parent
/*
var list= document.querySelector('li');
console.log(list.parentElement);//busca cualquier nodo padre sin incluir los espacios en blanco
console.log(list.parentNode);//busca cualquier nodo padre incluyendo los espacios en blanco
*/

//createElement
/* 
var newTask = document.createElement('li');
newTask.textContent = 'Tarea 4';
var list = document.querySelector('ul');
list.appendChild(newTask); */

//lisenner
// var button = document.querySelector('button');
/* button.addEventListener('mousemove', clickButton);
var index = 1;
function clickButton(e) {
        console.log(e.offsetX);
        console.log(e.offsetY);
        console.log(e.target);
         
        console.log( index++);//va en blue de rgb, pero llega a un punto va a quedar muy blue
        document.body.style.backgroundColor = 'rgb(' + e.offsetX + ',' + e.offsetY + ','+index+')';
} */

/* var input = document.getElementById('newTaskInput');
input.addEventListener('keydown', onEvent);

function onEvent(e) {
        console.log(e.target.value);
        document.querySelector('li').textContent = e.target.value;    
} */