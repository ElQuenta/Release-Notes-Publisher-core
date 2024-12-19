import app from './app';
import config from './config/config';
import mongoInit from './config/mongodb'
const { port } = config.server


mongoInit().then(
  () => {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  }
)