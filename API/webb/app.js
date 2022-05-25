const registrarPersona = () => {

    const name = document.querySelector('.nameI');
    const doc = document.querySelector('.docI');
    const age = document.querySelector('.edaI');
    const prof = document.querySelector('.profI');
    const pass = document.querySelector('.passI');
    const type = document.querySelector('.typeI');

    let persona = {};

    persona.nombre = name.value;
    persona.documento = doc.value;
    persona.edad = age.value;
    persona.profesion = prof.value;
    persona.password = pass.value;
    persona.type = type.value;

    let personaJSON = JSON.stringify(persona);

    console.log("Regitrando!!!\n"+personaJSON);
}
const consultaIndividual = () => {
    console.log("Consulta Individual!!!");
}
const actualizarPersona = () => {

    const name = document.querySelector('.nameActI');
    const doc = document.querySelector('.docActI');
    const age = document.querySelector('.edaActI');
    const prof = document.querySelector('.profActI');
   
    let persona = {};

    persona.nombre = name.value;
    persona.documento = doc.value;
    persona.edad = age.value;
    persona.profesion = prof.value;

    let personaActJSON = JSON.stringify(persona);

    console.log("Actualizar!!!\n"+personaActJSON);
}
const eliminarPersona = () => {
    console.log("Eliminar!!!");
}
const consultarTodo = () => {
    console.log("Consultar Todo!!!");
}