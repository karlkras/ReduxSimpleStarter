export const FETCH_POSTS = 'fetchposts';
export const CREATE_POST = 'createpost';
export const FETCH_POST = 'getpost';
export const DELETE_POST = 'deletepost';
import axios from 'axios';
const BLOG_POST_KEY = '?key=karlk123';
const ROOT_BLOG_URL = 'http://reduxblog.herokuapp.com/api';


export function addPost(values, callBack) {
    let addPostsUrl = `${ROOT_BLOG_URL}/posts${BLOG_POST_KEY}`;
    const request = axios.post(addPostsUrl, values)
        .then(() => callBack());

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost(id) {
    let getPostsUrl = `${ROOT_BLOG_URL}/posts/${id}${BLOG_POST_KEY}`;
    const request = axios.get(getPostsUrl);


    return {
        type: FETCH_POST,
        payload: request
    };

}

export function fetchPosts() {
    let fetchPostsUrl = `${ROOT_BLOG_URL}/posts${BLOG_POST_KEY}`;
    const request = axios.get(fetchPostsUrl);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function deletePost(id, callBack){
    let deletePostsUrl = `${ROOT_BLOG_URL}/posts/${id}${BLOG_POST_KEY}`;

    const request = axios.delete(deletePostsUrl)
        .then(() => callBack());

    return {
        type: DELETE_POST,
        payload: id
    };

}