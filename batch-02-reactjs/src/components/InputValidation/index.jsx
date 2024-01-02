import React from 'react';

function InputValidation(props) {
  const {
    type = 'text',
    name,
    placeholder = 'Vui lòng nhập...',
    autoComplete = 'off',
    register,
    errors,
    // onChange,
  } = props;

  return (
    <div className="input-field">
      <input
        type={type}
        name={name}
        id={name}
        // onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register(name)}
        aria-invalid={errors[name] ? 'true' : 'false'}
      />
      {errors[name] && (
        <small className="text-danger">{errors[name].message}</small>
      )}
    </div>
  );
}

export default InputValidation;
