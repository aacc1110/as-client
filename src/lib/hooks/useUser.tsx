import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { showMenu, setUser } from '../../modules/core';
import { RootState } from '../../modules';

export default function useUser() {
  const { user, visible } = useSelector((state: RootState) => ({
    user: state.core.user,
    visible: state.core.visible
  }));
  const dispatch = useDispatch();

  const onVisible = useCallback(() => dispatch(showMenu(true)), [dispatch]);
  const notUser = useCallback(() => dispatch(setUser(null)), [dispatch]);
  return {
    user,
    notUser,
    visible,
    onVisible
  };
}
