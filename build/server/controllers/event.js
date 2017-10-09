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
  }
};
// import configs from '../../../configs/project/server';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2V2ZW50LmpzIl0sIm5hbWVzIjpbImxpc3QiLCJyZXEiLCJyZXMiLCJwYWdpbmF0ZSIsInBhZ2UiLCJxdWVyeSIsImZpbmQiLCJzb3J0IiwiZGF0ZSIsImxpbWl0Iiwic2tpcCIsImV4ZWMiLCJldmVudHMiLCJqc29uIiwiY3JlYXRlIiwib25lRXZlbnQiLCJib2R5IiwibG9jYXRpb24iLCJkZXNjcmlwdGlvbiIsInRhZyIsIm9yZ2FuaXNlciIsImNhdGVnb3J5IiwicHJpY2UiLCJxdW90YSIsInN0YXRlIiwic2F2ZSIsInJlYWRFdmVudCIsInVwZGF0ZSIsIm1vZGlmaWVkRXZlbnQiLCJvcmlnaW5BdHRyaWJ1dGVzIiwicmVtb3ZlIiwiX2lkIiwicGFyYW1zIiwiaWQiLCJ1cGRhdGVQb3N0ZXJVUkwiLCJ1cGxvYWRQb3N0ZXIiLCJmaWxlbmFtZSIsImZpbGVzIiwiYXZhdGFyIiwidG1wUGF0aCIsInBhdGgiLCJ0YXJnZXREaXIiLCJqb2luIiwiX19kaXJuYW1lIiwidG9TdHJpbmciLCJ0YXJnZXRQYXRoIiwicmVuYW1lIiwiZG93bmxvYWRVUkwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQTs7a0JBRWU7QUFDYkEsTUFEYSxnQkFDUkMsR0FEUSxFQUNIQyxHQURHLEVBQ0U7QUFDYixvQkFBT0MsUUFBUCxDQUFnQixFQUFFQyxNQUFNSCxJQUFJSSxLQUFKLENBQVVELElBQWxCLEVBQWhCLEVBQTBDLGdDQUFjRixHQUFkLEVBQW1CLFVBQUNFLElBQUQsRUFBVTtBQUNyRSxzQkFDR0UsSUFESCxDQUNRLEVBRFIsRUFFR0MsSUFGSCxDQUVRLEVBQUVDLE1BQU0sS0FBUixFQUZSLEVBR0dDLEtBSEgsQ0FHU0wsS0FBS0ssS0FIZCxFQUlHQyxJQUpILENBSVFOLEtBQUtNLElBSmIsRUFLR0MsSUFMSCxDQUtRLGdDQUFjVCxHQUFkLEVBQW1C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RnFCLFFBR2ZrQyxRQUhlLEdBR0ZuQyxJQUFJb0MsS0FBSixDQUFVQyxNQUFWLENBQWlCLENBQWpCLENBSEUsQ0FHZkYsUUFIZTs7QUFJckIsUUFBSUcsVUFBVXRDLElBQUlvQyxLQUFKLENBQVVDLE1BQVYsQ0FBaUIsQ0FBakIsRUFBb0JFLElBQWxDO0FBQ0EsUUFBSUMsWUFBWSxlQUFLQyxJQUFMLENBQ2RDLFNBRGMsRUFDSCxjQURHLEVBQ2EsUUFEYixFQUN1QjFDLElBQUljLFFBQUosQ0FBYWdCLEdBQWIsQ0FBaUJhLFFBQWpCLEVBRHZCLENBQWhCO0FBR0EsUUFBSUMsYUFBYSxlQUFLSCxJQUFMLENBQVVELFNBQVYsRUFBcUJMLFFBQXJCLENBQWpCOztBQUVBLDBCQUFPSyxTQUFQLEVBQWtCLDJCQUFZdkMsR0FBWixFQUFpQixZQUFNO0FBQ3ZDLG1CQUFHNEMsTUFBSCxDQUFVUCxPQUFWLEVBQW1CTSxVQUFuQixFQUErQiwyQkFBWTNDLEdBQVosRUFBaUIsWUFBTTtBQUNwREEsWUFBSVcsSUFBSixDQUFTO0FBQ1BrQyxvQ0FBd0I5QyxJQUFJYyxRQUFKLENBQWFnQixHQUFyQyxTQUE0Q0s7QUFEckMsU0FBVDtBQUdELE9BSjhCLENBQS9CO0FBS0QsS0FOaUIsQ0FBbEI7QUFPRDtBQXBHWSxDO0FBTmYiLCJmaWxlIjoiY29udHJvbGxlcnMvZXZlbnQuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
