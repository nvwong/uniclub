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
          var datum = void 0;
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
            for (var k = 0; i < data.length; i++) {
              if (result[j]['title'] === data[k]['organiser']) {
                result[j]['results'].push({
                  name: data[k]['name']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3NlYXJjaC5qcyJdLCJuYW1lcyI6WyJsaXN0IiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwicmVzdWx0IiwidmFsdWUiLCJqc29uIiwiX2lkIiwibmFtZXMiLCJmaWVsZCIsImZpbmQiLCJuYW1lIiwiUmVnRXhwIiwic29ydCIsImRhdGUiLCJsaW1pdCIsImV4ZWMiLCJkYXRhIiwibGVuZ3RoIiwiZGF0dW0iLCJ0ZW1wIiwiaiIsImkiLCJpbmRleE9mIiwidGl0bGUiLCJyZXN1bHRzIiwiayIsInB1c2giLCJkaXN0aW5jdCIsInRhZyIsInNlbGVjdCIsInNlYXJjaHMiLCJzZWFyY2giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVjO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsTUFSWSxnQkFRUEMsR0FSTyxFQVFGQyxHQVJFLEVBUUc7QUFDYkMsWUFBUUMsR0FBUixDQUFZSCxJQUFJSSxLQUFoQjtBQUNBLFFBQUlDLFNBQVMsRUFBYjtBQUNBLFFBQUlMLElBQUlJLEtBQUosQ0FBVUUsS0FBVixLQUFvQixFQUF4QixFQUE0QjtBQUMxQkwsVUFBSU0sSUFBSixDQUFTO0FBQ1BDLGFBQUssQ0FERTtBQUVQQyxlQUFPSjtBQUZBLE9BQVQ7QUFJRCxLQUxELE1BS08sSUFBSUwsSUFBSUksS0FBSixDQUFVTSxLQUFWLEtBQW9CLE1BQXhCLEVBQWdDO0FBQ3JDLHNCQUNHQyxJQURILENBQ1EsRUFBRUMsTUFBTSxJQUFJQyxNQUFKLENBQVdiLElBQUlJLEtBQUosQ0FBVUUsS0FBckIsRUFBNEIsR0FBNUIsQ0FBUixFQURSLEVBRUdRLElBRkgsQ0FFUSxFQUFFQyxNQUFNLEtBQVIsRUFGUixFQUdHQyxLQUhILENBR1MsRUFIVCxFQUlHQyxJQUpILENBSVEsZ0NBQWNoQixHQUFkLEVBQW1CLFVBQUNpQixJQUFELEVBQVU7QUFDakMsWUFBSUEs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
