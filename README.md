# egg-egg-passport-weixin

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-passport-weixin.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-passport-weixin
[travis-image]: https://img.shields.io/travis/kkkkyue/egg-passport-weixin.svg?style=flat-square
[travis-url]: https://travis-ci.org/kkkkyue/egg-passport-weixin
[codecov-image]: https://img.shields.io/codecov/c/github/kkkkyue/egg-passport-weixin.svg?style=flat-square
[codecov-url]: https://codecov.io/github/kkkkyue/egg-passport-weixin?branch=master
[david-image]: https://img.shields.io/david/kkkkyue/egg-passport-weixin.svg?style=flat-square
[david-url]: https://david-dm.org/kkkkyue/egg-passport-weixin
[snyk-image]: https://snyk.io/test/npm/egg-passport-weixin/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-passport-weixin
[download-image]: https://img.shields.io/npm/dm/egg-passport-weixin.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-passport-weixin

<!--
Description here.
-->

## Install

```bash
$ npm i egg-passport-weixin --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.passportWeixin = {
  enable: true,
  package: 'egg-passport-weixin',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.passportWeiXin = {
  clientID: '',
  secret: '',
  callbackURL: '/passport/weixin/callback',
  scope:'snsapi_userinfo',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/kkkkyue/egg-passport-weixin/issues).

## License

[MIT](LICENSE)
