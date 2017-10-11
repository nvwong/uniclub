import { normalize, arrayOf } from 'normalizr';
import { eventSchema } from '../schemas';
import Resources from '../constants/Resources';
import { setEntities, removeEntities } from './entityActions';
import { setPages, prependEntitiesIntoPage } from './pageActions';

export const setEvents = (res) => (dispatch, getState) => {
  let normalized = normalize(res.events, arrayOf(eventSchema));

  dispatch(setEntities(normalized));
  dispatch(setPages(Resources.EVENTS, res.page, normalized.result));
};

export const addEvent = (oneEvent) => (dispatch, getState) => {
  let normalized = normalize([oneEvent], arrayOf(eventSchema));

  dispatch(prependEntitiesIntoPage(
    Resources.EVENTS,
    normalized,
    1
  ));
};

export const removeEvent = (id) => removeEntities(Resources.EVENTS, [id]);

export const addParticipant = (id) => { return; };
