# Superheroes

The side project, to show Marvel superheroes build on react-native.

##Stack
- [React Native](http://facebook.github.io/react-native/) for native app development
- [Webpack](https://webpack.github.io/) module loader and bundler
- [React-native-webpack-server](https://github.com/mjohnston/react-native-webpack-server)
- [Babel](http://babeljs.io/) for ES6+ support
- [Marvel API](http://developer.marvel.com/) content from Marvel Comics API

## Installing

```shell
npm install
```

## Using

### Development

```shell
npm start
```

### Bundling for release

```shell
npm run bundle
```

## Hot Module Replacement

**Note: HMR currently does not work using React Native >=0.12. See [#103](https://github.com/mjohnston/react-native-webpack-server/issues/103) for a temporary workaround.**

Since this is built on Webpack you can now leverage the growing ecosystem of addons such as React hot module replacement via [react-transform-hmr](https://github.com/gaearon/react-transform-hmr).

To enable hot reload, make sure you first install [babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform) and [react-transform-hmr](https://github.com/gaearon/react-transform-hmr), then start the server with `--hot`.

You'll also need to configure Webpack. See the [Babel+ES6 config](https://github.com/mjohnston/react-native-webpack-server/blob/master/Examples/BabelES6/webpack.config.js) for an example.

**NOTE:** hot reload currently only works with the Chrome web socket executor (hit CMD+D in the simulator). If you regurlarly use this feature, you might want to default to the web socket executor in development:

RCTBridge.m:
```objc
- (void)setUp
{
  Class executorClass = _executorClass ?: _globalExecutorClass ?: [RCTContextExecutor class];
#if DEBUG
  executorClass = NSClassFromString(@"RCTWebSocketExecutor");
#endif
  ...
  }
```
