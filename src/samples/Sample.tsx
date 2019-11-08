import React from 'react';
import Counter from './components/counter/Counter';
import TodoInsert from './components/todos/TodoInsert';
import TodoList from './components/todos/TodoList';
import HelloWorld from './typescriptGenerics/HelloWorld';

function Sample() {
  return (
    <>
      <Counter />
      <TodoInsert />
      <TodoList />
      <HelloWorld name="" />
    </>
  );
}

export default Sample;
