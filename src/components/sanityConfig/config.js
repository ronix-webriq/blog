import sanityClient from '../../client.js';

export const fetchPosts = (getPost) => {
    sanityClient.fetch(
        `*[_type == "post"] {
            title,
            slug,
            mainImage {
                asset-> {
                    _id,
                    url
                }
            }
        }`
    )
    .then(data => getPost(data))
    .catch(err => console.log(err))
}

export const fetchSinglePost = (getSinglePost, slug) => {
    sanityClient.fetch(
        `*[slug.current == $slug] {
            title,
            slug,
            mainImage {
                asset -> {
                    _id,
                    url
                }
            },
            body,
            "name": author -> name,
            "authorImage": author -> image
        }`, { slug }
    )
    .then(data => getSinglePost(data[0]))
    .catch(err => console.log(err))
}