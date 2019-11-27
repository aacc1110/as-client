import { createAction } from 'typesafe-actions';
import { CurrentUser } from '../../lib/graphql/user';

// 액션 type
export const SHOW_CORE = 'core/SHOW_CORE';
export const SET_USER = 'core/SET_USER';

// 액션 생성 함수
export const showCore = createAction(SHOW_CORE)<boolean>();
export const setUser = createAction(SET_USER)<CurrentUser | null>();
