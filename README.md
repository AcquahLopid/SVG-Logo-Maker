# SVG-Logo-Maker

## Table Of Contents
*[Technology Used](#technology-used)

*[Description](#description)

*[Installation](#installation)

*[Code Snippet](#code-snippet)

*[Video Example](#video-example)

*[Credits](#credits)

*[Author](#author)

## Technology used

| Technology Used         | Resource URL  |
| -------------           |:-------------:|
| Node.js                 | [https://nodejs.org/en](https://nodejs.org/en) | 
| npm                     | [https://www.npmjs.com/](https://www.npmjs.com/)      |
| Jest                    | [https://www.npmjs.com/package/jest?activeTab=readme](https://www.npmjs.com/package/jest?activeTab=readme) |
| Inquirer                | [https://www.npmjs.com/package/inquirer](https://www.npmjs.com/package/inquirer)
| Git                     | [https://git-scm.com/](https://git-scm.com/)     | 
| JavaScript              | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| SVG                     | [https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial) |

## Description
save time on making logos! this application takes in information like text you want in the logo, text color, shape, and shape color. it compiles all of this information and creates a logo for you.
You have to answer some prompts in order to generate your logo!

## Installation
first you are going to type "npm install" then you will type "node index.js" both in the terminal then answer the prompts that appear.

if you need extra help navigating the terminal refer to my [Video Example](#video-example) down below.
## Code Snippet
This function initializes the application and gets the prompts we created and creates a Logo. Then it writes the data we received from the user into that logo like characters, color, and shape chosen.

```JavaScript
function init() {
    inquirer 
    .prompt(questions)
    .then((data) => {
        console.log(data);
        const fileNameForLogo = `Assets/logo.svg`;
        writeToFile(fileNameForLogo, data);
    });
}
init();
```
## Video Example
[Video Example Of Creating Logo](./Media/25.04.2023_01.56.33_REC.mp4)

[Screenshot of Created Logo](./Media/Screenshot%202023-04-25%20015954.png)
## Credits
[Circle SVG W3Schools](https://www.w3schools.com/graphics/svg_circle.asp)

[Square SVG W3Schools](https://www.w3schools.com/graphics/svg_rect.asp)

[Polygon SVG W3Schools](https://www.w3schools.com/graphics/svg_polygon.asp)

[Render Method](https://upmostly.com/tutorials/understand-the-render-method-and-rendering-in-react)

[Jest testing](https://jestjs.io/docs/getting-started)

[it() explanation help with my testing](https://www.delftstack.com/howto/javascript/javascript-it/)

## Author
```MD
### Emanuel Molina

[GitHub](https://github.com/AcquahLopid)
[LinkedIn](https://www.linkedin.com/in/emanuel-molina-65b84426b/)
[GitLab](https://ucb.bootcampcontent.com/emanuelmolina2k-BAsayK)

```