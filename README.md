# CS465 Full Stack Development

Coursework, projects, and assignments for SNHU CS465 Full Stack Development.

## Technologies
- Angular
- Node.js
- Express
- MongoDB
- Postman
- GitHub

## Author
Hassan Lindsay

**CS 465 Module Eight Journal Reflection**

**Architecture**

Throughout this course I worked with several different approaches to frontend development. The customer-facing side of the Travlr Getaways application was developed using Express, Handlebars templates, HTML, CSS, and JavaScript. Initially, pages were created as static HTML files, but they were later converted into Handlebars templates that dynamically rendered data from JSON and MongoDB. This approach allowed the server to generate complete pages before sending them to the browser.

The administrator side of the application was developed using Angular as a single-page application (SPA). Unlike the Express website, Angular loads a single application and dynamically updates content without requiring full page refreshes. Angular components, services, models, and routing provided a more responsive and interactive user experience. The SPA communicated directly with the backend REST API to retrieve and update data.

The backend used MongoDB because it is a NoSQL database that stores data as flexible JSON-like documents. This structure worked well for travel package data because records can be stored and retrieved efficiently without requiring a rigid relational schema. MongoDB also integrates naturally with JavaScript, Node.js, Express, and Angular as part of the MEAN stack.

**Functionality**

JSON differs from JavaScript because JSON is a data-interchange format while JavaScript is a programming language. JSON is used to organize and transfer data between the frontend and backend. In the Travlr Getaways application, the Express API returned trip data as JSON, Angular consumed that JSON, and MongoDB stored data in a document structure that closely resembles JSON. This allowed all layers of the application to communicate consistently.

Several examples of refactoring occurred throughout the development process. Static HTML pages were converted into reusable Handlebars templates, reducing duplication and improving maintainability. Later, Angular components such as Trip Listing, Trip Card, Add Trip, Edit Trip, Login, and Navbar were created to separate functionality into reusable pieces. Services such as TripDataService and AuthenticationService centralized API communication and authentication logic.

Reusable UI components provide several benefits. They improve maintainability, reduce duplicate code, increase consistency throughout the application, and make future enhancements easier to implement. By reusing components and services, development becomes more efficient and the application becomes easier to scale.

**Testing**

Testing was performed throughout the development lifecycle. Postman was used extensively to test RESTful API endpoints, including GET, POST, and PUT requests. These tests verified that trip data could be retrieved, created, and updated successfully through the Express API.

MongoDB Compass was used to validate that documents were being stored and updated correctly within the database. This allowed verification that API requests were successfully modifying MongoDB records.

Additional testing was completed within the Angular SPA to ensure that data was displayed correctly and that changes made through the interface were reflected in the database. Browser developer tools were used to monitor requests, responses, and application behavior.

Security introduced additional testing requirements. Authentication was implemented using JSON Web Tokens (JWTs). Login functionality was tested to verify that valid credentials generated a token and that the token was stored correctly in local storage. JWT.io was used to inspect and validate token structure and contents. Protected API endpoints were tested to confirm that unauthorized requests were rejected while authenticated requests were permitted. This process strengthened my understanding of HTTP methods, REST endpoints, middleware, and authentication security within a full stack application.

**Reflection**

This course significantly expanded my understanding of full stack development and helped me move closer to my professional goal of becoming a software developer. Prior to this course, most of my programming experience involved individual assignments and smaller applications. Through Travlr Getaways, I learned how the frontend, backend, database, and security layers work together as a complete software system.

One of the most valuable skills I developed was working with RESTful APIs and understanding how data flows between client and server applications. I also gained experience using MongoDB, Express, Angular, Node.js, Postman, MongoDB Compass, and JWT authentication. Learning how to design APIs, build a single-page application, implement authentication, and secure administrative functionality provided practical experience that mirrors real-world software development.

This course also reinforced the importance of planning, testing, debugging, and refactoring. Building the application incrementally allowed me to see how each layer contributed to the overall system architecture. As I continue pursuing opportunities in software development, the knowledge and hands-on experience gained in this course will make me a stronger and more marketable candidate.
