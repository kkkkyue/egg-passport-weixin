'use strict';
const debug = require('debug')('egg-passport-weixin');
const assert = require('assert');
const weixinStrategy = require('passport-weixin');

module.exports = app => {
  const config = app.config.passportWeixin;
  config.passReqToCallback = true;
  assert(config.clientID, '[egg-passport-weixin] config.passportWeixin.clientID required');
  assert(config.secret, '[egg-passport-weixin] config.passportWeixin.secret required');
  config.clientID = config.clientID;
  config.clientSecret = config.secret;
  config.scope = config.scope;
  var client="snsapi_login";
  if (config.scope=="snsapi_userinfo")
  {
    config.authorizationURL = 'https://open.weixin.qq.com/connect/oauth2/authorize';
    client="loginByWeixinClient";
  }
  
  config.requireState = false;
  app.passport.use(client, new Strategy(config, (req, accessToken, refreshToken, profile, done) => {

    const user = {
      provider: 'weixin',
      id: profile.id,
      displayName: profile.displayName,
      photo: profile.profileUrl,
      emails: profile.emails,
      accessToken: accessToken,
      refreshToken: refreshToken,
    };

    debug('%s %s get user: %j', req.method, req.url, user);

    app.passport.doVerify(req, user, done);
  }));
};
