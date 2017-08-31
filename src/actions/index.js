export const FETCH_POSTS = 'fetchposts';
import axios from 'axios';
const BLOG_POST_KEY = '?key=karlk123';
const ROOT_BLOG_URL = 'http://reduxblog.herokuapp.com/api';


export function fetchPosts() {
    let fetchPostsUrl = `${ROOT_BLOG_URL}/posts${BLOG_POST_KEY}`;
    const request = axios.get(fetchPostsUrl);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}