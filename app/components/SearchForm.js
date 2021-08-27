export function SearchForm() {
    const $form = document.createElement("form");
    const $input = document.createElement("input");
    
    $input.type = 'search';
    $input.placeholder = 'Buscar...';

    $form.appendChild( $input );

    $form.classList.add( 'form-search');

    return $form;
}