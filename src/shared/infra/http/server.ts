import 'reflect-metadata';
import 'dotenv/config';
import { app } from './app';
import { dataSource } from '../typeorm';
import swaggerDocs from '../../documentation/swagger';

dataSource.initialize().then(() => {
  app.listen(process.env.PORT || 3333, () => {
    swaggerDocs(app);
    console.log(`Server started on port ${process.env.PORT || 3333}! 🏆`);
  });
});
