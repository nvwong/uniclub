'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _handleError = require('../decorators/handleError');

var _filterAttribute = require('../utils/filterAttribute');

var _filterAttribute2 = _interopRequireDefault(_filterAttribute);

var _Todo = require('../models/Todo');

var _Todo2 = _interopRequireDefault(_Todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  list: function list(req, res) {
    _Todo2.default.paginate({
      page: req.query.page,
      perPage: 5
    }, (0, _handleError.handleDbError)(res)(function (page) {
      _Todo2.default.find({}, null, {
        limit: page.limit,
        skip: page.skip < 0 ? 0 : page.skip,
        sort: { createdAt: 'desc' }
      }).then(function (todos) {
        res.json({
          todos: todos,
          page: page
        });
      });
    }));
  },
  create: function create(req, res) {
    var todo = (0, _Todo2.default)({
      text: req.body.text
    });

    todo.save((0, _handleError.handleDbError)(res)(function (todo) {
      res.json({
        todo: todo
      });
    }));
  },
  update: function update(req, res) {
    var modifiedTodo = (0, _filterAttribute2.default)(req.body, ['text']);

    _Todo2.default.findById(req.params.id, (0, _handleError.handleDbError)(res)(function (todo) {
      todo = (0, _objectAssign2.default)(todo, modifiedTodo);
      todo.save((0, _handleError.handleDbError)(res)(function () {
        res.json({
          originAttributes: req.body,
          updatedAttributes: todo
        });
      }));
    }));
  },
  remove: function remove(req, res) {
    _Todo2.default.remove({ _id: req.params.id }, (0, _handleError.handleDbError)(res)(function () {
      res.json({});
    }));
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3RvZG8uanMiXSwibmFtZXMiOlsibGlzdCIsInJlcSIsInJlcyIsInBhZ2luYXRlIiwicGFnZSIsInF1ZXJ5IiwicGVyUGFnZSIsImZpbmQiLCJsaW1pdCIsInNraXAiLCJzb3J0IiwiY3JlYXRlZEF0IiwidGhlbiIsInRvZG9zIiwianNvbiIsImNyZWF0ZSIsInRvZG8iLCJ0ZXh0IiwiYm9keSIsInNhdmUiLCJ1cGRhdGUiLCJtb2RpZmllZFRvZG8iLCJmaW5kQnlJZCIsInBhcmFtcyIsImlkIiwib3JpZ2luQXR0cmlidXRlcyIsInVwZGF0ZWRBdHRyaWJ1dGVzIiwicmVtb3ZlIiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUNiQSxNQURhLGdCQUNSQyxHQURRLEVBQ0hDLEdBREcsRUFDRTtBQUNiLG1CQUFLQyxRQUFMLENBQWM7QUFDWkMsWUFBTUgsSUFBSUksS0FBSixDQUFVRCxJQURKO0FBRVpFLGVBQVM7QUFGRyxLQUFkLEVBR0csZ0NBQWNKLEdBQWQsRUFBbUIsVUFBQ0UsSUFBRCxFQUFVO0FBQzlCLHFCQUNHRyxJQURILENBQ1EsRUFEUixFQUNZLElBRFosRUFDa0I7QUFDZEMsZUFBT0osS0FBS0ksS0FERTtBQUVkQyxjQUFNTCxLQUFLSyxJQUFMLEdBQVksQ0FBWixHQUFnQixDQUFoQixHQUFvQkwsS0FBS0ssSUFGakI7QUFHZEMsY0FBTSxFQUFFQyxXQUFXLE1BQWI7QUFIUSxPQURsQixFQU1HQyxJQU5ILENBTVEsVUFBQ0MsS0FBRCxFQUFXO0FBQ2ZYLFlBQUlZLElBQUosQ0FBUztBQUNQRCxpQkFBT0EsS0FEQTtBQUVQVCxnQkFBTUE7QUFGQyxTQUFUO0FBSUQsT0FYSDtBQVlELEtBYkUsQ0FISDtBQWlCRCxHQW5CWTtBQXFCYlcsUUFyQmEsa0JBcUJOZCxHQXJCTSxFQXFCREMsR0FyQkMsRUFxQkk7QUFDZixRQUFNYyxPQUFPLG9CQUFLO0FBQ2hCQyxZQUFNaEIsSUFBSWlCLElBQUosQ0FBU0Q7QUFEQyxLQUFMLENBQWI7O0FBSUFELFNBQUtHLElBQUwsQ0FBVSxnQ0FBY2pCLEdBQWQsRUFBbUIsVUFBQ2MsSUFBRCxFQUFVO0FBQ3JDZCxVQUFJWSxJQUFKLENBQVM7QUFDUEUsY0FBTUE7QUFEQyxPQUFUO0FBR0QsS0FKUyxDQUFWO0FBS0QsR0EvQlk7QUFpQ2JJLFFBakNhLGtCQWlDTm5CLEdBakNNLEVBaUNEQyxHQWpDQyxFQWlDSTtBQUNmLFFBQUltQixlQUFlLCtCQUFnQnBCLElBQUlpQixJQUFwQixFQUEwQixDQUMzQyxNQUQyQyxDQUExQixDQUFuQjs7QUFJQSxtQkFBS0ksUUFBTCxDQUFjckIsSUFBSXNCLE1BQUosQ0FBV0MsRUFBekIsRUFBNkIsZ0NBQWN0QixHQUFkLEVBQW1CLFVBQUNjLElBQUQsRUFBVTtBQUN4REEsYUFBTyw0QkFBT0EsSUFBUCxFQUFhSyxZQUFiLENBQVA7QUFDQUwsV0FBS0csSUFBTCxDQUFVLGdDQUFjakIsR0FBZCxFQUFtQixZQUFNO0FBQ2pDQSxZQUFJWSxJQUFKLENBQVM7QUFDUFcsNEJBQWtCeEIsSUFBSWlCLElBRGY7QUFFUFEsNkJBQW1CVjtBQUZaLFNBQVQ7QUFJRCxPQUxTLENBQVY7QUFNRCxLQVI0QixDQUE3QjtBQVNELEdBL0NZO0FBaURiVyxRQWpEYSxrQkFpRE4xQixHQWpETSxFQWlEREMsR0FqREMsRUFpREk7QUFDZixtQkFBS3lCLE1BQUwsQ0FBWSxFQUFDQyxLQUFLM0IsSUFBSXNCLE1BQUosQ0FBV0MsRUFBakIsRUFBWixFQUFrQyxnQ0FBY3RCLEdBQWQsRUFBbUIsWUFBTTtBQUN6REEsVUFBSVksSUFBSixDQUFTLEVBQVQ7QUFDRCxLQUZpQyxDQUFsQztBQUdEO0FBckRZLEMiLCJmaWxlIjoiY29udHJvbGxlcnMvdG9kby5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
