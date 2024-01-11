import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

import axiosJsonPlaceholder from 'libraries/axiosClient';
import { LOCATION } from 'constants/index';

// const BASE_URL = 'https://jsonplaceholder.typicode.com';

function Post(props) {
  const [posts, setPosts] = useState([]);
  // const [users, setUsers] = useState([]);

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

  // const getUsers = async () => {
  //   try {
  //     const response = await axiosJsonPlaceholder.get(
  //       '/users',
  //     );
  //     setUsers(response.data);
  //   } catch (error) {
  //     console.log('««««« error »»»»»', error);
  //   }
  // };

  useEffect(() => {
    // fetchPosts();
    getPosts();
    // getUsers();
  }, []);

  return (
    <>
      <h1 className='m-3 text-black'>Post list</h1>
      <ol>
        {posts.length > 0 && posts.map((p) => <li key={p.id}><Link to={`${LOCATION.POSTS}/${p.id}`}>{p.title}</Link></li>)}
      </ol>
      {/* <ol>
        {users.length > 0 && users.map((u) => <li key={u.id}>{u.email}</li>)}
      </ol> */}
    </>
  );
}

export default Post;
