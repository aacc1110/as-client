import React, { useState } from 'react';
import styled from '@emotion/styled';

const HelloWorldBlock = styled.div``;

interface HelloWorldProps {
  name: string;
}

interface FormProps<T> {
  values: T;
  children: (values: T) => JSX.Element;
}

function Form<T>({ values, children }: FormProps<T>) {
  return children(values);
}
function HelloWorld({ name }: HelloWorldProps) {
  const [state] = useState<{ fullname: string | null }>({ fullname: 'fullName' });

  return (
    <HelloWorldBlock>
      <Form values={{ lastName: 'lastName', state }}>
        {values => (
          <>
            <div>{values.lastName}</div>
            <div>{state.fullname}</div>
          </>
        )}
      </Form>
    </HelloWorldBlock>
  );
}

export default HelloWorld;
