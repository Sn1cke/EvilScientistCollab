# evil-scientist
A simple program to add, load and view a list of scientists.

## Description of assignment
Create a web page with three sections:

* a form to add a new evil scientist
* a list of all evil scientists
* a detail view of one evil scientist

### The form
The form should have input fields for name, age, number of henchmen and a short description. Also a button. The user is expected to fill in the form and click the button to add a new evil scientist. The name is added to the middle sections list of names. The rest of the data is stored in an array.

### The list
All added evil scientist should be listed here by name. If you click on a name that scientist is shown in the detail view to the right.

## Suggestions
* Create a type alias for an evil scientist object
* Create an array of evil scientist objects
* You need an eventlistener on the Add button
* The event listeners callback should
* *  read all data from form input fields and then empty the input fields
* *  add all data to array
* *  add a new div for the name
* *  add an event listener to div with name
* *  name div eventlistener should show all details from array to detail view

## Technologies
* Typescript
* HTML
* CSS