import assign from 'object-assign';
import { handleDbError } from '../decorators/handleError';
import filterAttribute from '../utils/filterAttribute';
import Events from '../models/Event';

export default{
  list(req, res) {
    Events.paginate({ page: req.query.page }, handleDbError(res)((page) => {
      Events
        .find({ name: req.query.name })
        .sort({ date: 'asc' })
        .limit(page.limit)
        .skip(page.skip)
        .exec(handleDbError(res)((events) => {
          res.json({
            events: events,
            page: page,
          });
        }));
    }));
  },
};
