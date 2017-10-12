import ActionTypes from '../constants/ActionTypes';

const initialState = {
  eventSearchValue: '',
  tagSearchValue: '',
  suggestions: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_INPUT_VALUE:
      if (action.searchFor === 'name') {
        return {
          ...state,
          eventSearchValue: action.value,
        };
      } else {
        return {
          ...state,
          tagSearchValue: action.value,
        };
      }

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
      if ((action.type === 'name' && action.value !== state.eventSearchValue) ||
      (action.type === 'tag' && action.value !== state.tagSearchValue)) {
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
