# Gitlab

We’ll have a master branch, which will hold our “deployed” code. Then, for each task in JIRA, we’ll create a new branch to develop that task.

Merging tasks to master will be done via "Merge Requests", where we can upload our changes and the rest of the team can review it before merging.

![Gitlab usage](images/git.png)

# JIRA

We can use a Kanban style board to manage our tasks.

![JIRA usage](images/kanban.png)

Idea here is to have four columns:

1. **To Do**: tasks that we still have to develop
2. **Doing**: tasks someone in the team is currently developing
3. **Review**: tasks that are ready for code review
4. **Done**: tasks that are already deployed to master

# Plan

Backend: Flask
*Have roughly one API endpoint  for each required functionality of reservation system (See API_reference.md for tentative endpoints, functionality, and required input)
*store information (reservations, user account info) in python dictionaries
*Modularize with classes (User (base class), client (extends user), manager (extends user), reservation system, etc...
*allow data persistence by writing to json file (could be manually or using tinyDB)
*authenticate API calls using a session token provided to users on login (this users can only access/perform operations on specific accounts)
*all data passed in JSON format

Frontend:
Web Interface: React
*serve single html page, create dynamic content using React
*upon user input, communicate with backend via javascript (either XMLHttpRequest or fetch)

CLI:
*make API calls using python requests module
*allows same functionality as web interface
