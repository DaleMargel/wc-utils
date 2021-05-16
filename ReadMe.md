# **wc-utils**
> Nifty bits of code to use with web components

## json.js
A json serializer that also handle RegEx, lambdas and time. wow!

## stl.js
Fixes string template literal behaviour. When converting string template literal to a string, javascript will insert comma separators ',' when an array is enountered. In the case of html generation, this is not what we want.

This `stl` tag template function will render the expression properly. It is general purpose and can be used anywhere complex handling of string template literals are needed.

This is handy when composing web-components. It can be used in place of Polymer `lit-html`, Preact `html`, etc, and often is a better approach.

- **stl** is very small and very fast because it only does one thing: resolve the string template literal.
- **stl** generates a string, which the browser can parse very quickly

Web-components normally control their content with high precision. Using large DOM-diffing libraries makes little sense here. The simpler appoach is often to simply update the parts of the DOM that need to be updated.
