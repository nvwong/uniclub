import assign from 'object-assign';
import { handleDbError } from '../decorators/handleError';
import filterAttribute from '../utils/filterAttribute';
import Todo2 from '../models/Todo2';

export default {
  list(req, res) {
    Todo2.paginate({
      page: req.query.page,
      perPage: 5,
    }, handleDbError(res)((page) => {
      Todo2
        .find({}, null, {
          limit: page.limit,
          skip: page.skip < 0 ? 0 : page.skip,
          sort: { createdAt: 'desc' },
        })
        .then((todo2) => {
          res.json({
            todo2: todo2,
            page: page,
          });
        });
    }));
  },

  create(req, res) {
    const todo2 = Todo2({
      text: req.body.text,
    });

    todo2.save(handleDbError(res)((todo2) => {
      res.json({
        todo2: todo2,
      });
    }));
  },

  update(req, res) {
    let modifiedTodo2 = filterAttribute(req.body, [
      'text',
    ]);

    Todo2.findById(req.params.id, handleDbError(res)((todo2) => {
      todo2 = assign(todo2, modifiedTodo2);
      todo2.save(handleDbError(res)(() => {
        res.json({
          originAttributes: req.body,
          updatedAttributes: todo2,
        });
      }));
    }));
  },

  remove(req, res) {
    Todo2.remove({_id: req.params.id}, handleDbError(res)(() => {
      res.json({});
    }));
  },
};
