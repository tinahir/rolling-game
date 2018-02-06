Steps to run the application

1. npm install
2. cd client
3. npm install
4. cd.. // back to root folder
5. npm start
6. http://localhost:3000/

Overview

The application is a simple game which can display a random outcome generated on the server.
Requirements

General

- The user must be able to trigger a request for outcome to the server

- The outcome must be displayed to the user using the provided graphical resources (Symbol_0.png,
Symbol_1.png,…)

- The type of win must be displayed to the user (No Win, Small Win, Big Win)

- A bonus feature must be implemented. If the server returns bonus, the client must first display any
win to the user, then trigger an additional request without any user input (this must also be indicated
to the user in some form)Server

- Server must be able to receive requests from client and return an outcome (three random integers
between 0-5).

- There must be three types of outcomes: No Win, Small Win, Big Win. Two equal integers constitutes a
Small Win. Three equal integers constitutes a Big Win.

- Server must randomly (in addition to the outcome) return if bonus feature should be triggered or not.