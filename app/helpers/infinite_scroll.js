import wp_api from './wp_api.js';
import {PostCard} from '../components/PostCard.js';
import {ajax} from './ajax.js';

export async function InfiniteScroll () {
    const d = document;
    const w = window;
    let $main = d.getElementById("main");

    let query = localStorage.getItem("wpSearch");
    let apiURL;
    let Component;

    w.addEventListener( "scroll", async (e) => {
        let {scrollTop, clientHeight, scrollHeight } = d.documentElement;
        let {hash} = w.location;

        //console.log( scrollTop, clientHeight, scrollHeight, hash);

        if( scrollTop + clientHeight >= scrollHeight ) {
            wp_api.page++
             if( !hash || hash === "#/"){ //si estamos en el home se llama a POSTS 
                apiURL = `${wp_api.POSTS}&page=${wp_api.page}`;
                Component = PostCard;
             } //Falta especificar que pasaría si es search
        }else{
            return false;
        }

        //Ejecuta la petición para cargar los post
        d.querySelector(".loader").style.display = "block";
        await ajax({
            url: apiURL ,
            cbSucces: ( posts ) => {
                console.log( posts );
                let html = "";
                posts.forEach( post => {
                    html += Component( post );
                });
                d.querySelector(".loader").style.display = "none";
                $main.insertAdjacentHTML( "beforeend", html );
                
            }
        })

    });

}