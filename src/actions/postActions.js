import {FETCH_POSTS, NEW_POST} from "./types";

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
    .then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    }))
};

export const createPost = (post) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(res => res.json())
    .then(post => dispatch({
      type: NEW_POST,
      payload: post
    }))
};
