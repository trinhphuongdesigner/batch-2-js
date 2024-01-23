import React, { Children, useEffect } from 'react';
import './style.scss';

function AvatarInfo({
  src,
  name,
  maxInitial = 999,
  children,
}) {
  const nameTitle = () => {
    const nameArr = name.split(' ');
    const newArr = nameArr.map((text) => text.slice(0, 1));
    return newArr;
  };

  useEffect(() => {
    nameTitle();
  }, []);

  return (
    <div className="cAvatar">
      <div className="avt">
        {src ? (
          <img width={100} height={100} src={src} alt="" />
        ) : (
          <div>{nameTitle().join('').slice(0, maxInitial)}</div>
        )}
      </div>

      <div className="info">
        {children}
      </div>
    </div>
  );
}

export default AvatarInfo;