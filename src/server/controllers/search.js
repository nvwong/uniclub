import assign from 'object-assign';
import { handleDbError } from '../decorators/handleError';
import filterAttribute from '../utils/filterAttribute';
import Events from '../models/Event';

export default{
  list(req, res) {
    console.log(req.query);
    var result = [];
    if (req.query.value == '') {
      res.json(result);
    } else if (req.query.field == 'name') {
      Events
        .find({ name: new RegExp(req.query.value, 'i') })
        .sort({ date: 'asc' })
        .limit(10)
        .exec(handleDbError(res)((data) => {
          if (data.length == 0) {
            result = [
              {
                title: '',
                results: [
                  {
                    name: '',
                  },
                ],
              },
            ];
            res.json(result);
          } else {
            let datum;
            let temp = '';
            let j = 0;
            for (var i = 0; i < data.length; i++) {
              if (temp.indexOf(data[0]['organiser']) == -1) {
                temp += ',' + data[i]['organiser'];
                result[j++] = {
                  title: data[i]['organiser'],
                  results: [],
                };
              }
            }
            for (--j; j >= 0; j--) {
              for (var i = 0; i < data.length; i++) {
                if (result[j]['title'] == data[i]['organiser']) {
                  result[j]['results'].push({
                    name: data[i]['name'],
                  });
                }
              }
            }
            res.json(result);
          }
        }));
    } else if (req.query.field == 'tag') {
      Events
        .distinct({ tag: new RegExp(req.query.value, 'i') })
        .select('tag')
        .sort({ date: 'asc' })
        .limit(10)
        .exec(handleDbError(res)((data) => {
          if (data.length == 0) {
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
            res.json(result);
          }
        }));
    }
  },
};

// {
//     "_id" : ObjectId("59b8df56f36d284a7e7c5f40"),
//     "name" : "event1",
//     "date" : "2017-08-22T05:40:38.653Z",
//     "location" : "HKU",
//     "description" : "hello world!",
//     "tag" : {
//         "name" : "testTag"
//     },
//     "organiser" : "nv",
//     "catagory" : {
//         "name" : "camp",
//         "subcatagory" : {
//             "name" : "subcab"
//         }
//     },
//     "price" : NumberDecimal("20.0"),
//     "quota" : NumberInt(50),
//     "state" : "Open",
//     "participants" : [
//         {
//             "_id" : ObjectId("59b8df56f36d284a7e7c5f40")
//         }
//     ],
//     "posterURL" : "/img/default-avatar.png"
// }
