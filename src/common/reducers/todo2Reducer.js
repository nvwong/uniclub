import ActionTypes from '../constants/ActionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.SET_TODO2: {
      return [
        ...action.todo2,
      ];
    }
    case ActionTypes.ADD_TODO2: {
      return [
        action.todo2,
        ...state,
      ];
    }
    case ActionTypes.REMOVE_TODO2: {
      return [
        ...state.filter(todo2 => todo2._id !== action.id),
      ];
    }
    default: {
      return state;
    }
  }
};
