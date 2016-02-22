# array-future

![Last version](https://img.shields.io/github/tag/Kikobeats/array-future.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/array-future/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/array-future)
[![Dependency status](http://img.shields.io/david/Kikobeats/array-future.svg?style=flat-square)](https://david-dm.org/Kikobeats/array-future)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/array-future.svg?style=flat-square)](https://david-dm.org/Kikobeats/array-future#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/array-future.svg?style=flat-square)](https://www.npmjs.org/package/array-future)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/kikobeats)

> A collection of Array prototypes prollyfills as proposition for ECMAScript 7.

> Prollyfill: A polyfill for a not yet standardized API.

## Install

```bash
npm install array-future --save
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
bower install array-future --save
```

and later link in your HTML:

```html
<script src="bower_components/array-future/dist/array-future.js"></script>
```

## Usage

```js
require('array-future');
```

## API

### Instance

* Array.clear()
* Array.clone()
* Array.combination({size})
* Array.compact()
* Array.difference({Array})
* Array.empty()
* Array.first()
* Array.includes({elem})
* Array.intersect({Array})
* Array.last()
* Array.max()
* Array.mean()
* Array.median()
* Array.min()
* Array.replace({oldElem}, {newElem})
* Array.remove({elem})
* Array.shuffle()
* Array.sum()
* Array.unique()
* Array.zip({...others})

### Static

* Array.range({start, stop, step})

## License

MIT © [Kiko Beats](http://www.kikobeats.com)
