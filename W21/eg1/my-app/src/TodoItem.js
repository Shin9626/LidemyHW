import styled from 'styled-components';
import { useState } from 'react';

const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid grey;

  padding: 5px;

  & + & {
    margin-top: 4px;
  }
`;

const TodoContent = styled.div`
  color: blue;
  font-size: 10px;

  ${ props => props.size === 'XL' && `
    font-size: 20px;
    font-weight: bold;
  `}
`;

const ButtonWrapper = styled.div``;

const TodoButton = styled.button`
  color: black;

  & + & {
    margin-left: 4px;
  }
`;

function TodoItem({ className, size, todo, handleDeleteTodo}) {
  return (
    <TodoWrapper className={className} todo-id={todo.id}>
      <TodoContent size={size}>{todo.content}</TodoContent>
      <ButtonWrapper>
        <TodoButton>已完成</TodoButton>
        <TodoButton onClick={() => {
          handleDeleteTodo(todo.id);
        }}>刪除</TodoButton>
      </ButtonWrapper>
    </TodoWrapper>
  );
}
export default TodoItem;
