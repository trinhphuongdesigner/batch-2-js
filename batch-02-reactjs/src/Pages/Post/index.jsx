import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { LOCATION } from 'constants/index';
import { useSelector, useDispatch } from 'react-redux';
import { getPostAction } from 'store/post/action';

function Post(props) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer.posts);

  useEffect(() => {
    // getPosts();
    dispatch(getPostAction())
  }, []);

  return (
    <>
      <h1 className='m-3 text-black'>Post list</h1>
      <ol>
        {posts.length > 0 ? posts.map((p) => <li key={p.id}><Link to={`${LOCATION.POSTS}/${p.id}`}>{p.title}</Link></li>): "Không có bài viết"}
      </ol>
    </>
  );
}

export default Post;
