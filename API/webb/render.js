const registrar = document.querySelector('#reg');
const consultaI = document.querySelector('#conI');
const actualizar = document.querySelector('#act');
const eliminar = document.querySelector('#eli');
const consultaG = document.querySelector('#conG');
const sectionRender = document.querySelector('#section2');

registrar.addEventListener('click',() =>{renderReg();});
consultaI.addEventListener('click',() =>{renderConsI();});
actualizar.addEventListener('click',() =>{renderAct();});
eliminar.addEventListener('click',() =>{renderEli();});
consultaG.addEventListener('click',() =>{renderConsG();});

const renderReg = () =>{
    let reg = registrarPersona();
}
const renderConsI = () =>{
    let con = consultaIndividual();
}
const renderAct = () => {
    let act = actualizarPersona();
}
const renderEli = () =>{
    let eli = eliminarPersona();
}
const renderConsG = () =>{
    let conG = consultarTodo();
}
////////////////////////////////////////////////////////////////
const renderArrConsG = (element) => {console.log(element);console.log("Consulta General");}
const renderArrConsI = (element) => {console.log(element);console.log("Consulta Individual");}