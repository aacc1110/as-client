import { combineReducers } from 'redux';
import counter from './counter/counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
