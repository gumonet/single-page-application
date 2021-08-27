import wp_api from '../helpers/wp_api.js';
import {ajax} from '../helpers/ajax.js';
import { PostCard } from './PostCard.js';
import { Post } from './Post.js';

export async function Router() {
    const d = document;
    const w = window;
    let $main = d.getElementById("main");

    let { hash } = location;
    $main.innerHTML = null;

    if( !hash || hash === "#/" ) {
        await ajax({
            url: wp_api.POSTS,
            cbSucces: ( posts ) => {
                console.log( posts );
                let html = "";
                posts.forEach( post => {
                    html += PostCard( post );
                });
                $main.innerHTML = html;
            }
        })
    }else if( !hash || hash.includes("#/search") ) {
        let $query = localStorage.getItem('wpSearch');

        if ( !$query ) return false;

        await ajax({
            url: wp_api.SEARCH + $query ,
            cbSucces: ( posts ) => {
                console.log( posts );
                /*let html = "";
                posts.forEach( post => {
                    html += PostCard( post );
                });*/
                $main.innerHTML = '<h1>Hay que crear la vista de busqueda WEEEY! :D</h1>';
            }
        })


    }else {
       
       await ajax({
            url: wp_api.POST + '/' + localStorage.getItem('wpPostID'),
            cbSucces: ( post ) => {
                console.log( post );
               let  $post = Post( post );
            
                $main.innerHTML = $post;
            }
        })
        
    }

    d.querySelector(".loader").style.display = "none" ;
    console.log( hash );

}