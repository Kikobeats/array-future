# array-future

![Last version](https://img.shields.io/github/tag/Kikobeats/array-future.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/array-future/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/array-future)
[![Dependency status](http://img.shields.io/david/Kikobeats/array-future.svg?style=flat-square)](https://david-dm.org/Kikobeats/array-future)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/array-future.svg?style=flat-square)](https://david-dm.org/Kikobeats/array-future#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/array-future.svg?style=flat-square)](https://www.npmjs.org/package/array-future)
[![Gittip](http://img.shields.io/gittip/Kikobeats.svg?style=flat-square)](https://www.gittip.com/Kikobeats/)

> A collection of ponyfills array prototypes as proposition for ECMAScript 7.

> Ponyfill: A polyfill that doesn't overwrite the native method.

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

* Array.contains({elem})
* Array.first()
* Array.last()
* Array.average()
* Array.sum()
* Array.unique()
* Array.compact()
* Array.replace({oldElem}, {newElem})
* Array.remove({elem})
* Array.clear()
* Array.shuffle()
* Array.combination({size})
* Array.intersect({Array})
* Array.difference({Array})

## License

MIT © [Kiko Beats](http://www.kikobeats.com)
