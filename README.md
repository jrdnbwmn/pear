# Pear

This is the launching kit I use on just about every project.

Includes:

- HTML boilerplate with simple pattern library
- OOCSS style kit using Sass
- Gulp setup

The minified CSS file comes in at 13kb.

This is meant to be a starting point – to help me kick things off and then get out of my way. It helps me utilize best practices, set up a good architecture/workflow, play better golf, and be more fulfilled in life (yes, all those things).

## Bower

Install with bower: `bower install pear`

## Principles

1. Always err on the side of simplicity. Faster; cheaper; easier to understand, inherit, maintain, and debug; less likely to fail or break; less cognitive overhead.
2. Reduce the amount of moving parts. The best code is no code at all. Get rid of as much as you can – both features and code. Every moving part is a potential point of failure.
3. Along the same lines, don't build something until you've been asked for it. Solve each problem as you encounter it. Do each activity once and as simply as possible, with nothing outside of that. A website is not the place to show off.
4. Pragmatism trumps perfectionism. Perfection will never be attainable, so don't let it hold you back. Hacking something together today is better than launching something "perfect" in three weeks.
5. Don't design systems around edge cases. Don't let the minority lead the majority. Build for the most common scenario first and then solve edge cases separately. We talk about reponsiveness and coding for every use case and every device in one, but often that leads to clunky, bloated, unoptimized code.
6. Expect and accodomate change. Always stay adaptable, flexible, and nimble. Everything is subject to change, nothing is set in stone. Make sure you can reverse any decision. Never tie yourself down. Don't try to predict the future.

## Reasoning

Dashes, not CameCase

- http://csswizardry.com/2010/12/css-camel-case-seriously-sucks/

Why not to use abbreviations (button vs btn)

- Consistency (I would even end up forgetting which class names I used abbreviations on and which ones I didn’t)
- Clarity (there’s no question about the name of the class)
- The exception to this is margin and padding, which I use a lot and don’t have any trouble remembering.

Conversationalist word placement within names (white-background vs background-white)

- It feels more consistent to always have names that I would say in conversation. Going noun-adjective makes more logical sense, but runs counter to English and therefore feels awkward and takes extra effort to remember, and I also felt like it was harder to keep consistent (especially if I use dashes instead of CamelCase).
- Easier to write and read.
- Easier to remember. Words you would actually say in real life are much easier to remember.
- Clarity. Anyone could read it and know exactly what it's supposed to do.
- Basically, the rule is "How would you say this without using filler words like 'of' and 'the'?"

Alphabetizing declarations

- Simple to write and read.
- Makes it really consistent instead of having general rules that don't always seem to apply to everything. 
- My previous method made sense, but didn’t help with reading and made writing more complicated.
- Declarations that begin with "-" like "-webkit-appearance" go at the end. Groups of these (such as "appearance" with "-webkit-appearance") go together.

## Writing in a new project

Create new classes for new types of styling that you need. For example, if you need `overflow:hidden` on an element, create a class for that. If you create a non-abstract class name for a particular element, you're doing it wrong.

At the end of a project, either use the Gulp `uncss` tool or manually go through each stylesheet and delete whatever you aren't using for that particular project.