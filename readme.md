# pure-swap
[![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

> Pure function to swap the position of two elements in the array

Note: It doesn't modify passed array.

## Installation
```
$ npm install pure-swap --save
```

## Usage
```js

var pureSwap = require('pureSwap');
var array = [1,2,3,4];
pureSwap(array, 1, 3); // => [1,4,3,2]
pureSwap(array, 3, 1); // => [1,4,3,2]

// It doesn't modify the original array
console.log(array) // => [1,2,3,4]

```
## API
### `pureSwap(data, indexToSwap, indexToBeSwapped)`
Pure function to swap the position of two elements in the array

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
