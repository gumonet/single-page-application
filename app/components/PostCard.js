export function PostCard ( props ) {
    let { title, date, slug, _embedded } = props;
    let dateFormat = new Date( date ).toLocaleString();
    let urlPoster = _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"][0].source_url : 'https://placeimg.com/200/200/animals';
    return `
<article class="post-card">
    <img src="${urlPoster}" alt="">
    <h2>${title.rendered}</h2>
    <p>
        <time datetime="${date}">${dateFormat}</time>
        <a href="#/${slug}">Ver publicación</a>
    </p>
</article>
`;
}