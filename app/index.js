import { App } from "./App.js";
import wp_api from "./helpers/wp_api.js";

document.addEventListener("DOMContentLoaded", App); //carga el componente principal.
window.addEventListener("hashchange", () => {
    wp_api.page = 1,
    App();
}) //Detecta cambios en la url despues del # https://www.w3schools.com/jsref/event_onhashchange.asp
