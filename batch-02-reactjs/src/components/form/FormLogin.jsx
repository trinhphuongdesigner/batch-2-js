import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import yup from '../../helper/yupGlobal';

import './FormLogin.css';


const loginSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('Vui lòng nhập họ')
    .min(2, (context) => {
      return `Nhập ${context.value} là bậy yo, nhập lại đê`;
    })
    .max(10, (context) => {
      return `Nhập ${context.value} là bậy yo, tên dell gì dài thế`;
    }),

  lastName: yup
    .string()
    .required('Vui lòng nhập tên')
    .min(2, (context) => {
      return `Nhập ${context.value} là bậy yo, nhập lại đê`;
    })
    .max(10, (context) => {
      return `Nhập ${context.value} là bậy yo, tên dell gì dài thế`;
    }),

  age: yup
    .number()
    .required('Không bỏ trống tuổi')
    .min(18, (content) => {
      return `Tuổi ${content.value} chưa đủ để sử dụng dịch vụ. phải 18+ mới được`
    }),

    phoneNumber: yup
    .string()
    .required('Required')
    .phoneNumber('Số điện thoại không hợp lệ'),

    pass: yup
    .string()
    .required('Required')
    .password('Password sai định dạng'),
});

function FormLogin(props) {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(loginSchema)
});

  console.log('««««« errors »»»»»', errors);

  const onSubmit = (data) => {
    // Bạn có thể gọi API để cập nhật dữ liệu ở ngay đây
    console.log(data);
};

  return (
    <form className="box" onSubmit={handleSubmit(onSubmit)}>
      <h1>login</h1>
      <div className="input-field">
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Họ"
          autoComplete="off"
          {...register('firstName')}
          // {...register('firstName', { required: true, maxLength: 10, minLength: 2 })}
          aria-invalid={errors.firstName ? "true" : "false"} 
        />
        {
          errors.firstName && <small className='text-danger'>{errors.firstName.message}</small>
        }
      </div>

      <div className="input-field">
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Tên"
          autoComplete="off"
          {...register('lastName')}
          aria-invalid={errors.lastName ? "true" : "false"} 
        />
      </div>

      <div className="input-field">
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Tuổi"
          autoComplete="off"
          {...register('age')}
          aria-invalid={errors.age ? "true" : "false"} 
        />
      </div>

      <div className="input-field">
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Số điện thoại"
          autoComplete="off"
          {...register('phoneNumber')}
        />
      </div>

      <div className="input-field">
        <input
          type="password"
          name="pass"
          id="pass"
          placeholder="Password"
          autoComplete="off"
          {...register('pass')}
        />
      </div>
      <button type="submit" id="submit">
        LOGIN
      </button>
    </form>
  );
}

export default FormLogin;
