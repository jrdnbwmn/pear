# Pear
[![Bower version](https://badge.fury.io/bo/pear.svg)](http://badge.fury.io/bo/pear)

Pear is an advanced, Sass–based front–end kit with the aim of being a launching point for any web design project. It takes advantage of the latest web development best practices and is purposefully lean and modularized so that it can be easily used on any project.

Pear is not a UI framework. Frameworks are great and very useful in some situations (like when you’re building prototypes). But with a framework like Bootstrap, you are adhering your work to the styling that someone else built. Pear, on the other hand, simply lays a solid foundation for you to begin creating your own code, providing patterns instead of pre–made decisions.

You're encouraged to look through what the default Pear version has, and then add, subtract, and modify code according to the project and your preferences.

Pear represents a lot of research and inspiration from several excellent sources, and is a continual work in progress. Feel free to use anything you like, and feedback and contributions are welcomed!

## Requirements
- Sass 3.0+

## What's Inside?
- Boilerplate for an HTML document
- Sass files organized according to OOCSS and design system principles
- Default best practices for a number of CSS elements
- Humans.txt and robots.txt templates
- [Gulp](http://gulpjs.com/) template with CSS, image, and Javascript processing and auto reloading.
- [Normalize](http://necolas.github.io/normalize.css/)
- [Bourbon](https://github.com/thoughtbot/bourbon)

Pear automatically comes with the other members of the Pear family, [Sink](https://github.com/jrdnbwmn/Sink) and [Cobbler](https://github.com/jrdnbwmn/Cobbler).

## Getting Started
Three options are available to start using Pear:
- [Download the latest release](https://github.com/jrdnbwmn/pear/archive/v2.2.1.zip).
- Clone the repo: `git clone https://github.com/jrdnbwmn/pear.git`.
- Install with [Bower](http://bower.io): `bower install pear`.

To get the packages ready:
- `cd` to the root directory and run `npm install`. This will install everything you need to run Gulp.
- Bourbon is already installed, but make sure it's updated: run `bourbon update` in the utilities directory.
- When you start working, run `gulp` from the root directory. Now when you make any changes inside the `src` folder (to your Sass, Javascript, or images), the gulp tasks will automatically be run and your preview in your browser will automatically be updated.

## Vocabulary
*Objects* in Pear are divided into three types:

**Elements:** Elements are basic building blocks; they have distinct properties and can’t be broken down further without losing their meaning.

**Components:** Components are elements grouped together, which take on new properties as a result; they are groups of elements that function together as a unit like a form label, search input, and button combining to form a search form.

**Blocks:** Blocks are distinct chunks of a webpage; they are groups of components and sometimes solitary elements.

Pear also has a pattern for including skins:

**Skins:** In OOCSS, "skins" are defined as repeating visual features (like borders, backgrounds, margins, paddings, and so forth) or any extension to an object that you can define separately and then mix-and-match with your various objects to achieve visual variety, while remaining visually consistent and writing much less code. 

There's a folder called "utilities" in the SCSS directory.

**Utilities:** For Pear, utilities are defined as tools we use to improve coding or add functionality, such as normalization and mixin tools. Utilities don't necessarily have anything to do with the design system or OOCSS, so they are kept separate. 

## Contributing
Contributions are welcomed! Please read through the [contributing guidelines](https://github.com/jrdnbwmn/pear/blob/master/CONTRIBUTING.md) before getting started.

## The Pear Family
- [Pear](https://github.com/jrdnbwmn/Pear): Advanced, Sass-based front–end kit
- [Sink](https://github.com/jrdnbwmn/Sink): A floatless, responsive CSS grid
- [Cobbler](https://github.com/jrdnbwmn/Cobbler): Pattern library template & default styling, built on top of Pear

## Credits
Pear is managed by [Jordan Bowman](http://jrdnbwmn.com). Much inspiration and code was/is drawn from some excellent sources, including:
- [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate)
- [Intuit.css](http://inuitcss.com/) 
- [Typeplate](http://typeplate.com/)
- [Bootstrap](http://getbootstrap.com/)
- [Foundation](http://foundation.zurb.com/index.html)

## License
Released under the [MIT License](LICENSE.txt).