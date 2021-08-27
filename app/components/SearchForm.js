export function SearchForm() {
    const $form = document.createElement("form");
    const $input = document.createElement("input");
    
    $input.type = 'search';
    $input.name = 'search';
    $input.placeholder = 'Buscar...';
    
    $form.classList.add( 'form-search');

    $form.appendChild( $input );

    if( location.hash.includes('#/search')) {
        $input.value = localStorage.getItem("wpSearch");
    }

    document.addEventListener ( "submit", (e) => {
        if( !e.target.matches(".form-search") ) return false;

        if( !e.target.search.value ){
            return false;
        }

        e.preventDefault();
        localStorage.setItem("wpSearch", e.target.search.value);
        location.hash = `#/search?search=${e.target.search.value}`;
    })

    return $form;
}