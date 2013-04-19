Brunch with fruits
==================

A [brunch.io](http://brunch.io/) skeleton based on [Backbone](http://backbonejs.org/), [Bootstrap](http://twitter.github.com/bootstrap/), [Handlebars](http://handlebarsjs.com/), [LESS](http://lesscss.org/) / [SASS](http://sass-lang.com/), [Mocha](http://visionmedia.github.io/mocha/) / [Chai](http://chaijs.com/).

* example of deployed [full-stack application](https://github.com/askalyuk/pay-periods-remaining)
* application structure based on modules - each module is separated set of models, views, styles, templates etc.
* ready-to-go browser-based testing

## Getting started

Assuming that [Brunch.io](http://brunch.io) installed, create your project using the skeleton with:

	brunch new <your-project-name> -s github://askalyuk/brunch-fruits

Install dependencies:

    npm install

Build (dev version):

    brunch build

Build (optimized version):

    brunch build -o

Run simple development server (and watch changes):

    brunch watch --server

Go to home page:

    http://localhost:3333/

Run tests:

    http://localhost:3333/test/index.html

## License

[MIT](http://opensource.org/licenses/MIT)

inspired by [brunch-banana-pancakes](https://github.com/Anaphase/brunch-banana-pancakes)
