import { Action } from 'redux';
import { CounterActions } from './app.actions';

export interface IAppState {
  query: string,
  newsArray: object[],
  length: number,
  pageSize: number,
  pageNumber: number
}

export const INITIAL_STATE: IAppState = {
  query: 'vietnam',
  newsArray: [],
  length: 9999,
  pageSize: 10,
  pageNumber: 0
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
  switch(action.type) {
    case CounterActions.STORE_NEWS:
      return {
        pageNumber: action.payload.page,
        query: action.payload.query,
        length: lastState.length,
        pageSize: lastState.pageSize,
        newsArray: action.payload.newsArray
      };
  }

  return lastState;
}
