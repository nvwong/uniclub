import assign from 'object-assign';
import { handleDbError } from '../decorators/handleError';
import filterAttribute from '../utils/filterAttribute';
import Events from '../models/Event';

export default{
  // list(req, res) {
  //   Events.find({})
  //   .then((json) => {
  //     res.json(json);
  //     console.log(json);
  //   });
  // },
  list(req, res) {
    console.log(req.query);
    var result = [];
    if (req.query.value === '') {
      res.json({
        _id: 0,
        names: result,
      });
    } else if (req.query.field === 'name') {
      Events
        .find({ name: new RegExp(req.query.value, 'i') })
        .sort({ date: 'asc' })
        .limit(10)
        .exec(handleDbError(res)((data) => {
          if (data.length === 0) {
            res.json({
              _id: 0,
              names: result,
            });
          } else {
            let datum;
            let temp = '';
            let j = 0;
            for (var i = 0; i < data.length; i++) {
              if (temp.indexOf(data[0]['organiser']) === -1) {
                temp += ',' + data[i]['organiser'];
                result[j++] = {
                  title: data[i]['organiser'],
                  results: [],
                };
              }
            }
            for (--j; j >= 0; j--) {
              for (var k = 0; i < data.length; i++) {
                if (result[j]['title'] === data[k]['organiser']) {
                  result[j]['results'].push({
                    name: data[k]['name'],
                  });
                }
              }
            }
            res.json({
              _id: 0,
              names: result,
            });
          }
        }));
    } else if (req.query.field === 'tag') {
      Events
        .distinct({ tag: new RegExp(req.query.value, 'i') })
        .select('tag')
        .sort({ date: 'asc' })
        .limit(10)
        .exec(handleDbError(res)((data) => {
          if (data.length === 0) {
            result = [{
              title: '',
              results: [
                {
                  tag: '',
                },
              ],
            }];
            res.json(result);
          } else {
            result = [
              {
                title: '',
                results: [],
              },
            ];
            for (var i; i < data.length; i++) {
              result[0]['results'].push(data[i]['tag']);
            }
            res.json([{
              _id: 1,
              searchs: result,
            }]);
          }
        }));
    }
  },
  search(req, res) {
    Events
      .find({ name: req.value })
      .limit(10)
      .exec(handleDbError(res)(data => {
        res.json(data);
      }))
    ;
  },
};
