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
6. Display the user name on the to-do list page.

5. Implement the login button click function and redirect the user to to-do list page - use react router 
6. Display the user name on the to-do list page(for time being).
7. For the todo-list component and allow users to 
    7.1 Add new tasks
    7.2 Mark tasks as completed
    7.3 Delete tasks
8. Use material-ui components like TextField, Button, Checkbox, and List to create the user interface for adding and displaying tasks and tailwind to style the UI elements
9. Implement a dynamic tasks list and update it as per the user's actions.
10. Use local storage to save the tasks data and persist the data even after page refresh.
11. Add validation wherever possible like for submitting an empty task or deleting a task accidentally.
Design the UI in a user friendly manner and follow the coding conventions.

## Description

This project is a web application built using Reactjs ,MUI and Tailwind css. It provides users with the ability to login, and manage their to-do lists.
Add validation wherever possible like for submitting an empty task or deleting a task accidentally.

## Features
- User registration with first name, last name, email, and password.
- Create and add new tasks.
- Mark tasks as completed.
- Delete tasks.
- Clear all tasks.
- Store tasks in the local storage to persist data.
- greeting with the user's first name.
 
### Technologies Used

React: A JavaScript library for building user interfaces.

Material-UI: A popular React UI framework that provides pre-built components with a Material Design look and feel.

Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces.

Local Storage (for data persistence)


### Installation

run this application locally, follow these steps

1. npx create-react-app task
2. cd task
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

3. Managing Task
Each task is displayed in the list with a checkbox, the task name, and a delete button.

Marking Tasks as Completed:
To mark a task as completed, click the checkbox.

Deleting Tasks:
To delete a task, click the trash can icon next to the task name. A confirmation dialog will appear to ensure you want to delete the task.

Clearing All Tasks:
If you want to clear all tasks from your to-do list, click the "Clear" button at the bottom of the list. A confirmation dialog will appear to ensure you want to clear all tasks.

Local Storage:
Your tasks are stored in the local storage of your web browser, which means they will persist even if you close the application or refresh the page. To clear all stored tasks, use the "Clear" button.






