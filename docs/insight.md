[![Twitch Status](https://img.shields.io/twitch/status/01jam?style=social)](https://www.twitch.tv/01jam)

# Bonus tutorials and insights

If you reached this point you read the entire doc and you wanted more insight about the different module types...I can feel it.
Down here you can find more information and clarification about the outputs of this library. I'm writing it here because I know it can be a little bit overlwhelming at first but it is important in order to understand how this build output works and it is related to this library doc...still.

## Module types

I had some problems figuring out all this JS modules/UMD messy system, for that reason I copied a brief explanation here. If you already know what you are dealing with just jump to the "Usage section".

| Index                                              |
| :------------------------------------------------- |
| [What are JS modules?](/#about-modules)            |
| [Boilerplate structure](/#about-this-boilerplate)  |
| [Boilerplate usage](/#how-to-use-this-boilerplate) |
| [What next](/#what-next)                           |

## About modules

-   ✨ https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm
-   ✨ https://flaviocopes.com/es-modules/
-   ✨ http://jargon.js.org/_glossary/UMD.md

As projects scale up, we need to modularize code into independent modules with separate namespaces. In addition to better organization, modularization brings the capabilities of encapsulation, dependency management, and reusability.

### CommonJS - CJS

CJS is short for CommonJS, suitable for Node and other bundlers

```Javascript
/* example import */

const goal = require('./goal.js');

/* example export */

module.exports = function goal(n) {
  // Function implementation
}
```

### Universal Module Definition - UMD

Is a pattern of universal module definition for JavaScript modules. These modules are capable of working everywhere, be it in the client, on the server or elsewhere.

```Javascript
/* example mess, just trust it */

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "underscore"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"), require("underscore"));
    } else {
        root.Requester = factory(root.$, root._);
    }
}(this, function ($, _) {
    // this is where I defined my module implementation

    var Requester = {
		// Function implementation
	};

    return Requester;
}));
```

### ES Modules - ESM

While Node.js has been using the CommonJS standard for years, the browser never had a module system, as every major decision such as a module system must be first standardized by ECMAScript and then implemented by the browser.

```Javascript
/* example import */

import {foo, bar} from './myLib';

/* example export */

export default function() {
	// Function implementation
};

export const function1() {
	// Function implementation
};

export const function2() {
	// Function implementation
};
```
