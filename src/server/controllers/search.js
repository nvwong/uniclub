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
      res.json(result);
    } else if (req.query.field === 'name') {
      Events
        .find({ name: new RegExp(req.query.value, 'i') })
        .sort({ date: 'asc' })
        .limit(10)
        .exec(handleDbError(res)((data) => {
          if (data.length === 0) {
            res.json(result);
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
              for (var i = 0; i < data.length; i++) {
                if (result[j]['title'] === data[i]['organiser']) {
                  result[j]['results'].push({
                    name: data[i]['name'],
                  });
                }
              }
            }
            res.json(result);
          }
        }));
    } else if (req.query.field === 'tag') {
      Events
        .find({ tag: new RegExp(req.query.value, 'i') })
        .distinct('tag')
        // .select('tag')
        // .sort({ date: 'asc' })
        // .limit(10)
        .exec(handleDbError(res)((data) => {
          if (data.length === 0) {
            result = [{
              title: '',
              results: [],
            }];
            res.json(result);
          } else {
            result = [
              {
                title: '',
                results: [{
                  name: '',
                }],
              },
            ];
            for (var i = 0; i < data.length; i++) {
              result[0]['results'].push({
                name: data[i],
              });
            }
            console.log(result.results);
            res.json(result);
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
