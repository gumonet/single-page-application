export function PostCard ( props ) {
    let { title, date, id, slug, _embedded, excerpt } = props;
    let dateFormat = new Date( date ).toLocaleString();
    let urlPoster = _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"][0].source_url : 'https://placeimg.com/200/200/animals';
    
    
    document.addEventListener("click", e => {
        if ( ! e.target.matches(".post-card a") ) return false;

        console.log( e.target.dataset.id );
        localStorage.setItem("wpPostID",e.target.dataset.id);

    });
    
    
    return `
<article class="post-card">
    <img src="${urlPoster}" alt="">
    <h2>${title.rendered}</h2>
    <p>
        <time datetime="${date}">${dateFormat}</time>
    </p>
    <p class="resume">
      ${excerpt.rendered}
    </p>
    <p>
    
    <a href="#/${slug}" data-id="${id}" >Ver publicación</a>
    </p>
</article>
`;
}