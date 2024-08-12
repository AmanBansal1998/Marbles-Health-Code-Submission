# Marbles-Health-Code-Submission

Step-by-Step Guide
1. Set Up Your Project
First, create a new directory for your project and initialize it:

mkdir note-taking-api
cd note-taking-api
npm init -y

2. Install Dependencies
Install Express and other necessary packages:
npm install express body-parser swagger-ui-express yamljs

==========
express: Web framework for Node.js
body-parser: Middleware for parsing request bodies
swagger-ui-express: Middleware for serving Swagger UI
yamljs: YAML parser for Swagger documentation
==========
4. Create the Application Structure
Create the following files and directories:
note-taking-api/
│
├── index.js
├── notes.js
├── swagger.yaml
└── package.json

5. Define the Note Model
For simplicity, we'll use an in-memory array to store notes. In a real application, you'd use a database.

notes.js -> required code given in notes.js file  


5. Create the API Endpoints
Create index.js: required code given in index.js file

6. Create Swagger Documentation
Create swagger.yaml: code given in swagger.yaml file

7. Run the Application
Start the server:

node index.js
Visit http://localhost:3000/api-docs in your browser to access the Swagger UI and test your API endpoints.
