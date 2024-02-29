import React, { useEffect, useState } from 'react';
import axiosJsonPlaceholder from 'libraries/axiosClient';
import { Link, useParams } from 'react-router-dom';
import { LOCATION } from 'constants/index';
import { useDispatch, useSelector } from 'react-redux';
import { getPostAction } from 'store/post/action';
import Loading from 'components/Loading';

function PostDetail(props) {
  const dispatch = useDispatch();
  const params = useParams();

  const post = useSelector((state) => state.postReducer.post);
  const isLoadingPost = useSelector((state) => state.postReducer.isLoadingPost);
  const author = useSelector((state) => state.userReducer.user);
  const isLoadingUser = useSelector((state) => state.userReducer.isLoadingUser);

  useEffect(() => {
    dispatch(getPostAction({ postId: params.postId }))
  }, []);

  return (
    <div className='text-black postDetail'>
      {
        isLoadingPost ? <Loading /> : (
          <>
            <h1 className='m-3 text-black'>
              Component post detail
            </h1>
            <h3 className='m-3'>{post.title}</h3>
            <p className='m-3'>{post.body}</p>
            <p>Tác giả: nhấn vào tên tác giả sẽ tới trang hiển thị chi tiết thông tin tác giả </p>
            {
              isLoadingUser ? <Loading /> : (
                <>
                  <p>email: {author.email}</p>
                  <p>Tác giả: {author.name}</p>
                  <p>Liên hệ: {author.phone}</p>
                  <p>
                    <span className='me-2'>Tài khoản:</span>
                    <Link to={`${LOCATION.USERS}/${author.id}`} >{author.username}</Link>
                    {/* <Link to={`${LOCATION.USERS}/${post.userId}`} >{author.username}</Link> */}
                  </p>
                </>
              )
            }
          </>
        )
      }
    </div>

  );
}

export default PostDetail;