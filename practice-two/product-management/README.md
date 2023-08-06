# Product Management

## Overview

- This document provides information about React Practice Two to build a website for Product Management.

## Design

- Mentee self-modifying the design to make it suitable
- Based on this design:
  - [Link 1](https://nicepage.com/templates/preview/we-design-digital-products-and-brands-4745875?device=desktop)
  - [Link 2](https://nicepage.com/templates/preview/visual-and-product-design-3109323?device=desktop)

## Targets

- Apply SWR for fetching data from the json-server.
- Apply the useContext and useReducer for state management.
- Unit test coverage should be greater than **80%**.
- Avoid unnecessary re-renders.
- Apply the React Component Library [Chakra UI](https://chakra-ui.com/).
- Using the Lighthouse tool to check the performance score over **95**

## Requirements

- Build the application to manage the list of products with the features below
  - The user can add and delete products.
  - The user will be redirected to the product detail page when they click **"More"** on the product.
  - The user can edit the product information on the product detail page.
  - The product data will be kept when the user refreshes the page.

## Information

📅 **Timeline**

  - Estimate time: 5 days (Aug 03, 2023 - Aug 09, 2023)
  - Actual time: ... days

💻 **Techniques**

  - HTML5/CSS3 [Latest]
  - TypeScript [ver 5.1.6](https://www.typescriptlang.org/)
  - JSON Server [ver 0.17.3](https://github.com/typicode/json-server)
  - React [ver 18.2.0](https://react.dev)
  - Storybook [ver 7.2](https://storybook.js.org/)
  - Eslint [ver 8.46.0](https://eslint.org/docs/latest/use/getting-started#quick-start)
  - Prettier [ver 3.0](https://prettier.io/)
  - Husky [ver 8.0.3](https://typicode.github.io/husky/#/)
  - CommitLint [ver 17.6.7](https://commitlint.js.org/#/)
  - SWR [ver 2.2.0](https://swr.vercel.app/)
  - Jest [ver 29.6.2](https://jestjs.io/docs/getting-started)
  - React Testing Library [ver 14.0.0](https://testing-library.com/docs/)
  - Chakra UI [ver 2.7.1](https://chakra-ui.com/)

📝 **Editor** 
- Visual Studio Code.

📄 **Estimate file** [here](https://docs.google.com/document/d/1YMRJC0DoUG6ZQj0bdinKrH3H6vbA145L5U7l8ZMuT8s/edit?usp=sharing)

## Development Environment

- Certainly! To run this website, you will need to have the following tools installed:
  - Node [v20.2.0](https://nodejs.org/en/)
  - pnpm [v8.6.11](https://pnpm.io/installation)

- You can download **Node.js** from their official website and pnpm can be installed globally by running the command:
  ```
  npm install -g pnpm
  ```
- Once you have these tools installed, you can follow the steps provided in the **"Getting Started"** section to clone the repository, install the necessary packages, and start the development server.

## UserFlow Diagram

![Main features](src\assets\images\UserFlow_Diagram.png)

## Getting Started
- **Step 1:** Clone repository

- With HTTPS :
  ```
  git clone https://gitlab.asoft-python.com/giang.nguyen/reactjs-training.git
  ```
- With SSH:

  ```
  git clone git@gitlab.asoft-python.com:giang.nguyen/reactjs-training.git
  ```

- **Step 2:** Move to branch **practice-two**

  ```
  git checkout practice-two
  ```

- **Step 3:**: Move to folder **product-management**

  ```
  cd practice-two/product-management
  ```

- **Step 4:** Now you need to install packages

  ```
  pnpm i
  ```

- **Step 5:** After installing the packages

  ```
  pnpm start
  ```

- **Step 6:** Open [localhost](http://localhost:5173) to see the website

## How to run the Storybook

- Build the Storybook with this command

  ```
  pnpm run build-storybook
  ```

- Start the Storybook with this command
  ```
  pnpm run storybook
  ```
- View the Storybook on port: `http://localhost:6006`

## How to run the Unit Test
- Start the Unit Test by Jest with this command
  ```
  pnpm run test
  ```
- Start the Coverage Report with this command
  ```
  pnpm run test-coverage
  ```