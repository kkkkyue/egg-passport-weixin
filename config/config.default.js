'use strict';

/**
 * egg-egg-passport-weixin default config
 * @member Config#eggPassportWeixin
 * @property {String} SOME_KEY - some description
 */
exports.passportWeiXin = {
  clientID: '',
  secret: '',
  callbackURL: '/passport/weixin/callback',
  scope:'snsapi_userinfo',
};
