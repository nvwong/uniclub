import appPromise from './app';
import getPort from './utils/getPort';

appPromise
  .catch((err) => {
    console.log(err.stack);
  })
  .then((app) => {
    // launch server
    const port = getPort();
    app.listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.log('Listening at port', port);
    });
  });
