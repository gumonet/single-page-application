import { App } from "./App.js";

document.addEventListener("DOMContentLoaded", App); //carga el componente principal.
window.addEventListener("hashchange", App) //Detecta cambios en la url despues del # https://www.w3schools.com/jsref/event_onhashchange.asp