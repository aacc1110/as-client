import { useState, useCallback } from 'react';

const useBoolean = (initialState: boolean) => {
  const [value, setValue] = useState(initialState);
  const show = useCallback(() => {
    setValue(!value);
  }, [value]);
  console.log('useBoolea:', value);
  return { value, show };
};
export default useBoolean;
