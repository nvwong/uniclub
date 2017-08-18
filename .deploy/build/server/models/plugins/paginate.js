"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 * refs:
 *   - plugin: <http://mongoosejs.com/docs/plugins.html>
 *   - pagination: <http://stackoverflow.com/questions/5539955/how-to-paginate-with-mongoose-in-node-js>
 *
 * example usage:
 *   ```
 *   import paginatePlugin from './plugins/paginate';
 *   YourSchema.plugin(paginatePlugin);
 *   ```
 *
 *   ```
 *   someListController(req, res) {
 *     YourSchema.paginate({page: req.query.page}, (err, page) => {
 *       YourSchema
 *         .find({})
 *         .limit(page.limit)
 *         .skip(page.skip)
 *         .exec((err, yourEntries) => {
 *           res.json({
 *             yourEntries: yourEntries,
 *             page: page,
 *           });
 *         });
 *     });
 *   }
 *   ```
 */

exports.default = function (schema, options) {
  schema.statics.paginate = function paginate(customOpts, cb) {
    var opts = {};
    opts.condition = customOpts.condition || {};
    opts.perPage = Number(customOpts.perPage) || 20;
    opts.firstPage = Number(customOpts.firstPage) || 1;
    opts.page = Number(customOpts.page) || 1;

    this.count(opts.condition).exec(function (err, count) {
      var totalPage = Math.max(Math.ceil(count / opts.perPage), 1);
      var lastPage = opts.firstPage + totalPage - 1;

      if (opts.page < opts.firstPage) {
        opts.page = opts.firstPage;
      } else if (lastPage < opts.page) {
        opts.page = lastPage;
      }

      cb(err, {
        skip: opts.perPage * (opts.page - opts.firstPage),
        limit: opts.perPage,
        first: opts.firstPage,
        current: opts.page,
        last: lastPage,
        total: totalPage
      });
    });
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9wbHVnaW5zL3BhZ2luYXRlLmpzIl0sIm5hbWVzIjpbInNjaGVtYSIsIm9wdGlvbnMiLCJzdGF0aWNzIiwicGFnaW5hdGUiLCJjdXN0b21PcHRzIiwiY2IiLCJvcHRzIiwiY29uZGl0aW9uIiwicGVyUGFnZSIsIk51bWJlciIsImZpcnN0UGFnZSIsInBhZ2UiLCJjb3VudCIsImV4ZWMiLCJlcnIiLCJ0b3RhbFBhZ2UiLCJNYXRoIiwibWF4IiwiY2VpbCIsImxhc3RQYWdlIiwic2tpcCIsImxpbWl0IiwiZmlyc3QiLCJjdXJyZW50IiwibGFzdCIsInRvdGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBNkJlLFVBQUNBLE1BQUQsRUFBU0MsT0FBVCxFQUFxQjtBQUNsQ0QsU0FBT0UsT0FBUCxDQUFlQyxRQUFmLEdBQTBCLFNBQVNBLFFBQVQsQ0FBa0JDLFVBQWxCLEVBQThCQyxFQUE5QixFQUFrQztBQUMxRCxRQUFJQyxPQUFPLEVBQVg7QUFDQUEsU0FBS0MsU0FBTCxHQUFpQkgsV0FBV0csU0FBWCxJQUFnQyxFQUFqRDtBQUNBRCxTQUFLRSxPQUFMLEdBQWVDLE9BQU9MLFdBQVdJLE9BQWxCLEtBQWtDLEVBQWpEO0FBQ0FGLFNBQUtJLFNBQUwsR0FBaUJELE9BQU9MLFdBQVdNLFNBQWxCLEtBQWdDLENBQWpEO0FBQ0FKLFNBQUtLLElBQUwsR0FBWUYsT0FBT0wsV0FBV08sSUFBbEIsS0FBcUMsQ0FBakQ7O0FBRUEsU0FDR0MsS0FESCxDQUNTTixLQUFLQyxTQURkLEVBRUdNLElBRkgsQ0FFUSxVQUFDQyxHQUFELEVBQU1GLEtBQU4sRUFBZ0I7QUFDcEIsVUFBSUcsWUFBWUMsS0FBS0MsR0FBTCxDQUFTRCxLQUFLRSxJQUFMLENBQVVOLFFBQVFOLEtBQUtFLE9BQXZCLENBQVQsRUFBMEMsQ0FBMUMsQ0FBaEI7QUFDQSxVQUFJVyxXQUFXYixLQUFLSSxTQUFMLEdBQWlCSyxTQUFqQixHQUE2QixDQUE1Qzs7QUFFQSxVQUFJVCxLQUFLSyxJQUFMLEdBQVlMLEtBQUtJLFNBQXJCLEVBQWdDO0FBQzlCSixhQUFLSyxJQUFMLEdBQVlMLEtBQUtJLFNBQWpCO0FBQ0QsT0FGRCxNQUVPLElBQUlTLFdBQVdiLEtBQUtLLElBQXBCLEVBQTBCO0FBQy9CTCxhQUFLSyxJQUFMLEdBQVlRLFFBQVo7QUFDRDs7QUFFRGQsU0FBR1MsR0FBSCxFQUFRO0FBQ05NLGNBQU1kLEtBQUtFLE9BQUwsSUFBZ0JGLEtBQUtLLElBQUwsR0FBWUwsS0FBS0ksU0FBakMsQ0FEQTtBQUVOVyxlQUFPZixLQUFLRSxPQUZOO0FBR05jLGVBQU9oQixLQUFLSSxTQUhOO0FBSU5hLGlCQUFTakIsS0FBS0ssSUFKUjtBQUtOYSxjQUFNTCxRQUxBO0FBTU5NLGVBQU9WO0FBTkQsT0FBUjtBQVFELEtBcEJIO0FBcUJELEdBNUJEO0FBNkJELEMiLCJmaWxlIjoibW9kZWxzL3BsdWdpbnMvcGFnaW5hdGUuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
