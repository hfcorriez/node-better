# node-better

Require better for NodeJs

# Usage

In `PROJECT_ROOT/shared/libs/emoji`:

```javascript
module.exports = function() { /*...*/ }
```

Old way for use:

```javascript
var emoji = require('../../../shared/libs/emoji')
```

> `../../../` is depend on where of your code. Or it will be `../`, or it will be `../../`.

New way for use:

```javascript
var emoji = require('better')('shared/libs/emoji')
```

> Just pass file path as in your project root dir.

# Install

```bash
npm install better --save
```

# API

## better.path(filePath)

Will return full path of `filePath`.

# License

[MIT LICENSE](https://github.com/hfcorriez/node-better/blob/master/LICENSE)