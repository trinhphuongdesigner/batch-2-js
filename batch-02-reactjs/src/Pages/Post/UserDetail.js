import React, { useEffect, useState } from 'react';
import axiosJsonPlaceholder from 'libraries/axiosClient';
import { Link, useParams } from 'react-router-dom';

function UserDetail(props) {
  const params = useParams();

  const [author, setAuthor] = useState({});

  const getAuthor = async() => {
    try {
      const response = await axiosJsonPlaceholder.get(
        `/users/${params.id}`,
      );
      setAuthor(response.data);
    } catch (error) {
      console.log('««««« error »»»»»', error);
    }
  };

  console.log('««««« author »»»»»', author);

  useEffect(() => {
    getAuthor();
  }, []);


  return (
    <div className='text-black'>
      <h1 className='m-3 text-black'>
        Component user detail
      </h1>

      <p>email: {author.email || ''}</p>
      <p>Tác giả: {author.name || ''}</p>
      <p>Liên hệ: {author.phone || ''}</p>
      <p>Tài khoản: {author.username || ''}</p>
      <p>Nơi làm việc: {author.company && author.company.name}</p>
      <p>Địa chỉ: {author.address && author.address.street} - {author.address && author.address.city}</p>
    </div>

  );
}

export default UserDetail;