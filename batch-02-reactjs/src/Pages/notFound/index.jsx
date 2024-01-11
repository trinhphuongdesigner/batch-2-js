import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from 'components/buttonGroup/button';
import { LOCATION } from 'constants/index';

function NotFound(props) {
  const navigate = useNavigate();
  const onGoBackHome = () => {
    // Về trang hình ảnh
    navigate(LOCATION.IMAGES)
  };

  return (
    <div>
      Component not found
      {/* <a href="/"></a> */}
      {/* <Link to={'/'}><button>Trở về trang chủ</button></Link> */}
      <button onClick={onGoBackHome}>Trở về trang chủ</button>
    </div>
  );
}

export default NotFound;