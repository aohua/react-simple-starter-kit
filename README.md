# React simple starter kit

A simplest version of react boilerplate

## Getting Started

You will need to install a few packages on Atom to support eslint.

### Prerequisites

* linter-eslint 8.1.7
* linter 2.1.4
* linter-ui-default 1.2.4
* intentions 1.1.2
* busy-signal 1.4.1

Recommended but not required
* autocomplete-modules 1.6.8
* pigments 0.39.1

### Installing
```
yarn install / npm install
```
## Running the develop server

```
npm start
```
## Global css settings

All the css global variables should be located in side app/settings.css

And import it in other components and containers.

Example:

```
@value primary-color from '../../settings.css';
```

