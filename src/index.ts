import { config } from 'dotenv';
import { createUser } from './twitter';

config();

const user = createUser(
  process.env.TWITTER_API_KEY ?? '',
  process.env.TWITTER_API_SECRET ?? '',
).then(app => app.tweet('asdasd').then(res => console.log(res)));

console.log(user);
