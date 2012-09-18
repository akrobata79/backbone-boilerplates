# Javascript App Skeleton for use with [Brunch](http://brunch.io/)

Main languages are JavaScript,
[Stylus for CSS pre-processing](http://learnboost.github.com/stylus/) and
[Handlebars for templating](http://handlebarsjs.com/).  Also included is [Backbone.Mediator](https://github.com/chalbert/Backbone-Mediator) for implementing Pub/Sub patterns.

## Installation

First install Brunch: `sudo npm install -g brunch` and then run `brunch new <app> -s https://github.com/damassi/Javascript-App-Skeleton` & then `npm install` and finally `brunch build`.  To continually watch for changes, use `brunch watch`.
See more info on the [official site](http://brunch.io)

## Overview

    config.coffee
    README.md
    /app/
      /assets/
        index.html
        images/
      styles/
      helpers/
      config/
      events/
      utils/
      routers/
      models/
      /views/
        templates/

      Application.js
      initialize.js
    /test/
    /vendor/
      scripts/
        backbone.js
        jquery.js
        console-helper.js
        underscore.js
      styles/
        normalize.css
        helpers.css

* `config.coffee`  contains configuration of your app. You can set plugins /
languages that would be used here.
* `app/assets` contains images / static files. Contents of the directory would
be copied to `build/` without change.
Other `app/` directories could contain files that would be compiled. Languages,
that compile to JS (coffeescript, roy etc.) or js files and located in app are 
automatically wrapped in module closure so they can be loaded by 
`require('module/location')`.
* `app/models` & `app/views` contain base classes your app should inherit from.
* `test/` contains feature & unit tests.
* `vendor/` contains all third-party code. The code wouldn’t be wrapped in
modules, it would be loaded instantly instead.

This all will generate `public/` (by default) directory when `brunch build` or `brunch watch` is executed.

## Other
Versions of software the skeleton uses:

* jQuery 1.7.2
* Backbone 0.9.1
* Underscore 1.3.3
* HTML5Boilerplate 3.0.3

The license is [public domain](http://creativecommons.org/publicdomain/zero/1.0/).
Use it however you want.

---------------------------------------------------------------------------------------

Thanks Robert :)

Pretty much, my dev stack consists of just one specific tool which happens to wrap a number of other tools into one package: Brunch: www.brunch.io.  (I actually gave a very fumbly presentation on it at FlashCoders a few months ago when I still lived in NYC.)  It utilizes Require, multiple-script-combination ("creating a swf"), minification, and modularization for writing plugins and so on.  It ships with kind of a lot of baggage now --Chaplin, a fairly complicated backbone-based application architecture is the default skeleton, strangely-- so in response I wrote my own version which can be used as a starting place for building apps and whatnot, but without the overhead:

https://github.com/damassi/Javascript-App-Skeleton

and if you like CoffeeScript, the same thing in that language:

https://github.com/damassi/Coffeescript-App-Skeleton

to install it's as simple of running:
npm install -g brunch

and then
brunch new MyAppName -s https://github.com/damassi/Javascript-App-Skeleton

Example:

This is a typical Javascript class as used by Brunch, unbound to backbone and called via a closure (though backbone classes are even easier to define, as you can see in the repo and the gist below):

https://gist.github.com/3616715

// Example use of require; or how you 'import' files

var SampleView = require('views/SampleView');

// Class definition
MyClass = (function() {

// private vars
var _foo = 'bar';
var _show = false;
var _sampleView = new SampleView();

// self-instantiating "constructor" function
var initialize = (function() {
    console.log('Initialized');
})();

// private functions
function show() {
    // show view
};

function hide() {
    // hide view
};

// public facing interface
return {

   getFoo: function() {
       return _foo;
   },

   setFoo: function( value ) {
       if( value !== foo )
           foo = value;
   },

   showView: function( doShow ) {
       ( doShow ) ?
           show() :
           hide();
   }
};

}).call();

module.exports = MyClass;

More info is on the GitHub page.

But yeah, I just moved to a new company and so far, after introducing Brunch, the entire dev team (about ~10 long-term JavaScripters) have moved over to it from a number of different platforms.  It's hard to find this sort of wide-spread acknowledgement of usefulness in the JS community, so if there was ever a recommendation for anything, it's this :)

-Chris