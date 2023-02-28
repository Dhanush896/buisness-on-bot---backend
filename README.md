
# BACKEND- BUSISNESS ON BOT
- This is a simple Node.js and Express application that provides an API to interact with a PostgreSQL database. The API has two endpoints, /search and /branch, which return information from the record table in the database.

## CREATED BY

- [DHANUSH S](https://www.linkedin.com/in/dhanush-s-47b499240)

## PREREQUISITES
To run this application, you will need:
- Node.js
- PostgreSQL
## GETTING STARTED

- Clone this repository

- Install dependencies: npm install

- Create a PostgreSQL database and import the record.sql file to create the record table

- Update the database connection details in ./queries.js

- Start the server: npm start

## OUTPUT-API Endpoints

- GET /search
![image](https://user-images.githubusercontent.com/115776634/221865994-98a117cc-40e2-4e51-b975-8daac0db1bf0.png)
Retrieves a limited number of records from the record table in the database and returns them as a JSON array.

- GET /branch
![image](https://user-images.githubusercontent.com/115776634/221865863-d3d85540-4bb0-424d-8c26-61ace0f710fb.png)
Retrieves a single record from the record table in the database and returns it as a JSON object.
