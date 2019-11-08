import { createAction } from 'typesafe-actions';

export const SHOW_CORE = 'core/SHOW_CORE';

export const showCore = createAction(SHOW_CORE)<boolean>();
