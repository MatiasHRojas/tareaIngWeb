let seccion1:any = document.getElementById("seccion1");
let formulario:any = document.getElementById("formulario");

let resetButton:any = document.getElementById("limpiar");
resetButton.addEventListener("click",limpiarDatos);

function limpiarDatos(event:any){
    let name:any=document.getElementById("nombrecompleto");
    let rut:any=document.getElementById("rut");
    let mail:any=document.getElementById("email");
    let phone:any=document.getElementById("telefono");

    name.value="";
    rut.value="";
    mail.value="";
    phone.value='';

    cleanFirstCheckbox();
    cleanRadio();
    cleanRange();
    cleanSecondCheckbox();

    let coment:any=document.getElementById("opinion");
    coment.value=null;

    cleanErrors(name,rut,mail,phone,coment);

    event.preventDefault();
};

function cleanErrors(name:any,rut:any,mail:any,phone:any,coment:any){
    resetError("s1");
    resetError("s2");
    resetError("s3");
    resetError("s4");
    resetError("s5");
    name.style.border = "solid 1px rgb(177, 177, 177)";
    name.style.boxShadow = 'none';
    rut.style.border = "solid 1px rgb(177, 177, 177)";
    rut.style.boxShadow = 'none';
    mail.style.border = "solid 1px rgb(177, 177, 177)";
    mail.style.boxShadow = 'none';
    phone.style.border = "solid 1px rgb(177, 177, 177)";
    phone.style.boxShadow = 'none';
    coment.style.border = "solid 1px rgb(177, 177, 177)";
    coment.style.boxShadow = 'none';
}

function cleanFirstCheckbox(){
    let opcion1:any=document.getElementById("opcionA1");
    let opcion2:any=document.getElementById("opcionA2");
    let opcion3:any=document.getElementById("opcionA3");
    let opcion4:any=document.getElementById("opcionA4");
    let opcion5:any=document.getElementById("opcionA5");
    let opcion6:any=document.getElementById("opcionA6");
    let opcion7:any=document.getElementById("opcionA7");
    let opcion8:any=document.getElementById("opcionA8");
    let opcion9:any=document.getElementById("opcionA9");
    let opcion10:any=document.getElementById("opcionA10");
    let opcion11:any=document.getElementById("opcionA11");
    let opcion12:any=document.getElementById("opcionA12");

    opcion1.checked=false;
    opcion2.checked=false;
    opcion3.checked=false;
    opcion4.checked=false;
    opcion5.checked=false;
    opcion6.checked=false;
    opcion7.checked=false;
    opcion8.checked=false;
    opcion9.checked=false;
    opcion10.checked=false;
    opcion11.checked=false;
    opcion12.checked=false;
}

function cleanRadio(){
    let opcion1:any=document.getElementById("opcionB1");
    let opcion2:any=document.getElementById("opcionB2");
    let opcion3:any=document.getElementById("opcionB3");

    opcion1.checked=false;
    opcion2.checked=false;
    opcion3.checked=false;
}

function cleanRange(){
    let opcion1:any=document.getElementById("opcionC1");
    let opcion2:any=document.getElementById("opcionC2");
    let opcion3:any=document.getElementById("opcionC3");

    opcion1.value=4;
    opcion2.value=4;
    opcion3.value=4;
}

function cleanSecondCheckbox(){
    let opcion1:any=document.getElementById("opcionD1");
    let opcion2:any=document.getElementById("opcionD2");
    let opcion3:any=document.getElementById("opcionD3");
    let opcion4:any=document.getElementById("opcionD4");
    let opcion5:any=document.getElementById("opcionD5");

    opcion1.checked=false;
    opcion2.checked=false;
    opcion3.checked=false;
    opcion4.checked=false;
    opcion5.value=null;
}

let submitButton:any = document.getElementById("enviar");
submitButton.addEventListener("click",comprobarDatos);

function valid(item:any){
    item.style.border= 'solid 1px #63CE64';
    item.style.boxShadow = '0em 0em 0.8em rgba(148, 245, 109, 0.815)';
}

function invalid(item:any){
    item.style.border= 'solid 1px rgb(245, 109, 121)';
    item.style.boxShadow = '0em 0em 0.8em rgba(245, 109, 121, 0.6)';
}

function resetError(spanId:string){
    let span:any = document.getElementById(spanId);
    span.textContent="";
}

function comprobarDatos(event:any){
    let scroll:number=0;
    let submit:boolean=true;

    if(checkTextArea()){
        resetError("s5");
    } else {
        submit = false;
        scroll=1250;  
    }
    if(checkSecondCheckbox()){
        resetError("s4")
    } else {
        submit = false;
        scroll=950;
    }
    if(checkRadio()){
        resetError("s3");
    } else {
        submit = false;
        scroll=650;
    }
    if(checkFirstCheckbox()){
        resetError("s2");
    } else {
        submit = false;
        scroll=350;
    }
    if(checkFirstSection()){
        resetError("s1");
    } else {
        submit = false;
        scroll=0;
    }

    window.scroll({
        top: scroll,
        behavior: 'smooth'
    });

    if(submit == true){
        mensaje();
        formulario.style.display = "none";
        setTimeout(function(){
            formulario.submit();
        },5000);
    }

    event.preventDefault();
}

