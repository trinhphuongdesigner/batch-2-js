import React, { useState } from 'react';

import './style.css';

function FormBasic(props) {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    age: 1,
  });
  const [errors, setErrors] = useState({
    age: [],
    firstName: [],
    lastName: [],
  });

  // const onChangeUser = (fieldName, e) => { // style 1
  //   setUser((prevState) => ({
  //     ...prevState,
  //     [fieldName]: e.target.value,
  //   }));
  // }

  const onChangeUser = (e) => {
    // style 2
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitData = (e) => {
    e.preventDefault();
    let err = {
      age: [],
      firstName: [],
      lastName: [],
    };

    const { age, firstName, lastName } = user;

    if (!age) {
      err = {
        ...err,
        age: [...err.age, 'Vui lòng nhập tuổi của bạn'],
      };
    }

    if (age && age < 18) {
      err = {
        ...err,
        age: [...err.age, 'Bạn phải trên 18 tuổi'],
      };
    }

    if (!firstName) {
      err = {
        ...err,
        firstName: [...err.firstName, 'Vui lòng nhập họ'],
      };
    }

    if (firstName && firstName.length > 10) {
      err = {
        ...err,
        firstName: [...err.firstName, 'Họ không được vượt quá 10 ký tự'],
      };
    }

    if (!lastName) {
      err = {
        ...err,
        lastName: [...err.lastName, 'Vui lòng nhập tên'],
      };
    }

    if (lastName && lastName.length > 10) {
      err = {
        ...err,
        lastName: [...err.lastName, 'Tên không được vượt quá 10 ký tự'],
      };
    }

    if (
      err.age.length > 0 ||
      err.firstName.length > 0 ||
      err.lastName.length > 0
    ) {
      setErrors(err);
      return;
    }

    console.log(
      '««««« Form được gửi thành công với các thông tin sau: »»»»»',
      user,
    );
  };

  return (
    <form className="container" onSubmit={onSubmitData}>
      <div>
        <label htmlFor="firstName">Họ</label>
        <input
          id="firstName"
          type="text"
          value={user.firstName}
          name="firstName"
          // onChange={(e) => onChangeUser('firstName', e)} // style 1
          onChange={onChangeUser} // style 2
        />
        {errors.firstName.length > 0 && (
          <ol>
            {errors.firstName.map((item) => (
              <li>{item}</li>
            ))}
          </ol>
        )}
      </div>

      <div>
        <label htmlFor="lastName">Tên</label>
        <input
          id="lastName"
          type="text"
          value={user.lastName}
          name="lastName"
          // onChange={(e) => onChangeUser('lastName', e)}
          onChange={onChangeUser} // style 2
        />
      </div>

      <div>
        <label htmlFor="age">Tuổi</label>
        <input
          id="age"
          type="number"
          min={1}
          value={user.age}
          name="age"
          // onChange={(e) => onChangeUser('age', e)}
          onChange={onChangeUser} // style 2
        />
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
