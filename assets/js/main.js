/**
 * Estilos y clases
 */

// Agregar y Eliminar clases de un elemento HTML

console.log(document.body.className)
// document.body.className = 'bg-orange';
// console.log(document.body.className);
console.log(document.body.classList);
document.body.classList.add('txt-white');
document.body.classList.remove('bg-gray');
document.body.classList.toggle('txt-black');
console.log(document.body.classList);
document.body.classList.toggle('txt-black');
console.log(document.body.classList);

setInterval(() => document.body.classList.toggle('txt-black'), 500);





