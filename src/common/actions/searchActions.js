import ActionTypes from '../constants/ActionTypes';
import { normalize, arrayOf } from 'normalizr';
import { searchSchema } from '../schemas';
import Resources from '../constants/Resources';
import { setEntities, removeEntities } from './entityActions';
import { setPages, prependEntitiesIntoPage } from './pageActions';
import searchAPI from '../api/search';

const languages = [
  {
    name: 'C',
    year: 1972,
  },
  {
    name: 'C#',
    year: 2000,
  },
  {
    name: 'C++',
    year: 1983,
  },
  {
    name: 'Clojure',
    year: 2007,
  },
  {
    name: 'Elm',
    year: 2012,
  },
  {
    name: 'Go',
    year: 2009,
  },
  {
    name: 'Haskell',
    year: 1990,
  },
  {
    name: 'Java',
    year: 1995,
  },
  {
    name: 'Javascript',
    year: 1995,
  },
  {
    name: 'Perl',
    year: 1987,
  },
  {
    name: 'PHP',
    year: 1995,
  },
  {
    name: 'Python',
    year: 1991,
  },
  {
    name: 'Ruby',
    year: 1995,
  },
  {
    name: 'Scala',
    year: 2003,
  },
];

function randomDelay() {
  return 300 + Math.random() * 1000;
}

function getMatchingLanguages(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return languages.filter(language => regex.test(language.name));
}

export const loadSuggestions = (value) => (dispatch, getState) => {
  return dispatch => {
    dispatch(loadSuggestionsBegin());

    // Fake an AJAX call
    setTimeout(() => {
      dispatch(maybeUpdateSuggestions(getMatchingLanguages(value), value));
    }, randomDelay());
  };
};

export const updateInputValue = (value) => {
  return {
    type: UPDATE_INPUT_VALUE,
    value,
  };
};

export const clearSuggestions = () => {
  return {
    type: CLEAR_SUGGESTIONS,
  };
};

export const loadSuggestionsBegin = () => {
  return {
    type: LOAD_SUGGESTIONS_BEGIN,
  };
};

export const maybeUpdateSuggestions = (suggestions, value) => {
  return {
    type: MAYBE_UPDATE_SUGGESTIONS,
    suggestions,
    value,
  };
};

//
// export const setSearch = (res) => (dispatch, getState) => {
//   // let normalized = normalize(res, arrayOf(searchSchema));
//   console.log(res);
//   // console.log(normalized);
//
//   dispatch({
//     type: ActionTypes.SET_SEARCH,
//     res,
//   });
// };

// export const setValue = (value) => (dispatch, getState) => {
//
// };
