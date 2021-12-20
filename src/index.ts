import { config } from 'dotenv';
import { createUser } from './twitter';
import { requests } from './requests';

config();

const user = createUser(
  process.env.TWITTER_API_KEY ?? '',
  process.env.TWITTER_API_SECRET ?? '',
  process.env.TWITTER_ACCESS_TOKEN ?? '',
  process.env.TWITTER_ACCESS_SECRET ?? '',
);

const sendTweet = () => {
  requests
    .getLatestCurrencyRate()
    .then(latestRate => {
      user.v1.tweet(
        `${new Date().toLocaleDateString('tr')} ${new Date().toLocaleTimeString(
          'tr',
        )} 1 USD = ${latestRate} TRY`,
      );
    })
    .catch(err => console.error(err));
};

sendTweet();
setInterval(sendTweet, 30 * 60 * 1000);
