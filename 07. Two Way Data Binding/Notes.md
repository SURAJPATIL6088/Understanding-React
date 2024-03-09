# Two Way Data Binding

`Data-binding` is a technique that binds data sources from the provider and consumer together and synchronize them.

**Note :  In React there is no two way data binding (not available by default).**

So when we have to implement two way data binding so we have to write like `listening events (onChange)`.

## Handling Forms :

1. **Initializing State:** Begin by initializing state variables in your component to hold the form data. Each input field in the form will correspond to a state variable.

2. **Binding Input Fields to State:** Bind the value attribute of each input field to its corresponding state variable. This ensures that the input fields display the current value from the component's state.

3. **Handling Input Changes:** Define event handlers for the onChange event of each input field. These event handlers will update the corresponding state variables whenever the user types into the input fields.

4. **Updating State:** When the user types into an input field, the onChange event triggers the event handler, which updates the state variable. React automatically re-renders the component with the updated state, causing the input fields to reflect the new values.

5. **Submitting the Form:** When the form is submitted, you can access the current state values to perform any necessary actions, such as validation or sending the data to a server.