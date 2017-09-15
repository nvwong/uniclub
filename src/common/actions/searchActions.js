import { normalize, arrayOf } from 'normalizr';
import { eventSchema } from '../schemas';
import Resources from '../constants/Resources';
import { setEntities, removeEntities } from './entityActions';
import { setPages, prependEntitiesIntoPage } from './pageActions';

export const setSearch = (res) => (dispatch, getState) => {
  let normalized = normalize(res.events, arrayOf(eventSchema));
  console.log(normalized);
  return normalized;
};
