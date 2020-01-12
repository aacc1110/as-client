import { useState, useCallback } from 'react';

const useBoolean = (initialState: boolean) => {
  const [value, setValue] = useState(initialState);
  const show = useCallback(() => {
    setValue(!value);
  }, [value]);
  return [value, show, setValue] as [
    typeof value,
    typeof show,
    typeof setValue
  ];
};
export default useBoolean;
