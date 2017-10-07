import ActionTypes from '../constants/ActionTypes';
import { normalize, arrayOf } from 'normalizr';
import { searchSchema } from '../schemas';
import Resources from '../constants/Resources';
import { setEntities, removeEntities } from './entityActions';
import { setPages, prependEntitiesIntoPage } from './pageActions';

export const setSearch = (res) => (dispatch, getState) => {
  // let normalized = normalize(res, arrayOf(searchSchema));
  console.log(res);
  // console.log(normalized);

  dispatch({
    type: ActionTypes.SET_SEARCH,
    res,
  });
};

// export const setValue = (value) => (dispatch, getState) => {
//
// };
