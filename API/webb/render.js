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
    sectionRender.textContent = "";

    const title =  document.createElement('h3');
    const inputName = document.createElement('input');
    const inputDoc = document.createElement('input');
    const inputTel = document.createElement('input');
    const inputEdad = document.createElement('input');
    const inputProf = document.createElement('input');
    const inputPass = document.createElement('input');
    const inputType = document.createElement('input');
    const btnReg = document.createElement('button');
    const container = document.createElement('div');
    
    title.textContent = "Regitro!!";
    btnReg.textContent = "Registar"
    btnReg.setAttribute('type','submit')

    inputName.setAttribute('type','text');
    inputName.setAttribute('placeholder','Ingresa tu Nombre...');
    inputDoc.setAttribute('type','text');
    inputDoc.setAttribute('placeholder','Ingresa tu Documento...');
    inputTel.setAttribute('type','text');
    inputTel.setAttribute('placeholder','Ingresa tu Telefono...');
    inputEdad.setAttribute('type','number');
    inputEdad.setAttribute('placeholder','Ingresa tu Edad...');
    inputEdad.setAttribute('min','1');
    inputProf.setAttribute('type','text');
    inputProf.setAttribute('placeholder','Ingresa tu Profesion...');
    inputPass.setAttribute('type','password');
    inputPass.setAttribute('placeholder','Ingresa una Conraseña...');
    inputType.setAttribute('type','number');
    inputType.setAttribute('min','1');
    inputType.setAttribute('max','2');
    inputType.setAttribute('placeholder','Ingresa Tipo Persona...');

    container.appendChild(title);
    container.appendChild(inputName);
    container.appendChild(inputDoc);
    container.appendChild(inputTel);
    container.appendChild(inputEdad);
    container.appendChild(inputProf);   
    container.appendChild(inputPass);
    container.appendChild(inputType);
    container.appendChild(btnReg);

    return sectionRender.appendChild(container);
}
const renderConsI = () =>{
    sectionRender.textContent = "";

    const title = document.createElement('h3');
    const container = document.createElement('div');
    const content = document.createElement('div');
    const inputID = document.createElement('input');
    const btnCon = document.createElement('button');

    container.classList = 'container';    
    content.classList = 'content';

    inputID.setAttribute('type',"text");
    inputID.setAttribute('placeholder',"Documento a Consultar...");
    btnCon.setAttribute('type','submit');

    btnCon.textContent = "Consultar";
    title.textContent = "Consulta Individual!!";

    container.appendChild(title);
    container.appendChild(inputID);
    container.appendChild(btnCon);
    container.appendChild(content);

    return sectionRender.appendChild(container);
}
const renderAct = () =>{
    sectionRender.textContent = "";

    const title =  document.createElement('h3');
    const inputName = document.createElement('input');
    const inputDoc = document.createElement('input');
    const inputTel = document.createElement('input');
    const inputEdad = document.createElement('input');
    const inputProf = document.createElement('input');
    const btnAct = document.createElement('button');
    const container = document.createElement('div');
    
    title.textContent = "Actualizar!!";
    btnAct.textContent = "Actualizar"
    btnAct.setAttribute('type','submit')

    inputName.setAttribute('type','text');
    inputName.setAttribute('placeholder','Ingresa tu Nombre...');
    inputDoc.setAttribute('type','text');
    inputDoc.setAttribute('placeholder','Ingresa tu Documento...');
    inputTel.setAttribute('type','text');
    inputTel.setAttribute('placeholder','Ingresa tu Telefono...');
    inputEdad.setAttribute('type','number');
    inputEdad.setAttribute('placeholder','Ingresa tu Edad...');
    inputEdad.setAttribute('min','1');
    inputProf.setAttribute('type','text');
    inputProf.setAttribute('placeholder','Ingresa tu Profesion...');

    container.appendChild(title);
    container.appendChild(inputName);
    container.appendChild(inputDoc);
    container.appendChild(inputTel);
    container.appendChild(inputEdad);
    container.appendChild(inputProf);   
    container.appendChild(btnAct);

    return sectionRender.appendChild(container);
}
const renderEli = () =>{
    sectionRender.textContent = "";

    const title = document.createElement('h3');
    const container = document.createElement('div');
    const content = document.createElement('div');
    const inputID = document.createElement('input');
    const btnEli = document.createElement('button');

    container.classList = 'container';    
    content.classList = 'content';

    inputID.setAttribute('type',"text");
    inputID.setAttribute('placeholder',"Documento a Eliminar...");
    btnEli.setAttribute('type','submit');

    btnEli.textContent = "Eliminar";
    title.textContent = "Eliminar!!";

    container.appendChild(title);
    container.appendChild(inputID);
    container.appendChild(btnEli);
    container.appendChild(content);

    return sectionRender.appendChild(container);
}
const renderConsG = () =>{
    sectionRender.textContent = "";

    const title = document.createElement('h3');
    const container = document.createElement('div');
    const content = document.createElement('div');
    const btnConG = document.createElement('button');

    container.classList = 'container';    
    content.classList = 'content';

    btnConG.setAttribute('type','submit');

    btnConG.textContent = "Consultar Todos";
    title.textContent = "Consulta General!!";

    container.appendChild(title);
    container.appendChild(btnConG);
    container.appendChild(content);

    return sectionRender.appendChild(container);
}