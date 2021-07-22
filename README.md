# Mega JS learning project

I will use this project to learn and experiment with various parts of the modern JS environment. 
This project is based on the [modern frontend roadmap](https://roadmap.sh/frontend).

## What I will do

I will create the same site in React, Vue and Angular. All of them will make use of TypeScript and Sass. The site will also have access to a backend written in Node and Graphql. Finally the site will also use socket.io.

The sites will also be tested with Jest and Cypress. In this project I will also make use of ESLint and Prettier.

## Project Description

The project will be a website for airplane spotting. The page will list various types of airplanes where users can press a button if they have seen one of the types. This will increment the total amount of times the airplane type has been seen by users.

When the total amount of times is changed, a socket transmission will update the total amount of times for everyone else.

There will also be an admin page where administrators can add or remove airplanes from the listing page. When an airplane is added or removed, a socket transmission will add or remove the airplane for everyone else.

## What I will use

### Backend
- Node
- Graphql (Apollo?)

### Frontend
- React
- Angular
- Vue
- TypeScript
- Sass

### Both backend and frontend
- Socket.io
- Webpack?

### Linters and formatters
- ESLint
- Prettier

### Testing
- Jest
- Cypress
