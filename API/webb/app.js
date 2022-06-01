let server = "http://localhost:8080/servicio";

const names = document.querySelector('.inputName');
const doc = document.querySelector('.inputDoc');
const age = document.querySelector('.inputAge');
const tel = document.querySelector('.inputTel');
const prof = document.querySelector('.inputProf');
const pass = document.querySelector('.inputPass');
const type = document.querySelector('.inputTip');


const registrarPersona = () => {

    let URL = server + `/guardar`;
    let persona = {};

    persona.documento = doc.value;
    persona.edad = parseInt(age.value);
    persona.nombre = names.value;
    persona.password = pass.value;
    persona.profesion = prof.value;
    persona.telefono = tel.value;
    persona.tipo = parseInt(type.value);

    let personaJSON = JSON.stringify(persona);

    send(URL,personaJSON,'POST','Registro');
    
    console.log("Regitrando!!!\n");
}
const actualizarPersona = () => {

    let URL = server + "/actualizar";

    let persona = {};

    persona.documento = doc.value;
    persona.edad = parseInt(age.value);
    persona.nombre = names.value;
    persona.password = pass.value;
    persona.profesion = prof.value;
    persona.telefono = tel.value;
    persona.tipo = parseInt(type.value);

    let personaActJSON = JSON.stringify(persona);

    send(URL,personaActJSON,'PUT','Actualizacion');

    console.log("Actualizando!!!\n");
}
const eliminarPersona = () => {
    URL = server + `/eliminar/${doc.value}`;
    send(URL,"",'DELETE','Eliminacion');
    console.log("Eliminado!!!\n");
}
const consultarTodo = () => {
    getGeneral('/personas-list');
}
const consultaIndividual = () => {
    getOnlyone(`/personas/${doc.value}`);
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
const send = (URL,datos,method,str) => {
    fetch(URL, {
        method: method,
        body: datos,
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(response => (response.json()))
      .then(response => console.log(response))
}