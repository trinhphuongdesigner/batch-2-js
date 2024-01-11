import React, { useEffect, useState } from 'react';
import axiosJsonPlaceholder from 'libraries/axiosClient';
import { useParams } from 'react-router-dom';

function PostDetail(props) {
  const params = useParams();

  const [post, setPost] = useState({});

  const getPostDetail = async() => {
    try {
      const response = await axiosJsonPlaceholder.get(
        // '/posts/18'
        `/posts/${params.id}`,
      );
      setPost(response.data);
    } catch (error) {
      console.log('««««« error »»»»»', error);
    }
  };

  useEffect(() => {
  getPostDetail();
  }, []);

  console.log('««««« post »»»»»', post);
  return (
    <div className='text-black'>
      <h1 className='m-3'>
        Component post detail
      </h1>
      <h3 className='m-3'>{post.title}</h3>
      <p className='m-3'>{post.body}</p>
      <p>Tác giả: nhấn vào tên tác giả sẽ tới trang hiển thị chi tiết thông tin tác giả </p>
      <p>email: </p>
    </div>

  );
}

export default PostDetail;