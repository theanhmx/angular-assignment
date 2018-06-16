import { Action } from 'redux';
import { CounterActions } from './app.actions';

export interface IAppState {
  query: string,
}

export const INITIAL_STATE: IAppState = {
  query: 'vietnam'
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
  switch(action.type) {
    case CounterActions.GETNEWS: 
      return { query: 'world cup' }; 
  }

  // We don't care about any other actions right now.
  return lastState;
}