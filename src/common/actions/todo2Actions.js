import { normalize, arrayOf } from 'normalizr';
import { todo2Schema } from '../schemas';
import Resources from '../constants/Resources';
import { setEntities, removeEntities } from './entityActions';
import { setPages, prependEntitiesIntoPage } from './pageActions';

export const setTodos = (res) => (dispatch, getState) => {
  let normalized = normalize(res.todo2, arrayOf(todo2Schema));

  dispatch(setEntities(normalized));
  dispatch(setPages(Resources.TODO2, res.page, normalized.result));
};

export const addTodo = (todo2) => (dispatch, getState) => {
  let normalized = normalize([todo2], arrayOf(todo2Schema));

  dispatch(prependEntitiesIntoPage(
    Resources.TODO2,
    normalized,
    1
  ));
};

export const removeTodo = (id) => removeEntities(Resources.TODO2, [id]);