function checkFirstSection(){
    let span:any = document.getElementById("s1");
    let errormsg:string="";
    let flag:boolean=true;
    let nombre:any=document.getElementById("nombrecompleto");
    let rut:any=document.getElementById("rut");
    let email:any=document.getElementById("email");
    let telefono:any=document.getElementById("telefono");

    if(nombre.value===""){
        errormsg = errormsg +"* Por favor introduzca un nombre.<br>";
        invalid(nombre);
        flag=false;
    } else {
        valid(nombre);
    }
    if(rut.value===""){
        errormsg = errormsg +"* Por favor introduzca un rut.<br>";
        invalid(rut);
        flag=false;
    }else{
        let copiarut:string = rut.value;
        copiarut.toUpperCase;
        if(!formatoRut(copiarut)){
            errormsg = errormsg +"* Formato de rut no válido.<br>";
            invalid(rut);
            flag=false;
        } else {
            valid(rut);
        }
    }
    if(email.value===""){
        errormsg = errormsg +"* Por favor introduzca un email.<br>";
        invalid(email);
        flag=false;
    }else{
        valid(email);
    }
    if(telefono.value===""){
        errormsg = errormsg +"* Por favor introduzca un telefono.<br>";
        invalid(telefono);
        flag=false;
    }else{
        if((telefono.value).length != 9){
            errormsg = errormsg +"* Teléfono no válido.<br>";
            invalid(telefono);
            flag=false;
        } else {
            valid(telefono);
        }
    }

    if(flag==false)
        span.innerHTML=errormsg+"<p></p>";

    return flag;
}

function formatoRut(rut:string){
    let i:number;
    let tam:number=rut.length;
    let dver:string=(rut.charAt(tam-1)).toUpperCase();

    if(rut.length == 9 || rut.length == 10){
        if(dver=="K" || (dver>="0" && dver<="9")){
            if(rut.charAt(tam-2)=='-'){
                for(i=0; i < tam-2; i++){
                    if(rut.charAt(i)<"0" || rut.charAt(i)>"9"){
                        return false;
                    }
                }
                return true;
            }
        }
    }
    return false;
}

function checkFirstCheckbox(){
    let cont:number = 0;
    let span:any = document.getElementById("s2");

    let opcion1:any=document.getElementById("opcionA1");
    let opcion2:any=document.getElementById("opcionA2");
    let opcion3:any=document.getElementById("opcionA3");
    let opcion4:any=document.getElementById("opcionA4");
    let opcion5:any=document.getElementById("opcionA5");
    let opcion6:any=document.getElementById("opcionA6");
    let opcion7:any=document.getElementById("opcionA7");
    let opcion8:any=document.getElementById("opcionA8");
    let opcion9:any=document.getElementById("opcionA9");
    let opcion10:any=document.getElementById("opcionA10");
    let opcion11:any=document.getElementById("opcionA11");
    let opcion12:any=document.getElementById("opcionA12");

    if(opcion1.checked) cont++;
    if(opcion2.checked) cont++;
    if(opcion3.checked) cont++;
    if(opcion4.checked) cont++;
    if(opcion5.checked) cont++;
    if(opcion6.checked) cont++;
    if(opcion7.checked) cont++;
    if(opcion8.checked) cont++;
    if(opcion9.checked) cont++;
    if(opcion10.checked) cont++;
    if(opcion11.checked) cont++;
    if(opcion12.checked) cont++;

    if(cont==0){
        span.textContent="* Seleccione al menos un lenguaje de programación.";
        return false;
    } else {
        return true;
    }
}

function checkRadio(){
    let span:any = document.getElementById("s3");
    let opcion1:any=document.getElementById("opcionB1");
    let opcion2:any=document.getElementById("opcionB2");
    let opcion3:any=document.getElementById("opcionB3");

    if(opcion1.checked || opcion2.checked || opcion3.checked){
        return true;
    } else {
        span.textContent="* Seleccione un nivel de experiencia de programación."; 
        return false;
    }
}

function checkSecondCheckbox(){
    let span:any = document.getElementById("s4");
    let opcion1:any=document.getElementById("opcionD1");
    let opcion2:any=document.getElementById("opcionD2");
    let opcion3:any=document.getElementById("opcionD3");
    let opcion4:any=document.getElementById("opcionD4");
    let opcion5:any=document.getElementById("opcionD5");

    if(!opcion1.checked){
        if(!opcion2.checked){
            if(!opcion3.checked){
                if(!opcion4.checked){
                    if(opcion5.value===""){
                        span.textContent="* Seleccione o escriba al menos un ramo.";
                        return false;
                    }
                }
            }
        }
    }
    return true;
}

function checkTextArea(){
    let span:any= document.getElementById("s5");
    let textarea:any=document.getElementById("opinion");

    if(textarea.value===""){
        span.textContent="* Ingrese un comentario.";
        invalid(textarea);
        return false;
    } else if((textarea.value).length > 500){
        span.textContent="* Ha sobrepasado el máximo de caracteres.";
        invalid(textarea);
        return false;
    } else {
        valid(textarea);
        return true;
    }
}

//mensaje despues del submit
function mensaje(){
    let div:any = document.createElement("div");
    let p1:any = document.createElement("p");
    let p2:any = document.createElement("p");
    let div2:any = document.createElement("div");

    div2.className= "spinner-border text-secondary";
    
    div.id = "mensaje";
    p1.id = "p1";
    p2.id = "p2";

    div.appendChild(p1).textContent="Hemos recibido sus datos, pronto nos estaremos comunicando con usted."
    div.appendChild(p2).textContent="Será redirigido en 5 segundos";
    div.appendChild(div2);  
    seccion1.appendChild(div);
}