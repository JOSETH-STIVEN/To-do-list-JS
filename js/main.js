// creamos las constantes globales para los elementos principales
const input= document.getElementById('to-do-input');
const addBtn= document.getElementById('add-btn');
const toDoList= document.getElementById('cont-to-do-list');
const completedList= document.getElementById('cont-completed-list');


// Creamos la función que nos permita crear una nueva tarea apartir del formulario
// Toda etiqueta que vamos acrear es apartir de la maqueta html existente
function createToDoItems(textoItem){
    // creamos el nodo o elemento padre
    const item = document.createElement('div');
    item.classList.add('item-to-do');
    // Creamos el ndo hijo de le div y le agregamos type checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    // creamos el siguiente nodo hijo parrafo a este parrafo asignando el valor del argumento  que esta en la funcion es decir lo que escribe el ususario en el campo
    const p = document.createElement('p');
    p.textContent = textoItem;

    // cramos el ultimo nodo hijo, el boton de elimninar
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';

    // Ensamblamos desntro del nodo padre sus nodos hijos, es decir la estructura de la tarea
    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);
    // Utilizamos el return para dar respuestas del elemento creado ya que lo utilizaremos mas adelante
    return item;
}