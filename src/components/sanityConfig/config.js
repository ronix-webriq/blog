import sanityClient from '../../client.js';

export const fetchPosts = (getPost) => {
    sanityClient.fetch(
        `*[_type == "post"] {
            title,
            slug,
            publishedAt,
            mainImage {
                asset-> {
                    _id,
                    url
                }
            },
            "name": author -> name,
            "authorImage": author -> image
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
export const fetchProjects = (getProjects) => {
    sanityClient.fetch(
        `*[_type == "projects"] {
            project_name,
            slug,
            description,
            categories,
            github_url,
            project_url,
            date_created
        }`
    )
    .then(data => getProjects(data))
    .catch(err => console.log(err))
}

export const fetchQuiz = (getQuiz) => {
    sanityClient.fetch(
        `*[_type == "math_quiz"] {
            question_number,
            question,
            answer,
            choice_a,
            choice_b,
            choice_c,
            choice_d,
        }`
    )
    .then(data => getQuiz(data))
    .catch(err => console.log(err))
}