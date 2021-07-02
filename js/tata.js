"use strict";

document.addEventListener('DOMContentLoaded', Load);
document.querySelector("#btn-anadir").addEventListener("click", AnadirDato);
document.querySelector("#btn-eliminar").addEventListener("click", EliminarDato);
document.querySelector("#btn-editar").addEventListener("click", EditarDato);
document.querySelector("#btn-okey").addEventListener("click", filtrar);
document.querySelector("#btn-crear").addEventListener("click", anadirtres);

const url = 'https://60db8ed8801dcb00172911fd.mockapi.io/tpe/maquinas'
let id = 0;

async function Load(){
    let listado = document.querySelector("#tabla");
    try{
      let response = await fetch(url);
      if(response.ok){
        let json = await response.json();
        console.log(json);
        tabla(json);
      }
      else
        listado.innerHTML = "<h1>Error - Failed URL!</h1>";
    }
    catch (response){
        listado.innerHTML = "<h1>Connection error</h1>";
    }
    
  }  
    function tabla(json){
      console.log(json);
      for(let valor of json){
        let modelo = valor.modelo;
        let codigo = valor.codigo;
        let capacidad = valor.capacidad;
        let motor_marca = valor.motor_marca;
        let motor_potencia = valor.motor_potencia;

        id = valor.id;
        contenido.innerHTML +=`
        <tr>
            <td>${modelo}</td>
            <td>${codigo}</td>
            <td>${capacidad}</td>
            <td>${motor_marca}</td>
            <td>${motor_potencia}</td>
            <td>${id}</td>
        </tr>
        `
      }
    }

async function AnadirDato(event){
    event.preventDefault();
    let modelo = document.getElementById("txtmodelo").value;
    let codigo = document.getElementById("txtcodigo").value;
    let capacidad = document.getElementById("txtCapacidad").value;
    let motor_marca = document.getElementById("txtmotor-marca").value;
    let motor_potencia = document.getElementById("txtmotor-potencia").value;
    

    let valor = {
        "modelo" : modelo,
        "codigo" : codigo,
        "capacidad" : capacidad,
        "motor_marca" : motor_marca,
        "motor_potencia" : motor_potencia
    }

    try{
        let res = await fetch(url, {
            "method" : "POST",
            "headers" : {"Content-type": "application/json"},
            "body" : JSON.stringify(valor)
        });
        if(res.status === 201){
            document.querySelector("#mensaje").innerHTML = "Creado!";
        }
    }
    catch (error){
        console.log("Error!");
    }
}

async function EliminarDato(){
  try{
    let res = await fetch(`${url}/${id}`, {
        "method" : "DELETE"
    });
    if(res.status === 200){
        document.querySelector("#mensaje").innerHTML = "Eliminado!";
    }
}
catch (error){
    console.log("Error!");
}
}

async function EditarDato(event){
  event.preventDefault();
  let modelo = document.getElementById("txtmodelo").value;
  let codigo = document.getElementById("txtcodigo").value;
  let capacidad = document.getElementById("txtCapacidad").value;
  let motor_marca = document.getElementById("txtmotor-marca").value;
  let motor_potencia = document.getElementById("txtmotor-potencia").value;
  let id = document.getElementById("txtid").value;

  let valor = {
      "modelo" : modelo,
      "codigo" : codigo,
      "capacidad" : capacidad,
      "motor_marca" : motor_marca,
      "motor_potencia" : motor_potencia,
      "id" : id
  }

  try{
      let res = await fetch(`${url}/${id}`, {
          "method" : "PUT",
          "headers" : {"Content-type": "application/json"},
          "body" : JSON.stringify(valor)
      });
      if(res.status === 200){
          alert(status);
          document.querySelector("#mensaje").innerHTML = "Modificado!";
      }
  }
  catch (error){
      console.log("Error!");
  }
}

async function filtrar(){
    contenido.innerHTML = "";
    let listado = document.querySelector("#tabla");
    try{
        var valor = document.getElementById("filtro");
        let response = await fetch('https://60db8ed8801dcb00172911fd.mockapi.io/tpe/maquinas?motor_marca=' + valor.selectedOptions[0].text);
        if(response.ok){
            let json = await response.json();
            console.log(json);
            tabla(json);
        }
        else
            listado.innerHTML = "<h1>Error - Failed URL!</h1>";
    }
    catch (response){
        listado.innerHTML = "<h1>Connection error</h1>";
    }
}

async function anadirconstante(id){
    let modelo = id.modelo;
    let codigo = id.codigo;
    let capacidad = id.capacidad;
    let motor_marca = id.motor_marca;
    let motor_potencia = id.motor_potencia;
    
    let valor = {
        "modelo" : modelo,
        "codigo" : codigo,
        "capacidad" : capacidad,
        "motor_marca" : motor_marca,
        "motor_potencia" : motor_potencia
    }
   
    try{
        let res = await fetch(url, {
            "method" : "POST",
            "headers" : {"Content-type" : "application/json"},
            "body" : JSON.stringify(valor)
        });
        if(res.status === 201){
            document.querySelector("#mensaje").innerHTML = "Creado!";
        }
    }
    catch (error){
        console.log("Error!");
    }
}

const triplicado = [{
    id: 4,
    modelo: "m50-hd",
    codigo: "10582804n",
    capacidad: "1.500 kg",
    motor_marca: "cummins",
    motor_potencia: "80 hp",
},
{
    id: 5,
    modelo: "m80hd-ii",
    codigo: "10582810.1n",
    capacidad: "3.500 kg",
    motor_marca: "cummins",
    motor_potencia: "130 hp",
},
{
    id: 6,
    modelo: "m100hd-ii",
    codigo: "10582820.1n",
    capacidad: "5.000 kg",
    motor_marca: " weichai",
    motor_potencia: "220 hp"
}];

function anadirtres(id){
    triplicado.forEach (id => {
        anadirconstante(id);
    });
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

