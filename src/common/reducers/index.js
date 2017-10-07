import { combineReducers } from 'redux';
import routing from './routerReducer';
import cookies from './cookieReducer';
import errors from './errorReducer';
import apiEngine from './apiEngineReducer';
import form from './formReducer';
import intl from './intlReducer';
import entity from './entityReducer';
import pagination from './paginationReducer';
import search from './searchReducer';
import todo from './todoReducer';

const rootReducer = combineReducers({
  routing,
  cookies,
  errors,
  apiEngine,
  form, // must mount as `form` from redux-form's docs
  intl,
  entity,
  pagination,
  search,
  todo,
});

export default rootReducer;
