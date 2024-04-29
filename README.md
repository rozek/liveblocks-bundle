# liveblocks-bundle #

a "liveblocks" bundle that can be used directly in the browser (e.g., for no-build environments like REPLs or similar)

[liveblocks](https://github.com/liveblocks/liveblocks) has been designed to be used with a bundler like [Rollup](https://rollupjs.org/), [webpack](https://webpack.js.org/) or [Vite](https://vitejs.dev/).

If you want to use liveblocks in a "no-build environment" (such as a browser-based REPL), you may load the `liveblocks-bundle` from this repository using a simple `<script/>` element, wait for the `liveblocks` global to become available (because it has to be loaded as a JavaScript module) and then use it in your code:

```html
<script type="module" src="https://rozek.github.io/liveblocks-bundle/dist/liveblocks-bundle.js"></script>

<script>
  if (window.liveblocks == null) {
    document.addEventListener('liveblocks',runApplication)
  } else {
    runApplication()
  }

  function runApplication () {
    const {
      createClient,
      LiveList, LiveMap, LiveObject
    } = window.liveblocks

// ....insert your liveblocks code here
  }
</script>
```

`liveblocks-bundle` creates a global called `liveblocks` with the following contents:

* `createClient`
* 'LiveList', 'LiveMap' and 'LiveObject'

As a consequence, instead of

`  import { createClient } from "@liveblocks/client"`

you now write

`  const { createClient } = window.liveblocks`

or similar - as soon as `liveblocks` has become available.

## Build Instructions ##

You may easily build this package yourself.

Just install [NPM](https://docs.npmjs.com/) according to the instructions for your platform and follow these steps:

1. either clone this repository using [git](https://git-scm.com/) or [download a ZIP archive](https://github.com/rozek/liveblocks-bundle/archive/refs/heads/main.zip) with its contents to your disk and unpack it there 
2. open a shell and navigate to the root directory of this repository
3. run `npm install` in order to install the complete build environment
4. execute `npm run build` to create a new build

## License ##

[MIT License](LICENSE.md)
