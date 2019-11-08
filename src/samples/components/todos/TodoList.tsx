import React from 'react';
import styled from '@emotion/styled';
import TodoItem from './TodoItem';
import useTodos from '../../hooks/todos/useTodos';

const TodoListBlock = styled.div``;

interface TodoListProps {}

function TodoList(props: TodoListProps) {
  const todos = useTodos();
  if (todos.length === 0) return <p>등록된 항목이 없습니다.</p>;
  return (
    <TodoListBlock>
      <ul>
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </TodoListBlock>
  );
}

export default TodoList;
