# node-can-symlink

This package tests whether you can create symlinks on this system.

## Command-line usage

```sh
npm install -g can-symlink

can-symlink
```

## Programmatic usage

```sh
npm install --save can-symlink
```

```js
let canSymlink = require("can-symlink")();
```

`canSymlink` will be either `true` or `false`. Note that we are calling the
module.

On non-Windows platforms, `require("can-symlink")()` automatically returns true.
To force testing for symlinkability on non-Windows platforms, pass the
`forceTest` option:

```js
let canSymlink = require("can-symlink")({ forceTest: true });
```
