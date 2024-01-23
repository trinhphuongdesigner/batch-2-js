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

section 5:
  - React lifecycle,
  - State,
  - onChange event,
  - Form (tìm hiểu trước)

  Bài tập: Viết 1 ô input, nhập giá trị (số) vào ô input đó, bên cạnh có 1 button "Áp dụng", khi click "Áp dụng" thì số trong ô input sẽ được cập nhật vào giá trị setTimeOut để next image.

section 6: 
  - Form
  - Validation
  - git stash
  - Yup & formik or react-hook-form

section: 12:
  - https://ant.design
  - https://coreui.io/
  - https://mui.com/

  - Using the State Hook => tạo và quản lý trạng thái của 1 component
  - Using the Effect Hook => quản lý vòng đời 1 component
  - useMemo => catching biến (function có return, không nhận paramater đầu vào)
  - useCallback =>  catching hàm (function có | không return, nhận paramater đầu vào)
  - useRef
  - Using the Context Hook
  - useReducer
  - useTransition

section: 13:
  - Cài đặt react-router-dom
  - Config ở index.js
  - Khai báo các đường dẫn (path) ở APP.js
  - Tạo folder Pages và di chuyển các page tương ứng vào folder này

section: 14:
  - Tạo file component (UI - giao diện)
  - Khai báo trong Router
  - Đăng kí trong danh sách đường dẫn (có thể có hoặc không)

  Homework:
  1. hiển thị thông tin người đằng bài post (tên, email)
  2. click vào tên người đằng sẽ đi đến trang chi tiết người đăng.
  https://jsonplaceholder.typicode.com/users/3

section 15:
  - React lifecycle
  Homework:
  - URL get comment of post: https://jsonplaceholder.typicode.com/posts/1/
  trong đó 1: id của bài viết (postId)

section 17:
  - local state => global state
  - zustand
  - useContext
  - redux => redux toolkit, redux thunk, redux saga
  Store: Nơi lưu trữ toàn bộ trạng thái của ứng dụng. Nó chỉ có thể được cập nhật thông qua việc gửi actions.

  Actions: Là các đối tượng chứa thông tin về sự kiện đã xảy ra trong ứng dụng. Các actions được gửi từ components để yêu cầu thay đổi trạng thái.

  Reducers: Là các hàm xử lý actions và cập nhật trạng thái trong store. Mỗi reducer đại diện cho một phần của trạng thái của ứng dụng.

  Dispatch: Là một phương thức để gửi actions đến store. Khi một action được dispatch, nó sẽ được chuyển đến reducer để xử lý và cập nhật trạng thái.

  Middleware: Là các hàm có thể xử lý các actions trước khi chúng đến reducers. Middleware được sử dụng để thực hiện các chức năng như logging, gọi API, hoặc xử lý các actions bất đồng bộ.