import React, { ChangeEvent, useState, FormEvent } from 'react';
import styled from '@emotion/styled';
import useAddTodo from '../../hooks/todos/useAddTodo';

const TodoInsertBlock = styled.div``;

interface TodoInsertProps {}

function TodoInsert(props: TodoInsertProps) {
  const [value, setValue] = useState('');
  const addTodo = useAddTodo();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(value); // TODO: 커스텀 Hook 사용해서 새 항목 등록
    setValue('');
  };
  return (
    <TodoInsertBlock>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="할 일을 입력하세요." value={value} onChange={onChange} />
        <button type="submit" value="등록">
          등록
        </button>
      </form>
    </TodoInsertBlock>
  );
}

export default TodoInsert;
