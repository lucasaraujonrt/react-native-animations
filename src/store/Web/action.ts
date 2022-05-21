import { Dispatch } from 'redux';

import navigationService from '@mobile/services/navigation';

import { ACTION_WEB } from '../actionsType';

export const bla = '';

export const navigateToWebView =
  (payload: reducers.WebState) => (dispatch: Dispatch) => {
    dispatch({
      type: ACTION_WEB,
      payload,
    });

    navigationService.navigate('Web');
  };
