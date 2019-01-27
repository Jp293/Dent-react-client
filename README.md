## Dent's Functionality (Back-End)
 Dent (Short for Dental Health ) is a web application that can track symptoms and conditions related to the oral cavity. The app works by allowing users to create authenticated accounts which will then give them access to create, view, update or delete logs based on locations in the mouth. Among the symptoms parameters they will be able to report: pain levels, sensitivity, medications, notes etc.

## Links
* [Back-end repo](https://github.com/Jp293/Dent-rails-development)
* [Dent Application](https://Jp293.github.io/Dent-react-client)
* [Heroku Server](https://dent-rails-development.herokuapp.com/)

## Set up and Installation:

* Fork and clone this repository.
* Initiate a new branch `git branch <<branch_name>>`, `<<git checkout -b <<branch_name>>` will create and checkout to newly created branch, preferably for development purposes (NEVER work on the master branch!).
* Checkout to the newly created branch `git checkout <<branch_name>>`.
* Install necessary dependencies `npm install`.
* Finally run  the `npm start` command to create a localhost server for the frontend client.

## Technologies Used

* JavaScript
* React
* JSX
* HTML
* SASS
* Git
* GitHub

## Application Preview

![Image](https://i.imgur.com/hbs20sh.png)

## User Stories:
Auth
As a user, I want to be able to sign up w/ an email & password.
As a user, I want to be able to sign in.
As an authenticated user I want the option to change my password.
As an authenticated user I want the option to sign out.

Resource
As an authenticated user I want to be able to create a symptom log.
As an authenticated user I want to be able to get a symtom log.
As an authenticated user I want to be able to destroy a symptom log.
As an authenticated user I want to be able to update a symptom log.



## Wireframes:

![Wireframe 1](https://i.imgur.com/ZDEwwXx.png)
![Wireframe 2](https://i.imgur.com/d6WqHpp.png)
![Wireframe 3](https://i.imgur.com/eD3dkyA.png)
![Wireframe 4](https://i.imgur.com/g2rwV71.png)



## Thought Process & Execution

* Planning: Initially I planned out the user stories and wireframes to maximize
  efficiency for users and ease of navigation.

* CRUD Actions to Back-end: After setting up the necessary files and forms, I
  tested each feature with API requests. First I created a log, then I set it up so users
  could see their logs upon signing in via GET requests.

* Debug: Removing bugs are warnings was the most challenging part because certain paths
  would leave users stranded without a way to return to the resource content. To remedy
  this situation, buttons and redirection link were implemented.

* Basic CSS on forms: The forms were crowded at first and wouldn't display the
  fields in a user friendly manner so flex and margin features were used to enhance
  the forms visually.



## Future Versions

Although the app is still in its early stages it has potential to enhance the effectiveness for users.
* Version 2: Implement a visual chart of the mouth that users can use as a guide to report their symptoms.
* Version 3: Visual charts can change color based on the status of the tooth via conditional statements. For example:
  - If pain level is less than equal to 3 the tooth image remains green.
  - Else if pain level is in between 4 and 8 the tooth image will turn yellow.
  - Else if pain level is between 8 and 10 the image will change to red.
* Version 4: Add administrators (possibly dentists/healthcare providers) to provide consented data from users to clinics.
* Modernize and improve styling and app interface.
