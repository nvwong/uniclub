'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// parse multipart/form-data

var initDestination = 'uploads';
var uploadToDisk = function uploadToDisk(_ref) {
  var _ref$destination = _ref.destination,
      _destination = _ref$destination === undefined ? initDestination : _ref$destination,
      _filename = _ref.filename;

  return (0, _multer2.default)({
    storage: _multer2.default.diskStorage({
      destination: function destination(req, file, cb) {
        if (req.user) {
          _destination = _destination.replace('{userId}', req.user._id);
        }
        var dir = _path2.default.join(__dirname, '../../public/' + _destination);
        (0, _mkdirp2.default)(dir, function (err) {
          return cb(err, dir);
        });
      },
      filename: function filename(req, file, cb) {
        cb(null, _filename || file.fieldname + '-' + Date.now());
      }
    })
  });
};

var uploadToMemory = (0, _multer2.default)({
  storage: _multer2.default.memoryStorage()
});

exports.default = {
  disk: uploadToDisk,
  memory: uploadToMemory
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmVzL2ZpbGVVcGxvYWQuanMiXSwibmFtZXMiOlsiaW5pdERlc3RpbmF0aW9uIiwidXBsb2FkVG9EaXNrIiwiZGVzdGluYXRpb24iLCJmaWxlbmFtZSIsInN0b3JhZ2UiLCJkaXNrU3RvcmFnZSIsInJlcSIsImZpbGUiLCJjYiIsInVzZXIiLCJyZXBsYWNlIiwiX2lkIiwiZGlyIiwiam9pbiIsIl9fZGlybmFtZSIsImVyciIsImZpZWxkbmFtZSIsIkRhdGUiLCJub3ciLCJ1cGxvYWRUb01lbW9yeSIsIm1lbW9yeVN0b3JhZ2UiLCJkaXNrIiwibWVtb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOztBQUVBLElBQU1BLGtCQUFrQixTQUF4QjtBQUNBLElBQUlDLGVBQWUsU0FBZkEsWUFBZTtBQUFBLDhCQUNqQkMsV0FEaUI7QUFBQSxNQUNqQkEsWUFEaUIsb0NBQ0hGLGVBREc7QUFBQSxNQUVqQkcsU0FGaUIsUUFFakJBLFFBRmlCOztBQUFBLFNBR2Isc0JBQU87QUFDWEMsYUFBUyxpQkFBT0MsV0FBUCxDQUFtQjtBQUMxQkgsbUJBQWEscUJBQUNJLEdBQUQsRUFBTUMsSUFBTixFQUFZQyxFQUFaLEVBQW1CO0FBQzlCLFlBQUlGLElBQUlHLElBQVIsRUFBYztBQUNaUCx5QkFBY0EsYUFBWVEsT0FBWixDQUFvQixVQUFwQixFQUFnQ0osSUFBSUcsSUFBSixDQUFTRSxHQUF6QyxDQUFkO0FBQ0Q7QUFDRCxZQUFJQyxNQUFNLGVBQUtDLElBQUwsQ0FBVUMsU0FBVixvQkFBcUNaLFlBQXJDLENBQVY7QUFDQSw4QkFBT1UsR0FBUCxFQUFZLFVBQUNHLEdBQUQ7QUFBQSxpQkFBU1AsR0FBR08sR0FBSCxFQUFRSCxHQUFSLENBQVQ7QUFBQSxTQUFaO0FBQ0QsT0FQeUI7QUFRMUJULGdCQUFVLGtCQUFDRyxHQUFELEVBQU1DLElBQU4sRUFBWUMsRUFBWixFQUFtQjtBQUMzQkEsV0FBRyxJQUFILEVBQVNMLGFBQVlJLEtBQUtTLFNBQUwsR0FBaUIsR0FBakIsR0FBdUJDLEtBQUtDLEdBQUwsRUFBNUM7QUFDRDtBQVZ5QixLQUFuQjtBQURFLEdBQVAsQ0FIYTtBQUFBLENBQW5COztBQWtCQSxJQUFJQyxpQkFBaUIsc0JBQU87QUFDMUJmLFdBQVMsaUJBQU9nQixhQUFQO0FBRGlCLENBQVAsQ0FBckI7O2tCQUllO0FBQ2JDLFFBQU1wQixZQURPO0FBRWJxQixVQUFRSDtBQUZLLEMiLCJmaWxlIjoibWlkZGxld2FyZXMvZmlsZVVwbG9hZC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
