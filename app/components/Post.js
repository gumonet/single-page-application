export function Post( props ) {
    let { title, content, date} = props;
    let dateFormat = new Date( date ).toLocaleString();

    return `<section>
    <aside> <h2>${title.rendered}</h2></aside>
    <time datetime="${date}">${dateFormat}</time>
    <hr>
    <article>${content.rendered}</article>
    </section>`;
}