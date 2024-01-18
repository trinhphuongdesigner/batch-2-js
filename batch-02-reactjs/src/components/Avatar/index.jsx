import React, { useEffect } from 'react';
import './style.scss';

function Avt({ src, name, maxInitial = 999 }) {
  const nameTitle = () => {
    const nameArr = name.split(' ');
    const newArr = nameArr.map((text) => text.slice(0, 1))
    return newArr;
  };

  useEffect(() => {
    nameTitle()
  }, []);
  return (
    <div className='cAvatar'>
      {
        src ? <img width={100} height={100} src={src} alt="" /> : <div>
          {
            nameTitle().join('').slice(0, maxInitial)
          }
          </div>
      }
    </div>
  );
}

export default Avt;