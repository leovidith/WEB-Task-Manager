# WEB Task Manager

A simple web application for managing tasks efficiently.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Driver Code](#driver-code)

## About

This project is a web-based task manager that allows users to add, delete, and mark tasks as completed.

## Features

- Add new tasks
- Delete existing tasks
- Mark tasks as completed
- Simple and user-friendly interface

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Setup

To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/leovidith/WEB-Task-Manager.git
    ```
2. Navigate to the project directory:
    ```bash
    cd WEB-Task-Manager
    ```
3. Open `index.html` in your preferred web browser.

## Usage

1. Open the web application.
2. Add tasks by typing into the input field and clicking "Add Task."
3. Delete tasks by clicking the "Delete" button next to each task.
4. Mark tasks as completed by clicking on the task.

## Driver Code

Below is a snippet of the JavaScript code responsible for managing tasks:

```javascript
document.querySelector('#push').onclick = function() {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please enter a task");
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function() {
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value = "";
    }
}
```
