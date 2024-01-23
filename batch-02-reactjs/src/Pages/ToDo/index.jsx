import Button from 'components/buttonGroup/button';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionAddTodo, actionDeleteTodo } from 'store/todo/action';

function TodoApp() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoReducer.todoList);

  const [mission, setMission] = useState('');

  const onChange = useCallback((e) => {
    setMission(e.target.value);
  }, []);

  const onSubmitTodo = useCallback(() => {
    if (mission) {
      dispatch(
        actionAddTodo({
          id: Math.random(),
          text: mission,
          callback: () => setMission(''),
        }),
      );
    }
  }, [dispatch, mission]);

  const onDeleteTodo = useCallback((id) => () => {
    dispatch(
      actionDeleteTodo({ id }),
    );
  }, [dispatch]);

  return (
    <>
      <input
        type="text"
        className="form-control"
        value={mission}
        onChange={onChange}
      />
      <Button
        icon={<i className="fa-solid fa-xmark fa-2xl" />}
        title="Thêm nhiệm vụ"
        onClick={onSubmitTodo}
        // onClick={() => {
        //   dispatch(decreaseCountAction(1));
        // }}
      />

      {todoList.length > 0 ? <ul>
        {
          todoList?.map(({id, text})=> <li key={id}>
            {text} <button onClick={onDeleteTodo(id)}>xóa</button>
          </li>)
        }
      </ul> : <span>Chưa có nhiệm vụ</span>}
    </>
  );
}

export default TodoApp;
