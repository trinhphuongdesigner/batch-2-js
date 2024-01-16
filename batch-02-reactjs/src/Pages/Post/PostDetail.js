import React, { useEffect, useState } from 'react';
import axiosJsonPlaceholder from 'libraries/axiosClient';
import { Link, useParams } from 'react-router-dom';
import { LOCATION } from 'constants/index';

function PostDetail(props) {
  const params = useParams();

  const [post, setPost] = useState({});
  const [author, setAuthor] = useState({});

  const getPostDetail = async() => {
    try {
      const response = await axiosJsonPlaceholder.get(
        // '/posts/18'
        `/posts/${params.postId}`,
      );
      setPost(response.data);
    } catch (error) {
      console.log('««««« error »»»»»', error);
    }
  };

  const getAuthor = async() => {
    try {
      const response = await axiosJsonPlaceholder.get(
        `/users/${post.userId}`,
      );
      setAuthor(response.data);
    } catch (error) {
      console.log('««««« error »»»»»', error);
    }
  };

  useEffect(() => {
  getPostDetail();
  }, []);

  useEffect(() => {
    if (post.userId) {
      getAuthor();
    }
  }, [post.userId]);

  return (
    <div className='text-black postDetail'>
      <h1 className='m-3 text-black'>
        Component post detail
      </h1>
      <h3 className='m-3'>{post.title}</h3>
      <p className='m-3'>{post.body}</p>
      <p>Tác giả: nhấn vào tên tác giả sẽ tới trang hiển thị chi tiết thông tin tác giả </p>
      <p>email: {author.email}</p>
      <p>Tác giả: {author.name}</p>
      <p>Liên hệ: {author.phone}</p>
      <p>
        <span className='me-2'>Tài khoản:</span>
        {
          console.log('««««« author.userId »»»»»', author)
        }
        <Link to={`${LOCATION.USERS}/${author.id}`} >{author.username}</Link>
        {/* <Link to={`${LOCATION.USERS}/${post.userId}`} >{author.username}</Link> */}
      </p>
    </div>

  );
}

export default PostDetail;