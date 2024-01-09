import React, { useEffect, useState } from 'react';
// import axios from 'axios';

import axiosJsonPlaceholder from '../../libraries/axiosClient';

// const BASE_URL = 'https://jsonplaceholder.typicode.com';

function Post(props) {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  // const fetchPosts = () => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => response.json())
  //   .then(json => {
  //     setPosts(json);
  //   })
  // }

  const getPosts = async () => {
    try {
      const response = await axiosJsonPlaceholder.get(
        '/posts',
      );
      setPosts(response.data);
    } catch (error) {
      console.log('««««« error »»»»»', error);
    }

    // axios
    //   .get('https://jsonplaceholder.typicode.com/posts')
    //   .then(function (response) {
    //     setPosts(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .finally(function () {
    //   });
  };

  const getUsers = async () => {
    try {
      const response = await axiosJsonPlaceholder.get(
        '/users',
      );
      setUsers(response.data);
    } catch (error) {
      console.log('««««« error »»»»»', error);
    }
  };

  useEffect(() => {
    // fetchPosts();
    getPosts();
    getUsers();
  }, []);

  return (
    <>
      <ol>
        {posts.length > 0 && posts.map((p) => <li key={p.id}>{p.title}</li>)}
      </ol>
      <ol>
        {users.length > 0 && users.map((u) => <li key={u.id}>{u.email}</li>)}
      </ol>
    </>
  );
}

export default Post;
