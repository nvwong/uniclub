# NPM Web API Wrapper for Node

A simple collection of useful npm.org requests.

## Installation

```
npm install npm-web-api
```

## Usage

Requiring `npm-web-api` returns an object of Functions as described below. No
`new` required, nothing to `create`, nada. In the descriptions, `npmapi` refers
to the returned module instance as if preceded by:

```
var npmapi = require('npm-web-api')
```

### npmapi.getModulesByUser(username, callback)

Calls `callback` with either an Error or an Array of module names maintained by
`username`, expressed as a String.

### npmapi.getLatest(module, callback)

Calls `callback` with either an Error or an Object of package metadata for
`module` from it's latest package.json.

## Contributing

This module was initially created just for `getModulesByUser`. To add more
methods, please fork and submit a pull request. However:

 - Please don't add dependencies unless they're necessary. `request` should meet
    most of your needs.
