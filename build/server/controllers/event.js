'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _handleError = require('../decorators/handleError');

var _handleError2 = _interopRequireDefault(_handleError);

var _Event = require('../models/Event');

var _Event2 = _interopRequireDefault(_Event);

var _filterAttribute = require('../utils/filterAttribute');

var _filterAttribute2 = _interopRequireDefault(_filterAttribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { redirect } from '../../common/actions/routeActions';

exports.default = {
  list: function list(req, res) {
    _Event2.default.paginate({ page: req.query.page }, (0, _handleError.handleDbError)(res)(function (page) {
      _Event2.default.find({}).sort({ date: 'asc' }).limit(page.limit).skip(page.skip).exec((0, _handleError.handleDbError)(res)(function (events) {
        res.json({
          events: events,
          page: page
        });
      }));
    }));
  },
  create: function create(req, res) {
    var oneEvent = (0, _Event2.default)({
      name: req.body.name,
      date: req.body.date,
      location: req.body.location,
      description: req.body.description,
      tag: req.body.tag,
      organiser: req.body.organiser,
      category: req.body.category,
      price: req.body.price,
      quota: req.body.quota,
      state: req.body.state
    });
    oneEvent.save((0, _handleError.handleDbError)(res)(function (oneEvent) {
      res.json({
        oneEvent: oneEvent
      });
    }));
  },
  readEvent: function readEvent(req, res) {
    res.json({
      oneEvent: req.oneEvent
    });
  },
  update: function update(req, res) {
    var oneEvent = req.oneEvent;

    var modifiedEvent = (0, _filterAttribute2.default)(req.body, ['name', 'date', 'location', 'description', 'tag', 'category', 'price', 'quota', 'state']);

    (0, _objectAssign2.default)(oneEvent, modifiedEvent);
    oneEvent.save((0, _handleError.handleDbError)(res)(function (oneEvent) {
      res.json({
        originAttributes: req.body,
        oneEvent: oneEvent
      });
    }));
  },
  remove: function remove(req, res) {
    _Event2.default.remove({ _id: req.params.id }, (0, _handleError.handleDbError)(res)(function () {
      res.json({});
    }));
  },
  updatePosterURL: function updatePosterURL(req, res) {
    var oneEvent = req.oneEvent;

    var modifiedEvent = (0, _filterAttribute2.default)(req.body, ['avatarURL']);

    (0, _objectAssign2.default)(oneEvent, modifiedEvent);
    oneEvent.save((0, _handleError.handleDbError)(res)(function (oneEvent) {
      res.json({
        originAttributes: req.body,
        oneEvent: oneEvent
      });
    }));
  },
  uploadPoster: function uploadPoster(req, res) {
    // use `req.file` to access the avatar file
    // and use `req.body` to access other fileds
    var filename = req.files.avatar[0].filename;

    var tmpPath = req.files.avatar[0].path;
    var targetDir = _path2.default.join(__dirname, '../../public', 'events', req.oneEvent._id.toString());
    var targetPath = _path2.default.join(targetDir, filename);

    (0, _mkdirp2.default)(targetDir, (0, _handleError2.default)(res)(function () {
      _fs2.default.rename(tmpPath, targetPath, (0, _handleError2.default)(res)(function () {
        res.json({
          downloadURL: '/events/' + req.oneEvent._id + '/' + filename
        });
      }));
    }));
  },
  addParticipant: function addParticipant(req, res) {
    // test URL :localhost:3000/api/events/addParticipant/59c0b79d734d1d1df7f80bae
    // header: application/json
    // body: {
    //  _id: 599a9843d31cdc6540282248
    // }
    _Event2.default.findByIdAndUpdate(req.params.id, { $push: { 'participants': req.body.participantId } }, { safe: true, upsert: true, new: true }, function (err, model) {
      console.log(err);
      if (err) {
        res.json(err);
      } else {
        res.json(model);
      }
    });
  }
};
// import configs from '../../../configs/project/server';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2V2ZW50LmpzIl0sIm5hbWVzIjpbImxpc3QiLCJyZXEiLCJyZXMiLCJwYWdpbmF0ZSIsInBhZ2UiLCJxdWVyeSIsImZpbmQiLCJzb3J0IiwiZGF0ZSIsImxpbWl0Iiwic2tpcCIsImV4ZWMiLCJldmVudHMiLCJqc29uIiwiY3JlYXRlIiwib25lRXZlbnQiLCJuYW1lIiwiYm9keSIsImxvY2F0aW9uIiwiZGVzY3JpcHRpb24iLCJ0YWciLCJvcmdhbmlzZXIiLCJjYXRlZ29yeSIsInByaWNlIiwicXVvdGEiLCJzdGF0ZSIsInNhdmUiLCJyZWFkRXZlbnQiLCJ1cGRhdGUiLCJtb2RpZmllZEV2ZW50Iiwib3JpZ2luQXR0cmlidXRlcyIsInJlbW92ZSIsIl9pZCIsInBhcmFtcyIsImlkIiwidXBkYXRlUG9zdGVyVVJMIiwidXBsb2FkUG9zdGVyIiwiZmlsZW5hbWUiLCJmaWxlcyIsImF2YXRhciIsInRtcFBhdGgiLCJwYXRoIiwidGFyZ2V0RGlyIiwiam9pbiIsIl9fZGlybmFtZSIsInRvU3RyaW5nIiwidGFyZ2V0UGF0aCIsInJlbmFtZSIsImRvd25sb2FkVVJMIiwiYWRkUGFydGljaXBhbnQiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsIiRwdXNoIiwicGFydGljaXBhbnRJZCIsInNhZmUiLCJ1cHNlcnQiLCJuZXciLCJlcnIiLCJtb2RlbCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQTs7a0JBRWU7QUFDYkEsTUFEYSxnQkFDUkMsR0FEUSxFQUNIQyxHQURHLEVBQ0U7QUFDYixvQkFBT0MsUUFBUCxDQUFnQixFQUFFQyxNQUFNSCxJQUFJSSxLQUFKLENBQVVELElBQWxCLEVBQWhCLEVBQTBDLGdDQUFjRixHQUFkLEVBQW1CLFVBQUNFLElBQUQsRUFBVTtBQUNyRSxzQkFDR0UsSUFESCxDQUNRLEVBRFIsRUFFR0Ms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QUFtQixVQUFDYSxRQUFELEVBQWM7QUFDN0NiLFVBQUlXLElBQUosQ0FBUztBQUNQaUIsMEJBQWtCN0IsSUFBSWdCLElBRGY7QUFFUEYsa0JBQVVBO0FBRkgsT0FBVDtBQUlELEtBTGEsQ0FBZDtBQU1ELEdBbkZZO0FBcUZicUIsY0FyRmEsd0JBcUZBbkMsR0FyRkEsRUFxRktDLEdBckZMLEVBcUZVO0FBQ3JCO0FBQ0E7QUFGcUIsUUFHZm1DLFFBSGUsR0FHRnBDLElBQUlxQyxLQUFKLENBQVVDLE1BQVYsQ0FBaUIsQ0FBakIsQ0FIRSxDQUdmRixRQUhlOztBQUlyQixRQUFJRyxVQUFVdkMsSUFBSXFDLEtBQUosQ0FBVUMsTUFBVixDQUFpQixDQUFqQixFQUFvQkUsSUFBbEM7QUFDQSxRQUFJQyxZQUFZLGVBQUtDLElBQUwsQ0FDZEMsU0FEYyxFQUNILGNBREcsRUFDYSxRQURiLEVBQ3VCM0MsSUFBSWMsUUFBSixDQUFhaUIsR0FBYixDQUFpQmEsUUFBakIsRUFEdkIsQ0FBaEI7QUFHQSxRQUFJQyxhQUFhLGVBQUtILElBQUwsQ0FBVUQsU0FBVixFQUFxQkwsUUFBckIsQ0FBakI7O0FBRUEsMEJBQU9LLFNBQVAsRUFBa0IsMkJBQVl4QyxHQUFaLEVBQWlCLFlBQU07QUFDdkMsbUJBQUc2QyxNQUFILENBQVVQLE9BQVYsRUFBbUJNLFVBQW5CLEVBQStCLDJCQUFZNUMsR0FBWixFQUFpQixZQUFNO0FBQ3BEQSxZQUFJVyxJQUFKLENBQVM7QUFDUG1DLG9DQUF3Qi9DLElBQUljLFFBQUosQ0FBYWlCLEdBQXJDLFNBQTRDSztBQURyQyxTQUFUO0FBR0QsT0FKOEIsQ0FBL0I7QUFLRCxLQU5pQixDQUFsQjtBQU9ELEdBdEdZO0FBd0diWSxnQkF4R2EsMEJBd0dFaEQsR0F4R0YsRUF3R09DLEdBeEdQLEVBd0dZO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBT2dELGlCQUFQLENBQ0VqRCxJQUFJZ0MsTUFBSixDQUFXQyxFQURiLEVBRUUsRUFBRWlCLE9BQU8sRUFBRSxnQkFBZ0JsRCxJQUFJZ0IsSUFBSixDQUFTbUMsYUFBM0IsRUFBVCxFQUZGLEVBR0UsRUFBRUMsTUFBTSxJQUFSLEVBQWNDLFFBQVEsSUFBdEIsRUFBNEJDLEtBQUssSUFBakMsRUFIRixFQUlFLFVBQVNDLEdBQVQsRUFBY0MsS0FBZCxFQUFxQjtBQUNuQkMsY0FBUUMsR0FBUixDQUFZSCxHQUFaO0FBQ0EsVUFBSUEsR0FBSixFQUFTO0FBQ1B0RCxZQUFJVyxJQUFKLENBQVMyQyxHQUFUO0FBQ0QsT0FGRCxNQUVPO0FBQ0x0RCxZQUFJVyxJQUFKLENBQVM0QyxLQUFUO0FBQ0Q7QUFDRixLQVhIO0FBYUQ7QUEzSFksQztBQU5mIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2V2ZW50LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
