'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _handleError = require('../decorators/handleError');

var _filterAttribute = require('../utils/filterAttribute');

var _filterAttribute2 = _interopRequireDefault(_filterAttribute);

var _Todo = require('../models/Todo2');

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
      }).then(function (todo2) {
        res.json({
          todo2: todo2,
          page: page
        });
      });
    }));
  },
  create: function create(req, res) {
    var todo2 = (0, _Todo2.default)({
      text: req.body.text
    });

    todo2.save((0, _handleError.handleDbError)(res)(function (todo2) {
      res.json({
        todo2: todo2
      });
    }));
  },
  update: function update(req, res) {
    var modifiedTodo2 = (0, _filterAttribute2.default)(req.body, ['text']);

    _Todo2.default.findById(req.params.id, (0, _handleError.handleDbError)(res)(function (todo2) {
      todo2 = (0, _objectAssign2.default)(todo2, modifiedTodo2);
      todo2.save((0, _handleError.handleDbError)(res)(function () {
        res.json({
          originAttributes: req.body,
          updatedAttributes: todo2
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3RvZG8yLmpzIl0sIm5hbWVzIjpbImxpc3QiLCJyZXEiLCJyZXMiLCJwYWdpbmF0ZSIsInBhZ2UiLCJxdWVyeSIsInBlclBhZ2UiLCJmaW5kIiwibGltaXQiLCJza2lwIiwic29ydCIsImNyZWF0ZWRBdCIsInRoZW4iLCJ0b2RvMiIsImpzb24iLCJjcmVhdGUiLCJ0ZXh0IiwiYm9keSIsInNhdmUiLCJ1cGRhdGUiLCJtb2RpZmllZFRvZG8yIiwiZmluZEJ5SWQiLCJwYXJhbXMiLCJpZCIsIm9yaWdpbkF0dHJpYnV0ZXMiLCJ1cGRhdGVkQXR0cmlidXRlcyIsInJlbW92ZSIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWU7QUFDYkEsTUFEYSxnQkFDUkMsR0FEUSxFQUNIQyxHQURHLEVBQ0U7QUFDYixtQkFBTUMsUUFBTixDQUFlO0FBQ2JDLFlBQU1ILElBQUlJLEtBQUosQ0FBVUQsSUFESDtBQUViRSxlQUFTO0FBRkksS0FBZixFQUdHLGdDQUFjSixHQUFkLEVBQW1CLFVBQUNFLElBQUQsRUFBVTtBQUM5QixxQkFDR0csSUFESCxDQUNRLEVBRFIsRUFDWSxJQURaLEVBQ2tCO0FBQ2RDLGVBQU9KLEtBQUtJLEtBREU7QUFFZEMsY0FBTUwsS0FBS0ssSUFBTCxHQUFZLENBQVosR0FBZ0IsQ0FBaEIsR0FBb0JMLEtBQUtLLElBRmpCO0FBR2RDLGNBQU0sRUFBRUMsV0FBVyxNQUFiO0FBSFEsT0FEbEIsRUFNR0MsSUFOSCxDQU1RLFVBQUNDLEtBQUQsRUFBVztBQUNmWCxZQUFJWSxJQUFKLENBQVM7QUFDUEQsaUJBQU9BLEtBREE7QUFFUFQsZ0JBQU1BO0FBRkMsU0FBVDtBQUlELE9BWEg7QUFZRCxLQWJFLENBSEg7QUFpQkQsR0FuQlk7QUFxQmJXLFFBckJhLGtCQXFCTmQsR0FyQk0sRUFxQkRDLEdBckJDLEVBcUJJO0FBQ2YsUUFBTVcsUUFBUSxvQkFBTTtBQUNsQkcsWUFBTWYsSUFBSWdCLElBQUosQ0FBU0Q7QUFERyxLQUFOLENBQWQ7O0FBSUFILFVBQU1LLElBQU4sQ0FBVyxnQ0FBY2hCLEdBQWQsRUFBbUIsVUFBQ1csS0FBRCxFQUFXO0FBQ3ZDWCxVQUFJWSxJQUFKLENBQVM7QUFDUEQsZUFBT0E7QUFEQSxPQUFUO0FBR0QsS0FKVSxDQUFYO0FBS0QsR0EvQlk7QUFpQ2JNLFFBakNhLGtCQWlDTmxCLEdBakNNLEVBaUNEQyxHQWpDQyxFQWlDSTtBQUNmLFFBQUlrQixnQkFBZ0IsK0JBQWdCbkIsSUFBSWdCLElBQXBCLEVBQTBCLENBQzVDLE1BRDRDLENBQTFCLENBQXBCOztBQUlBLG1CQUFNSSxRQUFOLENBQWVwQixJQUFJcUIsTUFBSixDQUFXQyxFQUExQixFQUE4QixnQ0FBY3JCLEdBQWQsRUFBbUIsVUFBQ1csS0FBRCxFQUFXO0FBQzFEQSxjQUFRLDRCQUFPQSxLQUFQLEVBQWNPLGFBQWQsQ0FBUjtBQUNBUCxZQUFNSyxJQUFOLENBQVcsZ0NBQWNoQixHQUFkLEVBQW1CLFlBQU07QUFDbENBLFlBQUlZLElBQUosQ0FBUztBQUNQVSw0QkFBa0J2QixJQUFJZ0IsSUFEZjtBQUVQUSw2QkFBbUJaO0FBRlosU0FBVDtBQUlELE9BTFUsQ0FBWDtBQU1ELEtBUjZCLENBQTlCO0FBU0QsR0EvQ1k7QUFpRGJhLFFBakRhLGtCQWlETnpCLEdBakRNLEVBaUREQyxHQWpEQyxFQWlESTtBQUNmLG1CQUFNd0IsTUFBTixDQUFhLEVBQUNDLEtBQUsxQixJQUFJcUIsTUFBSixDQUFXQyxFQUFqQixFQUFiLEVBQW1DLGdDQUFjckIsR0FBZCxFQUFtQixZQUFNO0FBQzFEQSxVQUFJWSxJQUFKLENBQVMsRUFBVDtBQUNELEtBRmtDLENBQW5DO0FBR0Q7QUFyRFksQyIsImZpbGUiOiJjb250cm9sbGVycy90b2RvMi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
