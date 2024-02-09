# Markdown-It Replacer Plugin
[![CI](https://github.com/brenoepics/md-replacer-plugin/actions/workflows/ci.yml/badge.svg)](https://github.com/brenoepics/md-replacer-plugin/actions/workflows/ci.yml)
![NPM Version](https://img.shields.io/npm/v/md-replacer-plugin)

A markdown-it plugin that allows you to replace markdown content with custom content.


## Install:


```bash
npm i md-replacer-plugin
```

```bash
yarn add md-replacer-plugin
```

## Usage

As a Node module:

```javascript
import MarkdownIt from "markdown-it"
import replaceVarPlugin from "md-replacer-plugin"

const text = MarkdownIt().use(replaceVarPlugin, { variable: "testing" }).render("variable")
```

## Design choices

### Why is markdown-it only in devDependencies?

From the [markdown-it development recommendations](https://github.com/markdown-it/markdown-it/blob/master/docs/development.md):

> Plugins should not require the `markdown-it` package as a dependency in `package.json`.

Note, for typing, we import this package with `import type`, to ensure the imports are not present in the compiled JavaScript.

### Why Jest?

There are a number of JavaScript unit testing frameworks (see [this comparison](https://raygun.com/blog/javascript-unit-testing-frameworks/), but [jest] was chosen because of it is easy to setup/use, flexible, and well used in large projects.

### Why Rollup?

The three main bundlers are; Webpack, Rollup and Parcel, with the functionality gap between all of these bundlers narrowing over the years.
Essentially, Rollup provides a middle ground between features and complexity, and is good for bundling libraries (it is what `markdown-it` itself [uses](https://github.com/markdown-it/markdown-it/blob/064d602c6890715277978af810a903ab014efc73/support/rollup.config.js)).

See, for example:

- <https://medium.com/@PepsRyuu/why-i-use-rollup-and-not-webpack-e3ab163f4fd3>
- <https://medium.com/js-imaginea/comparing-bundlers-webpack-rollup-parcel-f8f5dc609cfd>
- <https://betterprogramming.pub/the-battle-of-bundlers-6333a4e3eda9>
