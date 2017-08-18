'use strict';

// ref: <http://pm2.keymetrics.io/docs/usage/use-pm2-with-cloud-providers/>
var pm2 = require('pm2');

var instances = process.env.WEB_CONCURRENCY || -1; // Set by Heroku or -1 to scale to max cpu core -1
var maxMemory = process.env.WEB_MEMORY || 512; // " " "

pm2.connect(function () {
  pm2.start({
    script: './build/server/server.js',
    name: 'production-app', // ----> THESE ATTRIBUTES ARE OPTIONAL:
    exec_mode: 'cluster', // ----> https://github.com/Unitech/PM2/blob/master/ADVANCED_README.md#schema
    instances: instances,
    max_memory_restart: maxMemory + 'M', // Auto restart if process taking more than XXmo
    env: { // If needed declare some environment variables
      NODE_ENV: 'production',
      AWESOME_SERVICE_API_TOKEN: 'xxx'
    }
  }, function (err) {
    if (err) {
      return console.error('Error while launching applications', err.stack || err);
    }
    console.log('PM2 and application has been succesfully started');

    // Display logs in standard output
    pm2.launchBus(function (err, bus) {
      if (err) {
        throw err;
      }
      console.log('[PM2] Log streaming started');

      bus.on('log:out', function (packet) {
        console.log('[App:%s] %s', packet.process.name, packet.data);
      });

      bus.on('log:err', function (packet) {
        console.error('[App:%s][Err] %s', packet.process.name, packet.data);
      });
    });
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBtMkVudHJ5LmpzIl0sIm5hbWVzIjpbInBtMiIsInJlcXVpcmUiLCJpbnN0YW5jZXMiLCJwcm9jZXNzIiwiZW52IiwiV0VCX0NPTkNVUlJFTkNZIiwibWF4TWVtb3J5IiwiV0VCX01FTU9SWSIsImNvbm5lY3QiLCJzdGFydCIsInNjcmlwdCIsIm5hbWUiLCJleGVjX21vZGUiLCJtYXhfbWVtb3J5X3Jlc3RhcnQiLCJOT0RFX0VOViIsIkFXRVNPTUVfU0VSVklDRV9BUElfVE9LRU4iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFjayIsImxvZyIsImxhdW5jaEJ1cyIsImJ1cyIsIm9uIiwicGFja2V0IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQUlBLE1BQU1DLFFBQVEsS0FBUixDQUFWOztBQUVBLElBQUlDLFlBQVlDLFFBQVFDLEdBQVIsQ0FBWUMsZUFBWixJQUErQixDQUFDLENBQWhELEMsQ0FBbUQ7QUFDbkQsSUFBSUMsWUFBWUgsUUFBUUMsR0FBUixDQUFZRyxVQUFaLElBQTBCLEdBQTFDLEMsQ0FBa0Q7O0FBRWxEUCxJQUFJUSxPQUFKLENBQVksWUFBVztBQUNyQlIsTUFBSVMsS0FBSixDQUFVO0FBQ1JDLFlBQVEsMEJBREE7QUFFUkMsVUFBTSxnQkFGRSxFQUVvQjtBQUM1QkMsZUFBVyxTQUhILEVBR3lCO0FBQ2pDVixlQUFXQSxTQUpIO0FBS1JXLHdCQUFvQlAsWUFBWSxHQUx4QixFQUsrQjtBQUN2Q0YsU0FBSyxFQUE2QjtBQUNoQ1UsZ0JBQVUsWUFEUDtBQUVIQyxpQ0FBMkI7QUFGeEI7QUFORyxHQUFWLEVBVUcsVUFBU0MsR0FBVCxFQUFjO0FBQ2YsUUFBSUEsR0FBSixFQUFTO0FBQ1AsYUFBT0MsUUFBUUMsS0FBUixDQUNMLG9DQURLLEVBRUxGLElBQUlHLEtBQUosSUFBYUgsR0FGUixDQUFQO0FBSUQ7QUFDREMsWUFBUUcsR0FBUixDQUFZLGtEQUFaOztBQUVBO0FBQ0FwQixRQUFJcUIsU0FBSixDQUFjLFVBQVNMLEdBQVQsRUFBY00sR0FBZCxFQUFtQjtBQUMvQixVQUFJTixHQUFKLEVBQVM7QUFDUCxjQUFNQSxHQUFOO0FBQ0Q7QUFDREMsY0FBUUcsR0FBUixDQUFZLDZCQUFaOztBQUVBRSxVQUFJQyxFQUFKLENBQU8sU0FBUCxFQUFrQixVQUFTQyxNQUFULEVBQWlCO0FBQ2pDUCxnQkFBUUcsR0FBUixDQUFZLGFBQVosRUFBMkJJLE9BQU9yQixPQUFQLENBQWVRLElBQTFDLEVBQWdEYSxPQUFPQyxJQUF2RDtBQUNELE9BRkQ7O0FBSUFILFVBQUlDLEVBQUosQ0FBTyxTQUFQLEVBQWtCLFVBQVNDLE1BQVQsRUFBaUI7QUFDakNQLGdCQUFRQyxLQUFSLENBQWMsa0JBQWQsRUFBa0NNLE9BQU9yQixPQUFQLENBQWVRLElBQWpELEVBQXVEYSxPQUFPQyxJQUE5RDtBQUNELE9BRkQ7QUFHRCxLQWJEO0FBY0QsR0FsQ0Q7QUFtQ0QsQ0FwQ0QiLCJmaWxlIjoicG0yRW50cnkuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
