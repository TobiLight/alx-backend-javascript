import express from 'express';
import appRoutes from './routes';

const app = express();
app.use('/', appRoutes);

app.listen(1245, '127.0.0.1', () => {
  console.log('Server is running on port ', 1245);
});

module.exports = app;
