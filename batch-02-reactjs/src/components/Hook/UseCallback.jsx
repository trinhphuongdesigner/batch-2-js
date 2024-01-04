import React, { useState, useCallback } from 'react';

const UseCallback = () => {
  const [count, setCount] = useState(0);

  // Sử dụng useCallback để tránh tạo ra hàm mới khi component render lại
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Dependencies rỗng, hàm chỉ tạo một lần khi component được render lần đầu

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default UseCallback;

// - `useCallback` được sử dụng để bao bọc hàm `increment`. 
// - `increment` chỉ được tạo ra một lần duy nhất khi component được render lần đầu tiên do dependencies được truyền vào là một mảng rỗng (`[]`). Nếu dependencies này thay đổi, `increment` sẽ được tạo lại.
// - `increment` được truyền vào trong `onClick` của nút, nhưng không tạo ra một hàm mới mỗi khi component render lại. Điều này giúp tối ưu hóa hiệu suất, đặc biệt là trong các trường hợp hàm này được truyền xuống các components con và có thể gây ra việc render không cần thiết khi không sử dụng `useCallback`.

// `useCallback` không phải lúc nào cũng cần thiết, và việc sử dụng nó phụ thuộc vào ngữ cảnh cụ thể của ứng dụng và việc tối ưu hóa hiệu suất. Nói chung, khi bạn có các hàm không thay đổi và được truyền xuống các components con, `useCallback` có thể hữu ích để tối ưu hóa việc render lại của React.