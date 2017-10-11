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
      date: req.body.date,
      location: req.body.location,
      description: req.body.location,
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

    var modifiedEvent = (0, _filterAttribute2.default)(req.body, ['date', 'location', 'description', 'tag', 'category', 'price', 'quota', 'state']);

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
      if (err) {
        res.json(err);
      } else {
        res.json(model);
      }
    });
  }
};
// import configs from '../../../configs/project/server';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2V2ZW50LmpzIl0sIm5hbWVzIjpbImxpc3QiLCJyZXEiLCJyZXMiLCJwYWdpbmF0ZSIsInBhZ2UiLCJxdWVyeSIsImZpbmQiLCJzb3J0IiwiZGF0ZSIsImxpbWl0Iiwic2tpcCIsImV4ZWMiLCJldmVudHMiLCJqc29uIiwiY3JlYXRlIiwib25lRXZlbnQiLCJib2R5IiwibG9jYXRpb24iLCJkZXNjcmlwdGlvbiIsInRhZyIsIm9yZ2FuaXNlciIsImNhdGVnb3J5IiwicHJpY2UiLCJxdW90YSIsInN0YXRlIiwic2F2ZSIsInJlYWRFdmVudCIsInVwZGF0ZSIsIm1vZGlmaWVkRXZlbnQiLCJvcmlnaW5BdHRyaWJ1dGVzIiwicmVtb3ZlIiwiX2lkIiwicGFyYW1zIiwiaWQiLCJ1cGRhdGVQb3N0ZXJVUkwiLCJ1cGxvYWRQb3N0ZXIiLCJmaWxlbmFtZSIsImZpbGVzIiwiYXZhdGFyIiwidG1wUGF0aCIsInBhdGgiLCJ0YXJnZXREaXIiLCJqb2luIiwiX19kaXJuYW1lIiwidG9TdHJpbmciLCJ0YXJnZXRQYXRoIiwicmVuYW1lIiwiZG93bmxvYWRVUkwiLCJhZGRQYXJ0aWNpcGFudCIsImZpbmRCeUlkQW5kVXBkYXRlIiwiJHB1c2giLCJwYXJ0aWNpcGFudElkIiwic2FmZSIsInVwc2VydCIsIm5ldyIsImVyciIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBQ0E7O2tCQUVlO0FBQ2JBLE1BRGEsZ0JBQ1JDLEdBRFEsRUFDSEMsR0FERyxFQUNFO0FBQ2Isb0JBQU9DLFFBQVAsQ0FBZ0IsRUFBRUMsTUFBTUgsSUFBSUksS0FBSixDQUFVRCxJQUFsQixFQUFoQixFQUEwQyxnQ0FBY0YsR0FBZCxFQUFtQixVQUFDRSxJQUFELEVBQVU7QUFDckUsc0JBQ0dFLElBREgsQ0FDUSxFQURSLEVBRUdDLElBRkgsQ0FFUSxFQUFFQyxNQUFNLEtB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QUFGSCxPQUFUO0FBSUQsS0FMYSxDQUFkO0FBTUQsR0FqRlk7QUFtRmJvQixjQW5GYSx3QkFtRkFsQyxHQW5GQSxFQW1GS0MsR0FuRkwsRUFtRlU7QUFDckI7QUFDQTtBQUZxQixRQUdma0MsUUFIZSxHQUdGbkMsSUFBSW9DLEtBQUosQ0FBVUMsTUFBVixDQUFpQixDQUFqQixDQUhFLENBR2ZGLFFBSGU7O0FBSXJCLFFBQUlHLFVBQVV0QyxJQUFJb0MsS0FBSixDQUFVQyxNQUFWLENBQWlCLENBQWpCLEVBQW9CRSxJQUFsQztBQUNBLFFBQUlDLFlBQVksZUFBS0MsSUFBTCxDQUNkQyxTQURjLEVBQ0gsY0FERyxFQUNhLFFBRGIsRUFDdUIxQyxJQUFJYyxRQUFKLENBQWFnQixHQUFiLENBQWlCYSxRQUFqQixFQUR2QixDQUFoQjtBQUdBLFFBQUlDLGFBQWEsZUFBS0gsSUFBTCxDQUFVRCxTQUFWLEVBQXFCTCxRQUFyQixDQUFqQjs7QUFFQSwwQkFBT0ssU0FBUCxFQUFrQiwyQkFBWXZDLEdBQVosRUFBaUIsWUFBTTtBQUN2QyxtQkFBRzRDLE1BQUgsQ0FBVVAsT0FBVixFQUFtQk0sVUFBbkIsRUFBK0IsMkJBQVkzQyxHQUFaLEVBQWlCLFlBQU07QUFDcERBLFlBQUlXLElBQUosQ0FBUztBQUNQa0Msb0NBQXdCOUMsSUFBSWMsUUFBSixDQUFhZ0IsR0FBckMsU0FBNENLO0FBRHJDLFNBQVQ7QUFHRCxPQUo4QixDQUEvQjtBQUtELEtBTmlCLENBQWxCO0FBT0QsR0FwR1k7QUFzR2JZLGdCQXRHYSwwQkFzR0UvQyxHQXRHRixFQXNHT0MsR0F0R1AsRUFzR1k7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFPK0MsaUJBQVAsQ0FDRWhELElBQUkrQixNQUFKLENBQVdDLEVBRGIsRUFFRSxFQUFFaUIsT0FBTyxFQUFFLGdCQUFnQmpELElBQUllLElBQUosQ0FBU21DLGFBQTNCLEVBQVQsRUFGRixFQUdFLEVBQUVDLE1BQU0sSUFBUixFQUFjQyxRQUFRLElBQXRCLEVBQTRCQyxLQUFLLElBQWpDLEVBSEYsRUFJRSxVQUFTQyxHQUFULEVBQWNDLEtBQWQsRUFBcUI7QUFDbkIsVUFBSUQsR0FBSixFQUFTO0FBQ1ByRCxZQUFJVyxJQUFKLENBQVMwQyxHQUFUO0FBQ0QsT0FGRCxNQUVPO0FBQ0xyRCxZQUFJVyxJQUFKLENBQVMyQyxLQUFUO0FBQ0Q7QUFDRixLQVZIO0FBWUQ7QUF4SFksQztBQU5mIiwiZmlsZSI6ImNvbnRyb2xsZXJzL2V2ZW50LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
