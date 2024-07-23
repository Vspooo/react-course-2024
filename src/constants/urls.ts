const baseURL = "https://jsonplaceholder.typicode.com"
const users = "/users"
const posts = "/posts"
const postsOfUserById = "/posts?userId="
const comments = "/comments"
const commentsOfPostById = "/comments?postId="
const postOfCommentById = "/posts?id="
const urls = {
    baseURL,
    users,
    posts,
    comments,
    postsOfUserById,
    commentsOfPostById,
    postOfCommentById
}
export {
    urls
}