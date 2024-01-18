import React from 'react';

import MultipleOpen from './multipleOpen';
import OpenAtATime from './openAtATime';
import LoginButton from 'components/Buttons/LoginButton';
import Button from 'components/Button';

function ButtonAccordions(props) {
  return (
    <div className="d-flex">
      <OpenAtATime />

      <MultipleOpen />

      <Button title="Continue with Apple">
        <>
          <h2 className='text-white'>Hello</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="23"
            viewBox="0 0 20 23"
            fill="none"
          >
            <path
              d="M16.721 11.912C16.7096 10.1087 17.5937 8.74962 19.3791 7.7475C18.3805 6.42543 16.8698 5.6983 14.8784 5.55816C12.9928 5.42066 10.9299 6.5735 10.1745 6.5735C9.37625 6.5735 7.55079 5.60575 6.11445 5.60575C3.15021 5.64806 0 7.7898 0 12.1473C0 13.435 0.254649 14.765 0.763948 16.1347C1.44492 17.938 3.89986 22.3563 6.46066 22.2849C7.79971 22.2558 8.74678 21.4071 10.4893 21.4071C12.1803 21.4071 13.0558 22.2849 14.5494 22.2849C17.133 22.2505 19.3534 18.2341 20 16.4255C16.535 14.9157 16.721 12.0045 16.721 11.912ZM13.7139 3.84741C15.1645 2.25564 15.0329 0.80666 14.99 0.285767C13.7082 0.354514 12.226 1.09223 11.382 1.99916C10.4521 2.9722 9.90558 4.17528 10.0229 5.53172C11.4077 5.62955 12.6724 4.97116 13.7139 3.84741Z"
              fill="white"
            />
          </svg>
        </>
      </Button>
    </div>
  );
}

export default ButtonAccordions;
