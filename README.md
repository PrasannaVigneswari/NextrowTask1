# Todo List and singup Web App

1. Create a to-do list application using create-react-app .
2. Create a basic signup form using material-ui components. The form should contain 
    2.1 Name (first and last)
    2.2 Email
    2.3 Password
    2.4 login button
3. Style the page using tailwind css
4. Implement basic validation for email and button click. Display validation messages if something is wrong.
5. Implement the login button click function and redirect the user to to-do list page - use react router
6. Display the user name on the to-do list page(for time being).



## Description

This project is a web application built using Reactjs ,MUI and Tailwind css. It provides users with the ability to login, and manage their to-do lists.

## Features

- User registration with first name, last name, email, and password.
- Adding, removing, and managing to-do list items.
- greeting with the user's first name.

 
### Technologies Used

React: A JavaScript library for building user interfaces.

Material-UI: A popular React UI framework that provides pre-built components with a Material Design look and feel.

Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces.


### Installation

run this application locally, follow these steps

1. npx create-react-app name-of-your-project
2. cd name-of-your-project
3. npm install @mui/material @emotion/react @emotion/styled
4. npm install @mui/icons-material
5. npm install -D tailwindcss
    <!-- Add the Tailwind directives to your CSS
    Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.
    @tailwind base;
    @tailwind components;
    @tailwind utilities; -->
6. npx tailwindcss init
7. npm install react-router-dom
8. npm start

### Usage


1. Open the application.
Enter your first name, last name, email, and password.
Click the "Login" button to create an account.

2. Add a to-do item:
After signing in, you'll be greeted with your first name.
Enter a new task in the text field labeled "Add a new todo."
Click the "Add" button to add the task to your to-do list.

3. Remove a to-do item:
Each task in your to-do list is displayed with a "Remove" button.
Click the "Remove" button next to a task to delete it from your list.

4. Personalized Greeting:
After signing in, you'll see a personalized greeting with your first name at the top.




