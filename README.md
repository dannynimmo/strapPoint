# strapPoint

strapPoint is a small jQuery utility plugin to make working with Bootstrap breakpoints easier.

Mess with the [demo here](https://dannynimmo.github.io/strapPoint).

Download the latest release from the [GitHub releases](https://github.com/dannynimmo/strapPoint/releases) page.

## Getting started

Include the plugin on your page after the reference to jQuery:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="js/vendor/strapPoint.min.js"></script>
```

Then start using strapPoint in your code:

```javascript
$.strapPoint.on('lg', function () {
    console.log('We huge.');
});
```



## Changelog


### 0.1.0

Initial release.



## Methods


### `.on (size, callback)`

* `size` — a space separated list of one or more breakpoints: `'xs'`, `'sm'`, `'md'`, `'lg'`, or to match all `'all'`
* `callback (direction)` — callback function, with the direction (`'up'` or `'down'`) being passed as the only parameter
* Returns the `listenerId`

The callback gets called every time the window is resized to the specified breakpoint size. If `'all'` is passed as the size, the callback will be run everytime the breakpoint changes.

If required, the direction is passed to the callback and can be used to check in which direction the window was resized. Returned is a string identifying the listener and can be used to remove it using `.off`.

```javascript
$.strapPoint.on('sm', function (direction) {
    if (direction === 'down') {
        console.log('We shrank to small.');
    } else {
        console.log('We grew to small.');
    }
});
```


### `.one (size, callback)`

* `size` — a space separated list of one or more breakpoints: `'xs'`, `'sm'`, `'md'`, `'lg'`, or to match all `'all'`
* `callback (direction)` — callback function, with the direction (`'up'` or `'down'`) being passed as the only parameter
* Returns the `listenerId`

The same as `.on`, only the callback is only run once.

```javascript
$.strapPoint.one('sm md', function (direction) {
    if (direction === 'down') {
        console.log('We shrank once to medium or small.');
    } else {
        console.log('We grew once to medium or small.');
    }
});
```


### `.xs/sm/md/lg (callback)`

* `callback (direction)` — callback function, with the direction (`'up'` or `'down'`) being passed as the only parameter
* Returns the `listenerId`

These are just shorthand methods for calling `.on`.

```javascript
$.strapPoint.lg(function (direction) {
    console.log('We are now large.');
});
```


### `.change (callback)`

* `callback (direction)` — callback function, with the direction (`'up'` or `'down'`) being passed as the only parameter
* Returns the `listenerId`

A shorthand method for calling `.on('all')`.

```javascript
$.strapPoint.change(function (direction) {
    console.log('Something changed…');
});
```


### `.off (listenerId)`

* `listenerId` — listener to remove

Removes a previously created listener.

```javascript
var lgListener = $.strapPoint.lg(function (direction) {
    // …
});
$.strapPoint.off(lgListener);
```


### `.is (size)`

* `size` — a space separated list of one or more breakpoints: `'xs'`, `'sm'`, `'md'`, `'lg'`
* Returns `true` or `false`

Returns `true` if the current breakpoint is equal to `size`, otherwise `false`.

```javascript
if ($.strapPoint.is('xs')) {
    console.log('We are extra small!');
}
```


### `.get ()`

* Returns `'xs'`, `'sm'`, `'md'`, or `'lg'`

Returns the current breakpoint.

```javascript
console.log('We are ' + $.strapPoint.get());
```



## Issues

Found a bug? Please [create an issue](https://github.com/dannynimmo/strapPoint/issues/new) here on GitHub.



## License

strapPoint is licensed under the [MIT license](https://github.com/dannynimmo/strapPoint/blob/master/LICENSE).
