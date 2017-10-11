'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _handleError = require('../decorators/handleError');

var _filterAttribute = require('../utils/filterAttribute');

var _filterAttribute2 = _interopRequireDefault(_filterAttribute);

var _Event = require('../models/Event');

var _Event2 = _interopRequireDefault(_Event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  // list(req, res) {
  //   Events.find({})
  //   .then((json) => {
  //     res.json(json);
  //     console.log(json);
  //   });
  // },
  list: function list(req, res) {
    console.log(req.query);
    var result = [];
    if (req.query.value === '') {
      res.json({
        _id: 0,
        names: result
      });
    } else if (req.query.field === 'name') {
      _Event2.default.find({ name: new RegExp(req.query.value, 'i') }).sort({ date: 'asc' }).limit(10).exec((0, _handleError.handleDbError)(res)(function (data) {
        if (data.length === 0) {
          res.json({
            _id: 0,
            names: result
          });
        } else {
          var temp = '';
          var j = 0;
          for (var i = 0; i < data.length; i++) {
            if (temp.indexOf(data[0]['organiser']) === -1) {
              temp += ',' + data[i]['organiser'];
              result[j++] = {
                title: data[i]['organiser'],
                results: []
              };
            }
          }
          for (--j; j >= 0; j--) {
            for (i = 0; i < data.length; i++) {
              if (result[j]['title'] === data[i]['organiser']) {
                result[j]['results'].push({
                  name: data[i]['name']
                });
              }
            }
          }
          res.json({
            _id: 0,
            names: result
          });
        }
      }));
    } else if (req.query.field === 'tag') {
      _Event2.default.distinct({ tag: new RegExp(req.query.value, 'i') }).select('tag').sort({ date: 'asc' }).limit(10).exec((0, _handleError.handleDbError)(res)(function (data) {
        if (data.length === 0) {
          result = [{
            title: '',
            results: [{
              tag: ''
            }]
          }];
          res.json(result);
        } else {
          result = [{
            title: '',
            results: []
          }];
          for (var i; i < data.length; i++) {
            result[0]['results'].push(data[i]['tag']);
          }
          res.json([{
            _id: 1,
            searchs: result
          }]);
        }
      }));
    }
  },
  search: function search(req, res) {
    _Event2.default.find({ name: req.value }).limit(10).exec((0, _handleError.handleDbError)(res)(function (data) {
      res.json(data);
    }));
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3NlYXJjaC5qcyJdLCJuYW1lcyI6WyJsaXN0IiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwicmVzdWx0IiwidmFsdWUiLCJqc29uIiwiX2lkIiwibmFtZXMiLCJmaWVsZCIsImZpbmQiLCJuYW1lIiwiUmVnRXhwIiwic29ydCIsImRhdGUiLCJsaW1pdCIsImV4ZWMiLCJkYXRhIiwibGVuZ3RoIiwidGVtcCIsImoiLCJpIiwiaW5kZXhPZiIsInRpdGxlIiwicmVzdWx0cyIsInB1c2giLCJkaXN0aW5jdCIsInRhZyIsInNlbGVjdCIsInNlYXJjaHMiLCJzZWFyY2giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVjO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsTUFSWSxnQkFRUEMsR0FSTyxFQVFGQyxHQVJFLEVBUUc7QUFDYkMsWUFBUUMsR0FBUixDQUFZSCxJQUFJSSxLQUFoQjtBQUNBLFFBQUlDLFNBQVMsRUFBYjtBQUNBLFFBQUlMLElBQUlJLEtBQUosQ0FBVUUsS0FBVixLQUFvQixFQUF4QixFQUE0QjtBQUMxQkwsVUFBSU0sSUFBSixDQUFTO0FBQ1BDLGFBQUssQ0FERTtBQUVQQyxlQUFPSjtBQUZBLE9BQVQ7QUFJRCxLQUxELE1BS08sSUFBSUwsSUFBSUksS0FBSixDQUFVTSxLQUFWLEtBQW9CLE1BQXhCLEVBQWdDO0FBQ3JDLHNCQUNHQyxJQURILENBQ1EsRUFBRUMsTUFBTSxJQUFJQyxNQUFKLENBQVdiLElBQUlJLEtBQUosQ0FBVUUsS0FBckIsRUFBNEIsR0FBNUIsQ0FBUixFQURSLEVBRUdRLElBRkgsQ0FFUSxFQUFFQyxNQUFNLEtBQVIsRUFGUixFQUdHQyxLQUhILENBR1MsRUFIVCxFQUlHQyxJQUpILENBSVEsZ0NBQWNoQixHQUFkLEVBQW1CLFVBQUNpQixJQUFELEVBQVU7QUFDakMsWUFBSUEsS0FBS0MsTUFBTCxL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
