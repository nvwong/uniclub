import ActionTypes from '../constants/ActionTypes';

const initialState = {
  value: '',
  suggestions: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_INPUT_VALUE:
      return {
        ...state,
        value: action.value,
      };

    case ActionTypes.CLEAR_SUGGESTIONS:
      return {
        ...state,
        suggestions: [],
      };

    case ActionTypes.LOAD_SUGGESTIONS_BEGIN:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.MAYBE_UPDATE_SUGGESTIONS:
      // Ignore suggestions if input value changed
      if (action.value !== state.value) {
        return {
          ...state,
          isLoading: false,
        };
      }

      return {
        ...state,
        suggestions: action.suggestions,
        isLoading: false,
      };

    default:
      return state;
  }
};

// export default (state = {}, action) => {
//   switch (action.type) {
//     case ActionTypes.SET_SEARCH: {
//       console.log(action);
//       return [
//         ...action.res,
//       ];
//     }
//     case ActionTypes.SET_VALUE: {
//       console.log(action);
//       return [
//         action.res,
//         ...state,
//       ];
//     }
//     case ActionTypes.REMOVE_SEARCH: {
//       return [
//         ...state.filter(search => search._id !== action.id),
//       ];
//     }
//     default: {
//       return state;
//     }
//   }
// };
