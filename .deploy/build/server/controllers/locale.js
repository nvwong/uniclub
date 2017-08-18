'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Errors = require('../../common/constants/Errors');

var _Errors2 = _interopRequireDefault(_Errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  show: function show(req, res) {
    try {
      // escape file path for security
      var locale = req.params.locale.replace(/\./g, '').replace(/\//g, '').toLowerCase();
      var messages = require('../../common/i18n/' + locale).default;

      res.json({
        locale: locale,
        messages: messages
      });
    } catch (e) {
      res.errors([_Errors2.default.LOCALE_NOT_SUPPORTED]);
    }
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2xvY2FsZS5qcyJdLCJuYW1lcyI6WyJzaG93IiwicmVxIiwicmVzIiwibG9jYWxlIiwicGFyYW1zIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwibWVzc2FnZXMiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImpzb24iLCJlIiwiZXJyb3JzIiwiTE9DQUxFX05PVF9TVVBQT1JURUQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7a0JBRWU7QUFDYkEsTUFEYSxnQkFDUkMsR0FEUSxFQUNIQyxHQURHLEVBQ0U7QUFDYixRQUFJO0FBQ0Y7QUFDQSxVQUFNQyxTQUFTRixJQUFJRyxNQUFKLENBQVdELE1BQVgsQ0FDWkUsT0FEWSxDQUNKLEtBREksRUFDRyxFQURILEVBRVpBLE9BRlksQ0FFSixLQUZJLEVBRUcsRUFGSCxFQUdaQyxXQUhZLEVBQWY7QUFJQSxVQUFNQyxXQUFXQywrQkFBNkJMLE1BQTdCLEVBQXVDTSxPQUF4RDs7QUFFQVAsVUFBSVEsSUFBSixDQUFTO0FBQ1BQLHNCQURPO0FBRVBJO0FBRk8sT0FBVDtBQUlELEtBWkQsQ0FZRSxPQUFPSSxDQUFQLEVBQVU7QUFDVlQsVUFBSVUsTUFBSixDQUFXLENBQUMsaUJBQU9DLG9CQUFSLENBQVg7QUFDRDtBQUNGO0FBakJZLEMiLCJmaWxlIjoiY29udHJvbGxlcnMvbG9jYWxlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
