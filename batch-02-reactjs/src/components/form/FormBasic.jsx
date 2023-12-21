import React, { useState } from 'react';

import './style.css';
import { fireEvent } from '@testing-library/react';

function FormBasic(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(18);

  const onChangeFirst = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeLast = (e) => {
    setLastName(e.target.value);
  };

  const onChangeAge = (e) => {
    setAge(e.target.value);
  };

  const onSubmitData = (e) => {
    e.preventDefault();
    if (age < 18) {
      alert(`Sorry, you must be at least 18 years old.`);
    } else {
      console.log('««««« Form được gửi thành công với các thông tin sau: »»»»»');
      console.log('««««« firstName: »»»»»', firstName);
      console.log('««««« lastName: »»»»»', lastName);
      console.log('««««« age: »»»»»', age);
    }
  }

  return (
    <form className='container' onSubmit={onSubmitData}>
      <div>
        <label htmlFor="first-name">Họ</label>
        <input id="first-name" type="text" value={firstName} onChange={onChangeFirst} />
      </div>

      <div>
        <label htmlFor="last-name">Tên</label>
        <input id="last-name" type="text" value={lastName} onChange={onChangeLast}/>
      </div>

      <div>
        <label htmlFor="age">Tuổi</label>
        <input id="age" type="number" min={1} value={age} onChange={onChangeAge}/>
      </div>

      {/* <button onClick={onSubmitData}>Khai báo</button> */}
      <input type="submit" value="Khai báo"></input>
    </form>
  );
}

export default FormBasic;

// Tạo 1 component trong đó có các ô input để nhập các field dữ liệu sau
// Họ
// Tên
// Tuổi
// Giới tính: Nam/Nữ
// Ngày tháng năm sinh
// Sở thích [Ăn, Ngủ, Đọc sách, Nghe nhạc]