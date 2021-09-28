"use strict";
var seccion1 = document.getElementById("seccion1");
var formulario = document.getElementById("formulario");
var resetButton = document.getElementById("limpiar");
resetButton.addEventListener("click", limpiarDatos);
function limpiarDatos(event) {
    var name = document.getElementById("nombrecompleto");
    var rut = document.getElementById("rut");
    var mail = document.getElementById("email");
    var phone = document.getElementById("telefono");
    name.value = "";
    rut.value = "";
    mail.value = "";
    phone.value = '';
    cleanFirstCheckbox();
    cleanRadio();
    cleanRange();
    cleanSecondCheckbox();
    var coment = document.getElementById("opinion");
    coment.value = null;
    cleanErrors(name, rut, mail, phone, coment);
    event.preventDefault();
}
;
function cleanErrors(name, rut, mail, phone, coment) {
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
function cleanFirstCheckbox() {
    var opcion1 = document.getElementById("opcionA1");
    var opcion2 = document.getElementById("opcionA2");
    var opcion3 = document.getElementById("opcionA3");
    var opcion4 = document.getElementById("opcionA4");
    var opcion5 = document.getElementById("opcionA5");
    var opcion6 = document.getElementById("opcionA6");
    var opcion7 = document.getElementById("opcionA7");
    var opcion8 = document.getElementById("opcionA8");
    var opcion9 = document.getElementById("opcionA9");
    var opcion10 = document.getElementById("opcionA10");
    var opcion11 = document.getElementById("opcionA11");
    var opcion12 = document.getElementById("opcionA12");
    opcion1.checked = false;
    opcion2.checked = false;
    opcion3.checked = false;
    opcion4.checked = false;
    opcion5.checked = false;
    opcion6.checked = false;
    opcion7.checked = false;
    opcion8.checked = false;
    opcion9.checked = false;
    opcion10.checked = false;
    opcion11.checked = false;
    opcion12.checked = false;
}
function cleanRadio() {
    var opcion1 = document.getElementById("opcionB1");
    var opcion2 = document.getElementById("opcionB2");
    var opcion3 = document.getElementById("opcionB3");
    opcion1.checked = false;
    opcion2.checked = false;
    opcion3.checked = false;
}
function cleanRange() {
    var opcion1 = document.getElementById("opcionC1");
    var opcion2 = document.getElementById("opcionC2");
    var opcion3 = document.getElementById("opcionC3");
    opcion1.value = 4;
    opcion2.value = 4;
    opcion3.value = 4;
}
function cleanSecondCheckbox() {
    var opcion1 = document.getElementById("opcionD1");
    var opcion2 = document.getElementById("opcionD2");
    var opcion3 = document.getElementById("opcionD3");
    var opcion4 = document.getElementById("opcionD4");
    var opcion5 = document.getElementById("opcionD5");
    opcion1.checked = false;
    opcion2.checked = false;
    opcion3.checked = false;
    opcion4.checked = false;
    opcion5.value = null;
}
var submitButton = document.getElementById("enviar");
submitButton.addEventListener("click", comprobarDatos);
function valid(item) {
    item.style.border = 'solid 1px #63CE64';
    item.style.boxShadow = '0em 0em 0.8em rgba(148, 245, 109, 0.815)';
}
function invalid(item) {
    item.style.border = 'solid 1px rgb(245, 109, 121)';
    item.style.boxShadow = '0em 0em 0.8em rgba(245, 109, 121, 0.6)';
}
function resetError(spanId) {
    var span = document.getElementById(spanId);
    span.textContent = "";
}
function comprobarDatos(event) {
    var scroll = 0;
    var submit = true;
    if (checkTextArea()) {
        resetError("s5");
    }
    else {
        submit = false;
        scroll = 1250;
    }
    if (checkSecondCheckbox()) {
        resetError("s4");
    }
    else {
        submit = false;
        scroll = 950;
    }
    if (checkRadio()) {
        resetError("s3");
    }
    else {
        submit = false;
        scroll = 650;
    }
    if (checkFirstCheckbox()) {
        resetError("s2");
    }
    else {
        submit = false;
        scroll = 350;
    }
    if (checkFirstSection()) {
        resetError("s1");
    }
    else {
        submit = false;
        scroll = 0;
    }
    window.scroll({
        top: scroll,
        behavior: 'smooth'
    });
    if (submit == true) {
        mensaje();
        formulario.style.display = "none";
        setTimeout(function () {
            formulario.submit();
        }, 5000);
    }
    event.preventDefault();
}
function checkFirstSection() {
    var span = document.getElementById("s1");
    var errormsg = "";
    var flag = true;
    var nombre = document.getElementById("nombrecompleto");
    var rut = document.getElementById("rut");
    var email = document.getElementById("email");
    var telefono = document.getElementById("telefono");
    if (nombre.value === "") {
        errormsg = errormsg + "* Por favor introduzca un nombre.<br>";
        invalid(nombre);
        flag = false;
    }
    else {
        valid(nombre);
    }
    if (rut.value === "") {
        errormsg = errormsg + "* Por favor introduzca un rut.<br>";
        invalid(rut);
        flag = false;
    }
    else {
        var copiarut = rut.value;
        copiarut.toUpperCase;
        if (!formatoRut(copiarut)) {
            errormsg = errormsg + "* Formato de rut no válido.<br>";
            invalid(rut);
            flag = false;
        }
        else {
            valid(rut);
        }
    }
    if (email.value === "") {
        errormsg = errormsg + "* Por favor introduzca un email.<br>";
        invalid(email);
        flag = false;
    }
    else {
        valid(email);
    }
    if (telefono.value === "") {
        errormsg = errormsg + "* Por favor introduzca un telefono.<br>";
        invalid(telefono);
        flag = false;
    }
    else {
        if ((telefono.value).length != 9) {
            errormsg = errormsg + "* Teléfono no válido.<br>";
            invalid(telefono);
            flag = false;
        }
        else {
            valid(telefono);
        }
    }
    if (flag == false)
        span.innerHTML = errormsg + "<p></p>";
    return flag;
}
function formatoRut(rut) {
    var i;
    var tam = rut.length;
    var dver = (rut.charAt(tam - 1)).toUpperCase();
    if (rut.length == 9 || rut.length == 10) {
        if (dver == "K" || (dver >= "0" && dver <= "9")) {
            if (rut.charAt(tam - 2) == '-') {
                for (i = 0; i < tam - 2; i++) {
                    if (rut.charAt(i) < "0" || rut.charAt(i) > "9") {
                        return false;
                    }
                }
                return true;
            }
        }
    }
    return false;
}
function checkFirstCheckbox() {
    var cont = 0;
    var span = document.getElementById("s2");
    var opcion1 = document.getElementById("opcionA1");
    var opcion2 = document.getElementById("opcionA2");
    var opcion3 = document.getElementById("opcionA3");
    var opcion4 = document.getElementById("opcionA4");
    var opcion5 = document.getElementById("opcionA5");
    var opcion6 = document.getElementById("opcionA6");
    var opcion7 = document.getElementById("opcionA7");
    var opcion8 = document.getElementById("opcionA8");
    var opcion9 = document.getElementById("opcionA9");
    var opcion10 = document.getElementById("opcionA10");
    var opcion11 = document.getElementById("opcionA11");
    var opcion12 = document.getElementById("opcionA12");
    if (opcion1.checked)
        cont++;
    if (opcion2.checked)
        cont++;
    if (opcion3.checked)
        cont++;
    if (opcion4.checked)
        cont++;
    if (opcion5.checked)
        cont++;
    if (opcion6.checked)
        cont++;
    if (opcion7.checked)
        cont++;
    if (opcion8.checked)
        cont++;
    if (opcion9.checked)
        cont++;
    if (opcion10.checked)
        cont++;
    if (opcion11.checked)
        cont++;
    if (opcion12.checked)
        cont++;
    if (cont == 0) {
        span.textContent = "* Seleccione al menos un lenguaje de programación.";
        return false;
    }
    else {
        return true;
    }
}
function checkRadio() {
    var span = document.getElementById("s3");
    var opcion1 = document.getElementById("opcionB1");
    var opcion2 = document.getElementById("opcionB2");
    var opcion3 = document.getElementById("opcionB3");
    if (opcion1.checked || opcion2.checked || opcion3.checked) {
        return true;
    }
    else {
        span.textContent = "* Seleccione un nivel de experiencia de programación.";
        return false;
    }
}
function checkSecondCheckbox() {
    var span = document.getElementById("s4");
    var opcion1 = document.getElementById("opcionD1");
    var opcion2 = document.getElementById("opcionD2");
    var opcion3 = document.getElementById("opcionD3");
    var opcion4 = document.getElementById("opcionD4");
    var opcion5 = document.getElementById("opcionD5");
    if (!opcion1.checked) {
        if (!opcion2.checked) {
            if (!opcion3.checked) {
                if (!opcion4.checked) {
                    if (opcion5.value === "") {
                        span.textContent = "* Seleccione o escriba al menos un ramo.";
                        return false;
                    }
                }
            }
        }
    }
    return true;
}
function checkTextArea() {
    var span = document.getElementById("s5");
    var textarea = document.getElementById("opinion");
    if (textarea.value === "") {
        span.textContent = "* Ingrese un comentario.";
        invalid(textarea);
        return false;
    }
    else if ((textarea.value).length > 500) {
        span.textContent = "* Ha sobrepasado el máximo de caracteres.";
        invalid(textarea);
        return false;
    }
    else {
        valid(textarea);
        return true;
    }
}
//mensaje despues del submit
function mensaje() {
    var div = document.createElement("div");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var div2 = document.createElement("div");
    div2.className = "spinner-border text-secondary";
    div.id = "mensaje";
    p1.id = "p1";
    p2.id = "p2";
    div.appendChild(p1).textContent = "Hemos recibido sus datos, pronto nos estaremos comunicando con usted.";
    div.appendChild(p2).textContent = "Será redirigido en 5 segundos";
    div.appendChild(div2);
    seccion1.appendChild(div);
}
