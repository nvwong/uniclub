import ActionTypes from '../constants/ActionTypes';
import { normalize, arrayOf } from 'normalizr';
import { searchSchema } from '../schemas';
import Resources from '../constants/Resources';
import { setEntities, removeEntities } from './entityActions';
import { setPages, prependEntitiesIntoPage } from './pageActions';
import { pushErrors } from './errorActions';
import searchAPI from '../api/search';

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function getMatchingLanguages(result, value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }
  console.log(result);
  const regex = new RegExp('^' + escapedValue, 'i');
  return result.map(section => {
    return {
      title: section.title,
      results: section
        .results
        .filter(result => regex.test(result.name)),
    };
  }).filter(section => section.results.length > 0);
}

export const loadSuggestions = (value, type) => (dispatch, getState) => {
  let apiEngine = getState().apiEngine;

  dispatch(loadSuggestionsBegin());
  // Fake an AJAX call
  searchAPI(apiEngine)
    .list(value, type)
    .catch((err) => {
      pushErrors(err);
      throw err;
    })
    .then((json) => {
      return dispatch(
        maybeUpdateSuggestions(getMatchingLanguages(json, value), value)
      );
    });
};

export const updateInputValue = (value, type) => {
  return {
    type: ActionTypes.UPDATE_INPUT_VALUE,
    searchFor: type,
    value: value,
  };
};

export const clearSuggestions = () => {
  return {
    type: ActionTypes.CLEAR_SUGGESTIONS,
  };
};

export const loadSuggestionsBegin = () => {
  return {
    type: ActionTypes.LOAD_SUGGESTIONS_BEGIN,
  };
};

export const maybeUpdateSuggestions = (suggestions, value) => {
  return {
    type: ActionTypes.MAYBE_UPDATE_SUGGESTIONS,
    suggestions,
    value,
  };
};
