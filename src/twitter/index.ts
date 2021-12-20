import TwitterApi from 'twitter-api-v2';

export const createUser = (
  apiKey: string,
  apiKeySecret: string,
  accessToken: string,
  accessSecret: string,
) => {
  const user = new TwitterApi({
    appKey: apiKey,
    appSecret: apiKeySecret,
    accessToken: accessToken,
    accessSecret: accessSecret,
  });
  return user;
};
