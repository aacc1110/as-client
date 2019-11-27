import { createReducer } from 'typesafe-actions';
import { CoreState, CoreAction } from './types';
import { SHOW_CORE, SET_USER } from './actions';

// 초깃값 설정
const initialState: CoreState = {
  visible: false,
  user: null
};

// 리듀서
const core = createReducer<CoreState, CoreAction>(initialState, {
  [SHOW_CORE]: state => {
    return {
      ...state,
      visible: !state.visible
    };
  },
  [SET_USER]: (state, { payload }) => {
    return {
      ...state,
      user: payload
    };
  }
});

export default core;
