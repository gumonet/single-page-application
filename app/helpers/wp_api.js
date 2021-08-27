const NAME   = 'malvestida';
const DOMAIN = `https://${NAME}.com`;
const SITE = `${DOMAIN}/wp-json`;
const API_WP = `${SITE}/wp/v2`;
const PER_PAGE = 6;
const POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`;
const POST = `${API_WP}/posts`;
const SEARCH = `${API_WP}/search?_embed&search=`;

let page = 1;

export default{
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    POSTS,
    POST,
    SEARCH,
    PER_PAGE,
    page
}