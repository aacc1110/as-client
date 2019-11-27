import { useState, useCallback } from 'react';

export const useInput = (initialValue: any) => {
  const [input, setInput] = useState(initialValue);
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  return [input, onChange];
};
