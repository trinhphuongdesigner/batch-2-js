import React, { useEffect, useState } from 'react';
import axiosJsonPlaceholder from 'libraries/axiosClient';
import { Link, useParams } from 'react-router-dom';
import Avatar, { ConfigProvider } from 'react-avatar';
import Avt from 'components/Avatar';
import AvatarInfo from 'components/Avatar/AvatarInfo';
import AvatarInfo2 from 'components/Avatar/AvatarInfo2';

function UserDetail(props) {
  const params = useParams();

  const [author, setAuthor] = useState({});

  const getAuthor = async () => {
    try {
      const response = await axiosJsonPlaceholder.get(
        `/users/${params.userId}`,
      );
      setAuthor(response.data);
    } catch (error) {
      console.log('««««« error »»»»»', error);
    }
  };

  useEffect(() => {
    getAuthor();
  }, []);


  return (
    <div className='text-black'>
      <h1 className='m-3 text-black'>
        Component user detail
      </h1>

      <Avatar round={true} src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-1/416299889_2448485458685524_5627134030772475173_n.jpg?stp=cp6_dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=5740b7&_nc_ohc=Rh6nYsJiU94AX_FZTde&_nc_ht=scontent.fdad1-1.fna&oh=00_AfDVEDIyCQG1oTjDcUYljAM0mdBfzEgdsAbUqsIofdlZiA&oe=65ADC5D2" name={author.name || ''} />

      <Avt
        maxInitial={3}
        name={author.name || ''}
        email={author.email || ''}
        phone={author.phone || ''}
        isPhoneFirst={false}
      />

      <AvatarInfo
        maxInitial={3}
        name={author.name || ''}
      >
        <small>{author.phone || ''}</small>
        <h5>{author.name || ''}</h5>
        <h6>{author.email || ''}</h6>
      </AvatarInfo>

      <AvatarInfo2
        maxInitial={3}
        name={author.name || ''}
        renderHTML={<>
          <h6>{author.email || ''}</h6>
          <small>{author.phone || ''}</small>
          <h5>{author.name || ''}</h5>
        </>}
      >

      </AvatarInfo2>

      <p>email: {author.email || ''}</p>
      <p>Tác giả: {author.name || ''}</p>
      <p>Liên hệ: {author.phone || ''}</p>
      <p>Tài khoản: {author.username || ''}</p>
      <p className='comments'>Nơi làm việc: {author.company && author.company.name}</p>
      <p>Địa chỉ: {author.address && author.address.street} - {author.address && author.address.city}</p>
    </div>

  );
}

export default UserDetail;