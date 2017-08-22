import assign from 'object-assign';
import { handleDbError } from '../decorators/handleError';
import filterAttribute from '../utils/filterAttribute';
import User from '../models/User';

export default {
  list(req, res) {
    User.paginate({
      page: req.query.page,
      perPage: 10,
    }, handleDbError(res)((page) => {
      User
        .find({}, null, {
          limit: page.limit,
          skip: page.skip < 0 ? 0 : page.skip,
          sort: { username: 'asce' },
        })
        .then((userlist) => {
          res.json({
            userlist: userlist,
            page: page,
          });
        });
    }));
  },

/*
  update(req, res) {
    let modifiedTodo = filterAttribute(req.body, [
      'text',
    ]);

    Todo.findById(req.params.id, handleDbError(res)((todo) => {
      todo = assign(todo, modifiedTodo);
      todo.save(handleDbError(res)(() => {
        res.json({
          originAttributes: req.body,
          updatedAttributes: todo,
        });
      }));
    }));
  },

  remove(req, res) {
    Todo.remove({_id: req.params.id}, handleDbError(res)(() => {
      res.json({});
    }));
  },
  */
};