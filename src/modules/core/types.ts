import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CoreAction = ActionType<typeof actions>;

// export type Core = {
//   state: boolean;
// };
