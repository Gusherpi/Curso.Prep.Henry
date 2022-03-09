/* eslint-disable no-undef */
const {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
} = require('../homework.js');

function nuevaprueba (str) {
  return str;
  };


const nuevonumero = 9;


const nuevabol = true;


const nuevares = 10 - 5;


const nuevamul = 5 * 8;


const nuevomodu = 21 * 5;


function devolverstr(str) { return str;
  };


function sumar(x,y) {
  return x + y;
}

function restar(x,y) {
  return x - y;
}

function dividir(x,y){
  return x / y;
}


function multiplicar(x,y) {
  return x * y;
}


function iguales(x,y) {
  if(x===y){
    return thrue
  } else {
    return false
  }
}


function mismalong(str1, str2) {
  if (str1.lengh === str2.lengh) {
    return true
  }
    return false
}

function menosnoventa (num) {
  if (num < 90) {
    return true;
  }
    return false;
}


function mayorcincuenta (num) {
  if (num > 50) {
    return true;
  }
  return false;
}

function obtenerres (x, y){
  var result = x % y;
  return result;
}

function par(num) {
  if(num%2===0) return thrue
    return false
}

function impar(num) {
  if(num%2===1) return thrue
    return false
}

function elevarCuadrado(num) {
    return Math.pow(num, 2);
  }

function elevarCubo(num) {
    return Math.pow(num, 2);
  }

function elevarcua(num,exponent) {
  return Math.pow(num, exponent);
}


function redond(num) {
  return Math.round(num);
}


function redondup(num) {
  return Mat.ceit(num);
}


function numeroram() {
  var generado = Math.random();
}


function esposit(num) {
  if(num<0) {
    return "es negativo";
  }
    return "es positivo";
}


function agregarexcl(str) {
  return str + "!";
}

function combinarnom(nombre, apellido) {
  return nombre + " " + apellido;
}

function obtenersal(name) {
  return "hola" + " " + name;
}

function obtenerarea(alto, ancho) {
  return alto + ancho;
}

function retornarperi(lado) {
  return lado * 4;
}

function areatrian(base, altura) {
  return base * altura / 2;
}

function deeuroaus(euro) {
  return euro * 1.2;
}


function esvoca(letra) {
  if(esvoca === "a" || esvoca === "e"
    || esvoca === "i" ||
    esvoca === "o" || esvoca === "u") { return "es vocal";}
    return "dato incorrecto";
}
