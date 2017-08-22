import { normalize, arrayOf } from 'normalizr';
import { userSchema } from '../schemas';
import Resources from '../constants/Resources';
import { setEntities, removeEntities } from './entityActions';
import { setPages, prependEntitiesIntoPage } from './pageActions';

export const setUserlist = (res) => (dispatch, getState) => {
  let normalized = normalize(res.userlist, arrayOf(userSchema));

  dispatch(setEntities(normalized));
  dispatch(setPages(Resources.USERLIST, res.page, normalized.result));
};

/* export const addTodo = (todo) => (dispatch, getState) => {
  let normalized = normalize([todo], arrayOf(todoSchema));

  dispatch(prependEntitiesIntoPage(
    Resources.TODO,
    normalized,
    1
  ));
}; */

// export const removeUser = (id) => removeEntities(Resources.USERLIST, [id]);
