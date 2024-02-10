## Redux Basics. Redux toolkit and React library-Redux hooks

### Task - Admission criteria

Use this
[React project template](https://github.com/goitacademy/react-homework-template/blob/main/README.en.md)
as a starting point for your application.

- The react-hw-06-phonebook repository has been created.
- When turning in homework, there are links to: the source files and working
  pages of each project on `GitHub Pages'.
- Redux-state stores the minimum required set of data
- There are no errors or warnings in the console when running the job code - For
  each component has a separate folder with the React component file and styles
  file
- For components described `propTypes`.
- Use of the library `Redux Toolkit

### Contact book

Refactor the "Contact Book" application code by adding state control using the
[Redux Toolkit] library
([https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)). Let the Redux
state look like this.

```javascript
{
   contacts: [],
   filter: ""
}
```

- Create a repository with `configureStore()`
- Use createSlice()
- Create actions to save and delete a contact, and update the filter
- Link React-components to Redux-logic with bibliothec hooks
  [react-redux](https://react-redux.js.org/)
- Use the Redux Persist library to save an array of contacts to local storage
