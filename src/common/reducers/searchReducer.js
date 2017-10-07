import ActionTypes from '../constants/ActionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH: {
      console.log(action);
      return [
        ...action.res,
      ];
    }
    case ActionTypes.SET_VALUE: {
      console.log(action);
      return [
        action.res,
        ...state,
      ];
    }
    case ActionTypes.REMOVE_SEARCH: {
      return [
        ...state.filter(search => search._id !== action.id),
      ];
    }
    default: {
      return state;
    }
  }
};
