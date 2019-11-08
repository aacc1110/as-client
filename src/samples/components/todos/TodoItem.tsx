import React from 'react';
import styled from '@emotion/styled';
import { Todo } from '../../modules/todos';
import useTodoActions from '../../hooks/todos/useTodoActions';

const TodoItemBlock = styled.div`
  .TodoItem .text {
    cursor: pointer;
  }

  .TodoItem.done .text {
    color: #999999;
    text-decoration: line-through;
  }

  .TodoItem .remove {
    color: red;
    margin-left: 4px;
    cursor: pointer;
  }
`;

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const { onToggle, onRemove } = useTodoActions(todo.id);
  // TODO: 커스텀 Hook 사용해서 onToggle / onRemove 구현
  return (
    <TodoItemBlock>
      <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
        <span className="text" onClick={onToggle}>
          {todo.text}
        </span>
        <span className="remove" onClick={onRemove}>
          (X)
        </span>
      </li>
    </TodoItemBlock>
  );
}

export default TodoItem;
