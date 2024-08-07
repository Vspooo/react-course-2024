const baseURL = "http://jsonplaceholder.typicode.com"
const users = "/users"
const posts = "/posts"
const comments = "/comments"
const postByUserId = "/posts?userId="
const userByPostId = "/users/"
const commentsById = "/comments?postId="
const urls = {
    baseURL,
    users,
    posts,
    comments,
    userByPostId,
    postByUserId,
    commentsById
}
export {
    urls
}