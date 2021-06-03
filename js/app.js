"use strict"

function cambiarClase(){
    let siteNav = document.getElementById('site-nav');
        siteNav.classList.toggle('site-nav-open');
    let menuOpen = document.getElementById('menu-toggle');
        menuOpen.classList.toggle('menu-open');    
        
}


function Captcha() {
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
    }
    var code = a+b+c+d+e+f+g;
    document.getElementById('captcha').innerHTML=code;
       
}

function ValidarCaptcha() {
    if (  document.getElementById('captcha').innerHTML === document.getElementById('txtInput').value) {
       document.getElementById('resultado').innerHTML= "Captcha correcto.";
    }
    else {
        document.getElementById('resultado').innerHTML= "Captcha Incorrecto. Vuelva a ingresarlo.";
        Captcha();
    }
}




document.addEventListener("DOMContentLoaded", function (event) {
    cargarTabla();
});

const Maquinas = [{
    id: 1,
    Modelo: "R45C-I",
    codigo: "10582005N",
    peso: "1.500 Kg",
    motormarca: "Hanomag",
    motorpotencia: "40KW - 50 Hp",
},
{
    id: 2,
    Modelo: "R55C-II",
    codigo: "10582016N",
    peso: "2.000 Kg",
    motormarca: "Cummins",
    motorpotencia: "75 Kw / 100 Hp",
},
{
    id: 3,
    Modelo: "R65C-II",
    codigo: "10582018N",
    peso: "2.500 Kg",
    motormarca: "Weichaig",
    motorpotencia: "92 Kw"
}

];

function cargarTabla() {
    console.log("cargar tabla")
    const cuerpotabla = document.querySelector("#cuerpotabla");

    Maquinas.forEach(Maquina => {
        const tr = document.createElement("tr");

        let tdModelo = document.createElement("td");
        tdModelo.textContent = Maquina.Modelo;
        tr.appendChild(tdModelo);

        let tdcodigo = document.createElement("td");
        tdcodigo.textContent = Maquina.codigo;
        tr.appendChild(tdcodigo);

        let tdpeso = document.createElement("td");
        tdpeso.textContent = Maquina.peso;
        tr.appendChild(tdpeso);

        let tdmotormarca = document.createElement("td");
        tdmotormarca.textContent = Maquina.motormarca;
        tr.appendChild(tdmotormarca);

        let tdmotorpotencia = document.createElement("td");
        tdmotorpotencia.textContent = Maquina.motorpotencia;
        tr.appendChild(tdmotorpotencia);

        cuerpotabla.appendChild(tr);
    })
}


const form = document.getElementById('formdata');
form.addEventListener('submit', function(event){
    event.preventDefault();
    let transactionFormData = new FormData(form);
    let formproductos = document.getElementById('cuerpotabla');

    let newproductorow = formproductos.insertRow(-1);

    let newTypeCell = newproductorow.insertCell(0);
    newTypeCell.textContent = transactionFormData.get("modelo");

    newTypeCell = newproductorow.insertCell(1);
    newTypeCell.textContent = transactionFormData.get("codigo");

    newTypeCell = newproductorow.insertCell(2);
    newTypeCell.textContent = transactionFormData.get("peso");

    newTypeCell = newproductorow.insertCell(3);
    newTypeCell.textContent = transactionFormData.get("motor-marca");

    newTypeCell = newproductorow.insertCell(4);
    newTypeCell.textContent = transactionFormData.get("motor-potencia");
}
);

let delteButton = document.getElementById('borrar');
delteButton.addEventListener('click', (event) =>{
    document.getElementById('cuerpotabla').remove();
});


const triplicado = [{
    id: 4,
    Modelo: "M50-HD",
    codigo: "10582804N",
    peso: "1.500 Kg",
    motormarca: "Cummins",
    motorpotencia: "60 Kw / 80 Hp",
},
{
    id: 5,
    Modelo: "M80HD II",
    codigo: "10582810.1N",
    peso: "3.500 Kg",
    motormarca: "Cummins",
    motorpotencia: "97 Kw / 130 Hp",
},
{
    id: 6,
    Modelo: "M100HD II",
    codigo: "10582820.1N",
    peso: "5000 Kg",
    motormarca: " Weichai",
    motorpotencia: "162 Kw / 220 Hp"
}

];


let triplico = document.getElementById('btn-añadir3');
triplico.addEventListener('click', (event) =>{
    agregar3();
});



function agregar3() {
    console.log("cargar tabla")
    const cuerpotabla = document.querySelector("#cuerpotabla");

    triplicado.forEach(Maquina => {
        const tr = document.createElement("tr");

        let tdModelo = document.createElement("td");
        tdModelo.textContent = Maquina.Modelo;
        tr.appendChild(tdModelo);

        let tdcodigo = document.createElement("td");
        tdcodigo.textContent = Maquina.codigo;
        tr.appendChild(tdcodigo);

        let tdpeso = document.createElement("td");
        tdpeso.textContent = Maquina.peso;
        tr.appendChild(tdpeso);

        let tdmotormarca = document.createElement("td");
        tdmotormarca.textContent = Maquina.motormarca;
        tr.appendChild(tdmotormarca);

        let tdmotorpotencia = document.createElement("td");
        tdmotorpotencia.textContent = Maquina.motorpotencia;
        tr.appendChild(tdmotorpotencia);

        cuerpotabla.appendChild(tr);
    });
}