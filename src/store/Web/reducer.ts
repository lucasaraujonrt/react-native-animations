import { ACTION_WEB } from '../actionsType';

export const initialState = {
  web: {
    link: null,
    title: null,
  },
};

const webReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_WEB:
      return {
        ...state,
        web: action.payload,
      };
    default:
      return state;
  }
};

export default webReducer;
