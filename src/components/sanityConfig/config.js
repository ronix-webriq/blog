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

export const addQuiz = (doc) => {
    sanityClient.create(doc)
    .then((res) => {
        console.log(res)
    })
}
export const fetchGames = (fetcher) => {
    sanityClient.fetch(
        `*[_type == "games"] {
            _id,
            game_name,
            image_url,
            score,
            game_played_times,
            question_and_answers
        }`
    ).then(data => fetcher(data))
    .catch(err => console.log(err))
}




// Todo List Functionalities
export const addTodo = (doc) => {
    sanityClient.create(doc)
    .then(res => {
        console.log(res)
    })
    .catch(err => console.log(err))
}

export const fetch_Task_NotStarted = (fetcher) => {
    sanityClient.fetch(
        `*[_type == "task_manager"] {
            _id,
           todo[
               not_started == true
           ]
        }`
    ).then(data => fetcher(data))
    .catch(err => console.log(err))
}

export const fetch_In_Progress = (fetcher) => {
    sanityClient.fetch(
        `*[_type == "task_manager"] {
            _id,
           todo[
               in_progress == true
           ]
        }`
    ).then(data => fetcher(data))
    .catch(err => console.log(err))
}

export const fetch_For_Review = (fetcher) => {
    sanityClient.fetch(
        `*[_type == "task_manager"] {
            _id,
           todo[
               for_review == true
           ]
        }`
    ).then(data => fetcher(data))
    .catch(err => console.log(err))
}

export const fetch_Completed = (fetcher) => {
    sanityClient.fetch(
        `*[_type == "task_manager"] {
            _id,
           todo[
               completed == true
           ]
        }`
    ).then(data => fetcher(data))
    .catch(err => console.log(err))
}
