# pure-swap
[![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

> A pure function to swap the position of two elements in the array

## Installation
```
$ npm install pure-swap --save
```

## Browser support
IE 9+
Chrome 5+
Opera 10.5+
Safari 5+
FireFox 4+

## Usage
```js

var pureSwap = require('pure-swap');
var array = [1,2,3,4];
pureSwap(array, 1, 3); // => [1,4,3,2]
pureSwap(array, 3, 1); // => [1,4,3,2]

// It doesn't modify the original array
console.log(array) // => [1,2,3,4]

```
## API
### `pureSwap(data, indexToSwap, indexToBeSwapped)`
A pure function to swap the position of two elements in the array

#### Parameters
- **Array** `array`: An array of data
- **Number** `indexToSwap` An index of array element to swap
- **Number** `indexToBeSwapped` An index of array element to be swapped

#### Return
- **Array**: Result

## License

MIT © [Philipp Alferov](https://github.com/alferov)

[travis-url]: https://travis-ci.org/alferov/pure-swap
[travis-image]: https://img.shields.io/travis/alferov/pure-swap.svg?style=flat-square

[depstat-url]: https://david-dm.org/alferov/pure-swap
[depstat-image]: https://david-dm.org/alferov/pure-swap.svg?style=flat-square
