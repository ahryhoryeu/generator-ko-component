# generator-ko-component [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Generator for knockout.js components.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-ko-component using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-ko-component
```

Then generate your new component:

```bash
yo ko-component
```

## Description

Generator will create a folder with 2-4 files describing a component. It assumes you use [require.js](http://requirejs.org/) as an AMD tool.

The files are:
- HTML component template
- JS component file
- LESS stylesheet (optional)
- JS component view model file (optional)

The questions are:
- The name of the component
- Whether you want to generate LESS file
- Whether you want to create a component with view model or a template-only component
- Whether you want to create a separate file for component view model (in case you want to re-use it separately)
- Base require.js path (if not provided, it will be current folder path)

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Andrei Hryhoryeu](mailto:a.v.hryhoryeu@gmail.com)


[npm-image]: https://badge.fury.io/js/generator-ko-component.svg
[npm-url]: https://npmjs.org/package/generator-ko-component
[travis-image]: https://travis-ci.org//generator-ko-component.svg?branch=master
[travis-url]: https://travis-ci.org//generator-ko-component
[daviddm-image]: https://david-dm.org//generator-ko-component.svg?theme=shields.io
[daviddm-url]: https://david-dm.org//generator-ko-component
