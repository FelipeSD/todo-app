# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW).
Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the 
page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long 
the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free 
option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, 
feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Flexbox
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- [Styled Theming](https://www.npmjs.com/package/styled-theming) - Handle Theme changes

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I learned how to use styled components. Using this library is helping me to understand how to really make shared components.
Also, the styled theming library was useful to switch over themes with no css variables, but I think it could be easier to
use them with specific classes for theming.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts 
you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [React Dark Mode with Styled Theming and Context](https://rossbulat.medium.com/react-dark-mode-with-styled-theming-and-context-57557de6400) - 
  This helped me how to set up themes in an app. I really liked this pattern and will use it going forward.

## Author

- Frontend Mentor - [@FelipeSD](https://www.frontendmentor.io/profile/yourusername)

## Acknowledgments

I've learned about how to show or hide a component by hovering its parent. In react, I set a list
for all registered tasks. Active states of this project require to show the delete button (cross button) only by 
hovering the parent task. To do that, was necessary to separate, individually, the task component, so each
task should be treated with its own hover state.

[I was helped by reading this on stackoverflow](https://stackoverflow.com/questions/50633499/reactjs-hover-mouseover-effect-for-one-list-item-instead-of-all-list-items)
