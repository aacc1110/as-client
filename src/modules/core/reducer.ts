import { createReducer } from 'typesafe-actions';
import { SHOW_CORE } from './actions';

const core = createReducer(false, {
  [SHOW_CORE]: state => state.valueOf()
});

export default core;
