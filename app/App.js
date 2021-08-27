
import { Header } from "./components/Header.js";
import { Posts } from "./components/Posts.js";
import { Loader } from "./components/Loader.js";
import { Router } from "./components/Router.js";

export function App () {
    const d = document,
    $root = d.getElementById("root");
    $root.innerHTML =  null;
    $root.appendChild(Header());

    $root.appendChild( Posts() );
    $root.appendChild( Loader() );

    Router();

    /*ajax({
        url: wp_api.POSTS,
        cbSucces: ( posts ) => {
            console.log( posts );
            let html = "";
            posts.forEach( post => {
                html += PostCard( post );
            });

            d.querySelector(".loader").style.display = "none" ;
            d.getElementById( "posts" ).innerHTML = html;
        }
    })*/
    

}