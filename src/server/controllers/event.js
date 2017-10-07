import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import assign from 'object-assign';
// import configs from '../../../configs/project/server';
import handleError, { handleDbError } from '../decorators/handleError';
import Events from '../models/Event';
import filterAttribute from '../utils/filterAttribute';
// import { redirect } from '../../common/actions/routeActions';

export default {
  list(req, res) {
    Events.paginate({ page: req.query.page }, handleDbError(res)((page) => {
      Events
        .find({})
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

  create(req, res) {
    const oneEvent = Events({
      date: req.body.date,
      location: req.body.location,
      description: req.body.location,
      tag: req.body.tag,
      organiser: req.body.organiser,
      category: req.body.category,
      price: req.body.price,
      quota: req.body.quota,
      state: req.body.state,
    });
    oneEvent.save(handleDbError(res)((oneEvent) => {
      res.json({
        oneEvent: oneEvent,
      });
    }));
  },

  readEvent(req, res) {
    res.json({
      oneEvent: req.oneEvent,
    });
  },

  update(req, res) {
    let { oneEvent } = req;
    let modifiedEvent = filterAttribute(req.body, [
      'date',
      'location',
      'description',
      'tag',
      'category',
      'price',
      'quota',
      'state',
    ]);

    assign(oneEvent, modifiedEvent);
    oneEvent.save(handleDbError(res)((oneEvent) => {
      res.json({
        originAttributes: req.body,
        oneEvent: oneEvent,
      });
    }));
  },

  remove(req, res) {
    Events.remove({_id: req.params.id}, handleDbError(res)(() => {
      res.json({});
    }));
  },

  updatePosterURL(req, res) {
    let { oneEvent } = req;
    let modifiedEvent = filterAttribute(req.body, ['avatarURL']);

    assign(oneEvent, modifiedEvent);
    oneEvent.save(handleDbError(res)((oneEvent) => {
      res.json({
        originAttributes: req.body,
        oneEvent: oneEvent,
      });
    }));
  },

  uploadPoster(req, res) {
    // use `req.file` to access the avatar file
    // and use `req.body` to access other fileds
    let { filename } = req.files.avatar[0];
    let tmpPath = req.files.avatar[0].path;
    let targetDir = path.join(
      __dirname, '../../public', 'events', req.oneEvent._id.toString()
    );
    let targetPath = path.join(targetDir, filename);

    mkdirp(targetDir, handleError(res)(() => {
      fs.rename(tmpPath, targetPath, handleError(res)(() => {
        res.json({
          downloadURL: `/events/${req.oneEvent._id}/${filename}`,
        });
      }));
    }));
  },

  addParticipant(req, res) {
    // test URL :localhost:3000/api/events/addParticipant/59c0b79d734d1d1df7f80bae
    // header: application/json
    // body: {
    //  _id: 599a9843d31cdc6540282248
    // }
    Events.findByIdAndUpdate(
      req.params.id,
      { $push: { 'participants': req.body.participantId } },
      { safe: true, upsert: true, new: true },
      function(err, model) {
        console.log(err);
        if (err) {
          res.json(err);
        } else {
          res.json(model);
        }
      }
    );
  },
};
