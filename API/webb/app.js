let server = "http://localhost:8080/servicio";
let arr;

const registrarPersona = () => {

    let URL = server + `/guardar`;

    const name = document.querySelector('.nameI');
    const doc = document.querySelector('.docI');
    const age = document.querySelector('.edaI');
    const tel = document.querySelector('.telI');
    const prof = document.querySelector('.profI');
    const pass = document.querySelector('.passI');
    const type = document.querySelector('.typeI');

    let persona = {};

    persona.documento = doc.value;
    persona.edad = parseInt(age.value);
    persona.nombre = name.value;
    persona.password = pass.value;
    persona.profesion = prof.value;
    persona.telefono = tel.value;
    persona.tipo = parseInt(type.value);

    let personaJSON = JSON.stringify(persona);

    send(personaJSON,URL,'POST');
    
    console.log("Regitrando!!!\n"+personaJSON);
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

    const idEli = document.querySelector('.eliI');

    let id = {};

    id.documento = idEli.value;

    let idJSON = JSON.stringify(id);
    console.log("Eliminar!!!\n"+idJSON);
}
const consultarTodo = () => {
    getGeneral('/personas-list',1);
}
const consultaIndividual = () => {

    const idCon = document.querySelector('.consIndI');
    getOnlyone(`/personas/${idCon.value}`,0);
}
////////////////////////////////////////////////////////////////
const getGeneral = (ext) => {
    let URL = server + ext;
    fetch(URL)
    .then(response => response.json())
    .then(data => data.forEach(element => {
        renderArrConsG(element);
    }));
}
const getOnlyone = (ext) => {
    let URL = server + ext;
    fetch(URL)
    .then(response => response.json())
    .then(data => renderArrConsI(data));
}
const send = (datos,url,method) => {
    $.ajax({
        url : url,
        data : datos,   
        method : method,
        dataType : 'JSON',
        success : function resp(){
               console.log("Exitoso!!");
        },
        error: function rsp(){
               console.log("No Exitoso !!");
        }
    });
}