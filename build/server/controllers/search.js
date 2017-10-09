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
  list: function list(req, res) {
    _Event2.default.paginate({ page: req.query.page }, (0, _handleError.handleDbError)(res)(function (page) {
      _Event2.default.find({ name: req.query.name }).sort({ date: 'asc' }).limit(page.limit).skip(page.skip).exec((0, _handleError.handleDbError)(res)(function (events) {
        res.json({
          events: events,
          page: page
        });
      }));
    }));
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3NlYXJjaC5qcyJdLCJuYW1lcyI6WyJsaXN0IiwicmVxIiwicmVzIiwicGFnaW5hdGUiLCJwYWdlIiwicXVlcnkiLCJmaW5kIiwibmFtZSIsInNvcnQiLCJkYXRlIiwibGltaXQiLCJza2lwIiwiZXhlYyIsImV2ZW50cyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVjO0FBQ1pBLE1BRFksZ0JBQ1BDLEdBRE8sRUFDRkMsR0FERSxFQUNHO0FBQ2Isb0JBQU9DLFFBQVAsQ0FBZ0IsRUFBRUMsTUFBTUgsSUFBSUksS0FBSixDQUFVRCxJQUFsQixFQUFoQixFQUEwQyxnQ0FBY0YsR0FBZCxFQUFtQixVQUFDRSxJQUFELEVBQVU7QUFDckUsc0JBQ0dFLElBREgsQ0FDUSxFQUFFQyxNQUFNTixJQUFJSSxLQUFKLENBQVVFLElBQWxCLEVBRFIsRUFFR0MsSUFGSCxDQUVRLEVBQUVDLE1BQU0sS0FBUixFQUZSLEVBR0dDLEtBSEgsQ0FHU04sS0FBS00sS0FIZCxFQUlHQyxJQUpILENBSVFQLEtBQUtPLElBSmIsRUFLR0MsSUFMSCxDQUtRLGdDQUFjVixHQUFkLEVBQW1CLFVBQUNXLE1BQUQsRUFBWTtBQUNuQ1gsWUFBSVksSUFBSixDQUFTO0FBQ1BELGtCQUFRQSxNQUREO0FBRVBULGdCQUFNQTtBQUZDLFNBQVQ7QUFJRCxPQUxLLENBTFI7QUFXRCxLQVp5QyxDQUExQztBQWFEO0FBZlcsQyIsImZpbGUiOiJjb250cm9sbGVycy9zZWFyY2guanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
