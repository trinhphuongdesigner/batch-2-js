section 2:
  - Cấu trúc và cách tạo một component
  - Import - export component
  - Props (Khai báo và truyền props từ component parent to children)
  - Condition rendering (điều kiện hiên thị)
  - List & key

section 3:
  - Callback function
  - Rest parameter
  - Hook (không phải hooc)
  - Anonymous func
  - State

section 4:
  - Practice:
  Làm một ứng dụng trình chiếu ảnh.
  1. bao gồm 10 ảnh
  2. có 2 nút tiếp theo và lùi lại
  3. hiển thị thứ tự ảnh (2/10)
  4. có 2 chế độ, tự động chuyển ảnh hoặc click mới chuyển, bật tắt chế độ bằng 1 nút. có button chuyển đổi
  5. có 2 chế độ, ảnh ngẫu nhiên hoặc theo thứ tự. có button chuyển đổi
  6. có 2 chế độ, lặp lại hoặc không lặp lại (lặp lại: hết 10 ảnh sẽ quay lại ảnh 1; không lặp: hết 10 ảnh sẽ ko chạy về số 1)

  arr = [
    1,
    2,
    3,
  ]

state: => index hiện tại
  

<img src={arr[state]} alt="" />
thứ tự : state + 1
