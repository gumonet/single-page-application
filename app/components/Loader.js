

export function Loader(){

    const $loader = document.createElement('img');
    $loader.src = "app/assets/images/loader.svg";
    $loader.alt = 'Loading data';
    $loader.classList.add("loader");

    return $loader;

}