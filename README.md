# Pear
Pear is an advanced, responsive front–end kit intended to be a starting point for any web design project. It takes advantage of the latest web development best practices and is purposefully lean so that it can be easily used on any project without worrying about pre–built styling.

Pear is not a UI framework. Frameworks are great and are extremely useful in some situations, like when you’re building prototypes. But with a framework like Foundation or Bootstrap, you are adhering your work to the styling that someone else built. Pear, on the other hand, simply lays a solid foundation for you to begin creating your own HTML and CSS, providing coding patterns instead of pre–made decisions.

Pear represents a lot of research and inspiration from several excellent sources, and is a continual work in progress. Feel free to use anything you like, and feedback is welcomed!

## Requirements
- Sass 3.0+

## Goals
1. Bring together some best practices from many credible sources across the web.
2. Help the developer establish good coding patterns.
3. Utilize powerful front–end tools like Gulp & Bourbon.
4. Make it easier to produce great work!

## What's Inside?
- HTML5 boilerplate, with the beginnings of a pattern library inside
- Sass boilerplate, organized using OOCSS and design system principles
- [Bourbon](https://github.com/thoughtbot/bourbon)
- Normalization and best practices pulled from multiple sources for a number of elements
- A few useful mixins
- Gulp.js setup with CSS, image, and Javascript processing and auto reloading.
- Humans.txt and robots.txt templates

Pear automatically comes with the other members of the family, [Sink](https://github.com/jrdnbwmn/Sink) and [Cobbler](https://github.com/jrdnbwmn/Cobbler). Of course, these items can be easily removed by simply deleted the folders/files with those names.

## Getting Started
- Download or fork Pear.
- `cd` to the root directory and run `npm install`. This will install everything you need to run Gulp. 
- Bourbon is already installed, but make sure it's updated: run `bourbon update` in the utilities directory.
- When you start working, run `gulp` from the root directory. Now when you make any changes inside the `src` folder (to your Sass, Javascript, or images), the gulp tasks will automatically be run and your preview in your browser will automatically be updated.
- Start coding and designing!

## How to Use
I encourage you to download or fork Pear, look through what the default version has, and then add or subtract code according to your preferences. In other words, build your own Pear!

Where some base styling is provided, it is pretty basic and is meant to show the developer some good options and help provide a pattern for coding.

## Vocabulary
Objects in Pear are divided into three types (our design system):

**Elements:** Elements are basic building blocks; they have distinct properties and can’t be broken down further without losing their meaning.

**Components:** Components are elements grouped together, which take on new properties as a result; they are groups of elements that function together as a unit like a form label, search input, and button combining to form a search form.

**Blocks:** Blocks are distinct chunks of a webpage; they are groups of components and sometimes solitary elements.

Pear also has a pattern for including skins:

**Skins:** In OOCSS, "skins" are defined as repeating visual features (like borders, backgrounds, margins, paddings, and so forth) or any extension to an object that you can define separately and then mix-and-match with your various objects to achieve visual variety, while remaining visually consistent and writing much less code. 

There's a folder called "utilities" in the SCSS directory.

**Utilities:** For Pear, I define utilities as tools we use to improve coding or add functionality, such as normalization and mixin tools. Utilities don't necessarily have anything to do with the design system or OOCSS, so they are kept separate. 

## The Pear Family
- [Pear](https://github.com/jrdnbwmn/Pear): Advanced, responsive, Sass-based front–end kit
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