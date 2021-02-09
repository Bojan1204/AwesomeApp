import { Button } from "bootstrap";
// import { addDevServerEntrypoints } from "webpack-dev-server";


let header = document.getElementById('probicabre');

window.addEventListener('scroll', ()=>{
    header.classList.toggle('probicabree', window.scrollY > 1);
});











