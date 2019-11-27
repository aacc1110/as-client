import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { showCore, setUser } from '../../modules/core';
import { RootState } from '../../modules';

export default function useMenu() {
  const core = useSelector((state: RootState) => state.core);
  const dispatch = useDispatch();

  const onVisible = useCallback(() => dispatch(showCore(true)), [dispatch]);
  const onUser = useCallback(() => dispatch(setUser(null)), [dispatch]);
  return {
    core,
    onVisible,
    onUser
  };
}
