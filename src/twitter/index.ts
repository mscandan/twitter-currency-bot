import TwitterApi from 'twitter-api-v2';

export const createUser = async (appKey: string, appSecret: string) => {
  const user = new TwitterApi({ appKey: appKey, appSecret: appSecret });
  const { oauth_token, oauth_token_secret } = await user.generateAuthLink();
  const finalClient = new TwitterApi({
    appKey: appKey,
    appSecret: appSecret,
    accessToken: oauth_token,
    accessSecret: oauth_token_secret,
  });
  return finalClient.v1;
};
