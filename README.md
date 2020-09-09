# Patient API Documentation

### Day1 - TODOS
- Create Routes for API
- Install Middleware for Express
- Install Database ORM Package (Knex)

# GET STARTED HERE:
- Clone the repo
- Once download is finished - cd into the patient-api directory
- Then run `npm install` to install dependencies
- TO RUN: `npm run start`

### API Routes 
##### Patient API ENDPOINTS
- /patients/create => POST request -- Create a new patient
- /clients => GET request -- Show All patients
- /patients/:id => GET request -- Show 1 patient based on ID
- /patients/update/:id => POST request -- Update a patient based on ID
- /patients/delete/:id => DELETE request -- Delete a patient based on ID


#### USER AUTH ENDPOINTS
- /api/user/register => POST request -- Create a new User
- /api/user/login => POST request -- Login user with creds and produce a signed API Key

### Project Dependencies:
- bcryptjs
- body-parser
- cors
- dotenv
- express
- jsonwebtoken (node version)
- knex (ORM)
- nodemon (hot-reload server on saves)
- pg (POSTGRES)