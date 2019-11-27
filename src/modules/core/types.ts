import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { CurrentUser } from '../../lib/graphql/user';

// 액션들의 타입스크립트 타입 준비
export type CoreAction = ActionType<typeof actions>;

// 상태를 위한 타입 선언
export type CoreState = {
  visible: boolean;
  user: CurrentUser | undefined;
};
