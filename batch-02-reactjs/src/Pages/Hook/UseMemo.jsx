import React, { useMemo, useState } from 'react';

const UseMemo = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [count, setCount] = useState(0);

  const countEvenNumbers = useMemo(() => {
    console.log('Đang tính toán số lượng các số chẵn...');
    return numbers.filter(num => num % 2 === 0).length;
  }, [numbers]);

  // const countEvenNumbers = () => {
  //   console.log('Đang tính toán số lượng các số chẵn...');
  //   const a = numbers.filter(num => num % 2 === 0).length;
  //   return a;
  // }; 

  const onChangeCount = () => {
    console.log('Đang chạy...');
    setCount(prev => prev + 1);
  }

  return (
    <div>
      <p>Mảng: {numbers.join(', ')}</p>
      {/* <p>Số lượng số chẵn: {countEvenNumbers()}</p> */}
      <p>Số lượng số chẵn: {countEvenNumbers}</p>
      <button onClick={() => setNumbers([...numbers, Math.floor(Math.random() * 10) + 1])}>
        Thêm số ngẫu nhiên
      </button>

      <h1 className='text-black'>{count}</h1>
      <button onClick={onChangeCount}>Tăng count</button>
    </div>
  );
};

export default UseMemo;

// - `useMemo` được sử dụng để tính toán `countEvenNumbers`, số lượng các số chẵn trong mảng `numbers`.
// - Hàm callback trong `useMemo` sẽ chỉ được gọi lại khi `numbers` thay đổi. Nếu `numbers` không thay đổi, giá trị được memoize sẽ được sử dụng lại.
// - Mỗi khi bạn nhấn vào nút "Thêm số ngẫu nhiên", một số ngẫu nhiên sẽ được thêm vào `numbers`, trigger việc render lại component và tính toán lại số lượng các số chẵn.

// `useMemo` thường được sử dụng khi bạn cần tính toán một giá trị dựa trên một số dependencies và muốn tránh tính toán không cần thiết khi không có sự thay đổi từ các dependencies. Tuy nhiên, cần lưu ý rằng việc sử dụng `useMemo` không luôn cần thiết và nên được áp dụng khi cần thiết để tối ưu hiệu suất của ứng dụng.