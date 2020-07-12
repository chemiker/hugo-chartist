# hugo-mod-chartist
**hugo-mod-chartist** is a module for the static site generator [hugo](http://gohugo.io) to implement [chartist.js](https://gionkunz.github.io/chartist-js/index.html).

## Installation

1. Add the module to your `go.mod`. E.g.

```
module github.com/<myself>/<myHugoInstance>

go 1.14

require github.com/chemiker/hugo-mod-chartist latest
```

2. Add the module to the `config.toml` of your Hugo configuration:

```
[module]
  [[module.imports]]
    path="github.com/chemiker/hugo-mod-chartist"
    disabled = false
      [[module.imports.mounts]]
        source="dist/layouts/partials/"
        target="layouts/partials/"
      [[module.imports.mounts]]
        source="dist/assets/sass/"
        target="assets/sass/"
      [[module.imports.mounts]]
        source="dist/static/js/"
        target="static/js/"
```

3. Update the modules of your Hugo configuration by running `hugo mod get -u `

4. Implement the partial template `head-chartist.html` in your website's `<head>`.

## Usage

You can use `<script>` tags to create chartist.js instances as described in the [chartist.js documentation](https://gionkunz.github.io/chartist-js/examples.html).

## Development

It is highly welcome that you fork this repository, file issues or submit pull requests. The module uses [yarn](https://yarnpkg.com) to fetch, modify and merge necessary resources. You can run `yarn install` to fetch all resources and `yarn run gulp make` to run the build scripts.

## License
This project is released under the [MIT license](LICENSE).

It contains software and fonts released under individual licenses:

* *chartist.js* - Copyright (c) 2013 Gion Kunz is released under the MIT license (see file "licenses/LICENSE-CHARTIST")

* *chartist.js Axistitle plugin* - Copyright (c) 2019 Alex Stanbury is released under the MIT license (see file "licenses/LICENSE-CHARTIST-PLUGIN-AXISTITLE")

