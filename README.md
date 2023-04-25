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
| Git                     | [https://git-scm.com/](https://git-scm.com/)     | 
| JavaScript              | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |

## Description
Making README.md's is very much needed for every project you work on, most of the time README's contain pretty similar layouts. Here I created a template that anyone can use in order to create a professional README page. it comes in handy when you are trying to save time on making the basic layout and commit more time to your code. The template contains the title of your project and Description section , Table of Contents, Installation, Usage, License and badges, Contribution section, Tests, and an Author section. 

You have to answer some prompts in order to generate your README.md!

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
[Video Example Of Creating Logo](./Video/Professional-README-Generator%20-%20Visual%20Studio%20Code%202023-04-21%2000-31-49.mp4)

[Screenshot of Created Logo](./Video/Screenshot%202023-04-21%20004401.png)
## Credits
[Circle SVG W3Schools](https://www.w3schools.com/graphics/svg_circle.asp)

[Square SVG W3Schools](https://www.w3schools.com/graphics/svg_rect.asp)

[Render Method](https://upmostly.com/tutorials/understand-the-render-method-and-rendering-in-react)

[Badges](https://naereen.github.io/badges/)



## Author
```MD
### Emanuel Molina

[GitHub](https://github.com/AcquahLopid)
[LinkedIn](https://www.linkedin.com/in/emanuel-molina-65b84426b/)
[GitLab](https://ucb.bootcampcontent.com/emanuelmolina2k-BAsayK)

```