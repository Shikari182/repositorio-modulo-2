import "./style.css";

const totalCena = 120;  
const bebidas = 18;  
const costoComida = totalCena - bebidas;
const numComensales = 7;

const pagoComensal = costoComida / numComensales;

console.log(`Cada comensal debe pagar ${pagoComensal} € por la comida.`);