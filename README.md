# Octalogic Tech Web-Test
## Table of Contents

| Task | Description |
| ----------- | ----------- |
| [ Task 1 ](#task-1) | Git |
| [ Task 2 ](#task-2) | React |
| [ Task 3 ](#task-3) | Request |
| [ Task 4 ](#task-4) | NodeJS |

### Task 1

- Fork this repo to your github account
- Clone the newly forked repository into a local folder
- Create a new branch from the master branch and name it after your first name.
  - If your name is "Glenn Fernandes" branch name should be "glenn"

### Task 2

- Create 4 React Components. They should all be at the same level( Siblings )
  - A component that has an input element
  - A component that has a button element
  - A component that has a text field that has the text "N.A"
  - 1 checkboxe for "admin" (_if the checkbox is checked then the value should be admin_)
- Add css to the button ( Either CSS-in-JS or SASS ). Add padding of 1rem, add 2rem margin to the top and make the buttons color red

### Task 3

- User can only enter a number ( 0,1,2,3,4,5,6,7,8,9)
- User can only enter between 0 and 9
- Onclick of the button, get the value inputted into the input element and send it as a post request to the nodeJS backend API
- Display the data received from the API in the Text Field


### Task 4

- create 2 routes
  - 1. /process/
  - 2. /process/admin

- Use the joi validation library as a middleware to make sure that the user passes a payload which looks like the following. Also make sure that the validations match the frontend validations.(_the user should not be able to enter a value other than the ones mentioned above_)

```json
{ 
  "value": 7
}
```
- If "admin" checkbox is checked make a call to route 2 ( ``` /process/admin ```) if not then make a call to route 1 ( ``` /process/ ``` )
- the admin call can only be made when a token is passed in the request header. **Hint: use the authorization header to pass the data**
- The token should be a base64 encode of the word **iamadmin**. When the token is received in the backend, make a check for the same. If the token is not passed or the incorrect token is passed throw the appropriate error.

- public api can be called by anyone

- Once the data is received by either endpoints, use [Faker Library](https://github.com/Marak/Faker.js) to generate a random company name and send it back

``` 
Note: If backend cannot be created mock the data on the front end with the same capabilities 
```

- Push up code to your repository and share the code with us
