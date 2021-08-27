import wp_api from '../helpers/wp_api.js';
import {ajax} from '../helpers/ajax.js';
import { PostCard } from './PostCard.js';

export function Router() {
    const d = document;
    const w = window;
    let $posts = d.getElementById("posts");

    let { hash } = location;
    $posts.innerHTML = null;

    if( !hash || hash === "#/" ) {
        ajax({
            url: wp_api.POSTS,
            cbSucces: ( posts ) => {
                console.log( posts );
                let html = "";
                posts.forEach( post => {
                    html += PostCard( post );
                });
    
                d.querySelector(".loader").style.display = "none" ;
                $posts.innerHTML = html;
            }
        })
    }else if( !hash || hash.includes("#/search") ) {
        $posts.innerHTML = "Sección del buscador";
    }else {
        $posts.innerHTML = "Sección del buscador";
    }


    console.log( hash );

}