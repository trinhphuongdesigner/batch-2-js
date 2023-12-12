import React, { useState } from 'react';

import KnowLedge from './components/knowLedge.jsx';
import Block from './components/block';
import LoginButton from './components/Buttons/LoginButton.jsx';

import './App.css';
import './style.css';

function App() {
  const [count, setCount] = useState(5);

  const onChangeCount = () => {
    setCount(count + 1)
  }
  console.log('««««« count »»»»»', count);

  // const showMessage = (mes) => {
  //   alert('Kết quả là: ' + mes);
  // }
  // const showLog = (mes) => {
  //   console.log('««««« Kết quả là: »»»»»', mes);
  // }

  // const device = (num, x, callback) => {
  //   const result = num / x;
  //   callback(result)
  // }

  // const sum = (deviceNumber, callbackDevice, callbackShowMessage, ...arr) => {
  //   // let tt = 0;
  //   // arr.forEach((num) => tt += num);
  //   // console.log('««««« tt »»»»»', tt);

  //   // let tich = 1;
  //   // arr.forEach((num) => tich *= num);
  //   // console.log('««««« tich »»»»»', tich);
    
  //   // const tich2 = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  //   // console.log('««««« tich2 »»»»»', tich2);


  //   const total = arr.reduce((nextValue, currentValue) => nextValue + currentValue, 0);
  //   callbackDevice(total, deviceNumber, callbackShowMessage);
  // }

  // sum(5, device, showMessage, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5);
  // sum(5, device, showLog, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5);
  // // viết hàm tính tổng của n số sau đó sử dụng callback func lấy kết quả tính được chia cho x và hiển thị alert ra màn hình.

  const data = [
    {
      number: 1,
      description: 'Anh Phuowng...',
      isInside: true,
      style: {
        color: 'black',
        backgroundColor: 'blue',
        borderRadius: 25
      }
    },
    {
      number: 5,
      description: 'Anh Phuowng.yyy',
      isInside: false,
      bgColor: "black",
      style: {
        color: 'black',
        backgroundColor: 'black',
        borderRadius: 8
      }
    },
    {
      number: 4,
      description: 'Anh Phuowng.yyy',
      isInside: false,
      style: {
        color: '#fff',
        backgroundColor: 'red',
        borderRadius: 4
      }
    },
    {
      number: 1,
      description: 'Anh Phuowng.yyy',
      isInside: false,
    },
    {
      number: 2,
      description: 'Anh Phuowng.yyy',
      isInside: false,
    },
    {
      number: 8,
      description: 'Anh Phuowng.yyy',
      isInside: false,
    },
    {
      number: 9,
      description: 'Anh Phuowng.yyy',
      isInside: false,
    },
    {
      number: 6,
      description: 'Anh Phuowng.yyy',
      isInside: false,
    },
  ];

  const btnList = [
    {
      title: 'Continue with Apple',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 20 23" fill="none">
        <path d="M16.721 11.912C16.7096 10.1087 17.5937 8.74962 19.3791 7.7475C18.3805 6.42543 16.8698 5.6983 14.8784 5.55816C12.9928 5.42066 10.9299 6.5735 10.1745 6.5735C9.37625 6.5735 7.55079 5.60575 6.11445 5.60575C3.15021 5.64806 0 7.7898 0 12.1473C0 13.435 0.254649 14.765 0.763948 16.1347C1.44492 17.938 3.89986 22.3563 6.46066 22.2849C7.79971 22.2558 8.74678 21.4071 10.4893 21.4071C12.1803 21.4071 13.0558 22.2849 14.5494 22.2849C17.133 22.2505 19.3534 18.2341 20 16.4255C16.535 14.9157 16.721 12.0045 16.721 11.912ZM13.7139 3.84741C15.1645 2.25564 15.0329 0.80666 14.99 0.285767C13.7082 0.354514 12.226 1.09223 11.382 1.99916C10.4521 2.9722 9.90558 4.17528 10.0229 5.53172C11.4077 5.62955 12.6724 4.97116 13.7139 3.84741Z" fill="white" />
      </svg>,
      isLightMode: false,
    },
    {
      title: 'BTN mafu den',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 20 23" fill="none">
        <path d="M16.721 11.912C16.7096 10.1087 17.5937 8.74962 19.3791 7.7475C18.3805 6.42543 16.8698 5.6983 14.8784 5.55816C12.9928 5.42066 10.9299 6.5735 10.1745 6.5735C9.37625 6.5735 7.55079 5.60575 6.11445 5.60575C3.15021 5.64806 0 7.7898 0 12.1473C0 13.435 0.254649 14.765 0.763948 16.1347C1.44492 17.938 3.89986 22.3563 6.46066 22.2849C7.79971 22.2558 8.74678 21.4071 10.4893 21.4071C12.1803 21.4071 13.0558 22.2849 14.5494 22.2849C17.133 22.2505 19.3534 18.2341 20 16.4255C16.535 14.9157 16.721 12.0045 16.721 11.912ZM13.7139 3.84741C15.1645 2.25564 15.0329 0.80666 14.99 0.285767C13.7082 0.354514 12.226 1.09223 11.382 1.99916C10.4521 2.9722 9.90558 4.17528 10.0229 5.53172C11.4077 5.62955 12.6724 4.97116 13.7139 3.84741Z" fill="white" />
      </svg>,
      isLightMode: false,
    },
    {
      title: 'Continue with Google',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
        <path d="M20.7932 8.81675C20.9271 9.51967 21 10.2546 21 11.0215C21 17.0203 16.903 21.2858 10.715 21.2858C9.30774 21.2862 7.91422 21.0149 6.61402 20.4874C5.31383 19.9598 4.13245 19.1864 3.13739 18.2113C2.14232 17.2362 1.35308 16.0785 0.814755 14.8044C0.27643 13.5303 -0.000428558 12.1648 4.97926e-07 10.7858C-0.000428558 9.40677 0.27643 8.0412 0.814755 6.76709C1.35308 5.49298 2.14232 4.33531 3.13739 3.36021C4.13245 2.38511 5.31383 1.6117 6.61402 1.08418C7.91422 0.55665 9.30774 0.285347 10.715 0.285767C13.6081 0.285767 16.0257 1.32894 17.8804 3.02276L14.8599 5.98269V5.97522C13.7355 4.92565 12.3085 4.387 10.715 4.387C7.1796 4.387 4.30602 7.31386 4.30602 10.7794C4.30602 14.2438 7.1796 17.1771 10.715 17.1771C13.9227 17.1771 16.1062 15.3798 16.5547 12.9116H10.715V8.81675H20.7943H20.7932Z" fill="black" />
      </svg>,
      isLightMode: true,
    },
    {
      title: 'Continue with Facebook',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
        <path d="M21 10.8501C21 5.01543 16.2992 0.285767 10.5013 0.285767C4.70079 0.287079 0 5.01543 0 10.8514C0 16.123 3.83989 20.4931 8.85827 21.2858V13.9039H6.19422V10.8514H8.86089V8.52199C8.86089 5.87501 10.4291 4.41306 12.8268 4.41306C13.9764 4.41306 15.1772 4.6191 15.1772 4.6191V7.21753H13.853C12.5499 7.21753 12.143 8.03249 12.143 8.86844V10.8501H15.0538L14.5892 13.9026H12.1417V21.2845C17.1601 20.4918 21 16.1217 21 10.8501Z" fill="black" />
      </svg>,
      isLightMode: true,
    },
  ]

  const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'ReactJS',
    'ABC',
    'XYZ',
  ]

  return (
    <>
      <div className="App">
        <h1>Đếm: {count}</h1>
        {/* <button onClick={onChangeCount}>Giảm</button> */}
        <button onClick={onChangeCount}>Tăng</button>
      {/* {
        btnList.map((btn) => <LoginButton title={btn.title} icon={btn.icon} isLightMode={btn.isLightMode} />)
      } */}
        {/* {
          data.map((item, index) => {
            return (
              <Block key={index} no={index + 1} number={item.number} description={item.description} isInside={item.isInside} style={item.style} />
            )
          })
        } */}

        {/* <h1>Knowledge</h1>
        {
          skills.map((skill) => <KnowLedge skill={skill} key={skill} />)
        } */}
      </div>
    </>
  );
}

export default App;
