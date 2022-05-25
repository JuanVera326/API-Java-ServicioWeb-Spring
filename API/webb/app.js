const registrar = document.querySelector('#reg');
const consultaI = document.querySelector('#conI');
const actualizar = document.querySelector('#act');
const eliminar = document.querySelector('#eli');
const consultaG = document.querySelector('#conG');

registrar.addEventListener('click',() =>{
    console.log("Registra!!");
});
consultaI.addEventListener('click',() =>{
    console.log("Consulta Individual!!");
});
actualizar.addEventListener('click',() =>{
    console.log("Actualiza!!");
});
eliminar.addEventListener('click',() =>{
    console.log("Elimina!!");
});
consultaG.addEventListener('click',() =>{
    console.log("Consulta General!!");
});