import React from 'react';
import AuthHeader from './Header';

function AuthLayout({ children }) {
  return (
    <div>
      <AuthHeader />
      {children}
    </div>
  );
}

export default AuthLayout;