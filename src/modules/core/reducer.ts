import { createReducer } from 'typesafe-actions';
import { CoreState, CoreAction } from './types';
import { SET_USER, SHOW_MENU } from './actions';

// 초깃값 설정
const initialState: CoreState = {
  visible: false,
  user: undefined
};

// 리듀서
const core = createReducer<CoreState, CoreAction>(initialState, {
  [SHOW_MENU]: state => ({ ...state, visible: !state.visible }),

  [SET_USER]: (state, { type, payload }) =>
    Object.assign({
      ...state,
      user: payload
    })
});

export default core;
