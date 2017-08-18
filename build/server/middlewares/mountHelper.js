'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _errorActions = require('../../common/actions/errorActions');

exports.default = function (req, res, next) {
  res.pushError = function (error, meta) {
    req.store.dispatch((0, _errorActions.pushErrors)([_extends({}, error, {
      meta: _extends({
        path: req.path
      }, meta)
    })]));
  };
  res.errors = function (errors) {
    req.store.dispatch((0, _errorActions.pushErrors)(errors));
    res.json({
      errors: req.store.getState().errors.map(function (error) {
        delete error.id;
        return _extends({}, error, {
          meta: _extends({
            path: req.path
          }, error.meta)
        });
      })
    });
  };

  next();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmVzL21vdW50SGVscGVyLmpzIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm5leHQiLCJwdXNoRXJyb3IiLCJlcnJvciIsIm1ldGEiLCJzdG9yZSIsImRpc3BhdGNoIiwicGF0aCIsImVycm9ycyIsImpzb24iLCJnZXRTdGF0ZSIsIm1hcCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztrQkFFZSxVQUFDQSxHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxFQUFvQjtBQUNqQ0QsTUFBSUUsU0FBSixHQUFnQixVQUFDQyxLQUFELEVBQVFDLElBQVIsRUFBaUI7QUFDL0JMLFFBQUlNLEtBQUosQ0FBVUMsUUFBVixDQUFtQiw4QkFBVyxjQUN6QkgsS0FEeUI7QUFFNUJDO0FBQ0VHLGNBQU1SLElBQUlRO0FBRFosU0FFS0gsSUFGTDtBQUY0QixPQUFYLENBQW5CO0FBT0QsR0FSRDtBQVNBSixNQUFJUSxNQUFKLEdBQWEsVUFBQ0EsTUFBRCxFQUFZO0FBQ3ZCVCxRQUFJTSxLQUFKLENBQVVDLFFBQVYsQ0FBbUIsOEJBQVdFLE1BQVgsQ0FBbkI7QUFDQVIsUUFBSVMsSUFBSixDQUFTO0FBQ1BELGNBQVFULElBQUlNLEtBQUosQ0FBVUssUUFBVixHQUFxQkYsTUFBckIsQ0FBNEJHLEdBQTVCLENBQWdDLFVBQUNSLEtBQUQsRUFBVztBQUNqRCxlQUFPQSxNQUFNUyxFQUFiO0FBQ0EsNEJBQ0tULEtBREw7QUFFRUM7QUFDRUcsa0JBQU1SLElBQUlRO0FBRFosYUFFS0osTUFBTUMsSUFGWDtBQUZGO0FBT0QsT0FUTztBQURELEtBQVQ7QUFZRCxHQWREOztBQWdCQUg7QUFDRCxDIiwiZmlsZSI6Im1pZGRsZXdhcmVzL21vdW50SGVscGVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=
