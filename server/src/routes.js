import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Willian Emboava',
    email: 'w.emboava@gmail.com',
    password_hash: 'abcdefg12345678',
  });

  res.json(user);
});

export default routes;
