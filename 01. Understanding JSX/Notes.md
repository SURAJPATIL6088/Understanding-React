# Understanding JSX

## JSX Basics 
1. JSX looks like HTML, but it is embedded within JavaScript code.


### Passing Object

1. Object Creation
  ```
  const user = {
    firstName: "Reacher",
    lastName: "Bhai",
    job: "Special Investigator",
    avtarUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/19/Reacher_TV_poster.jpg",
  };
  ```

2. Using the Object
```
  const Information = (user) => {
    return `Her name is ${user.firstName} ${user.lastName}. he is a ${user.job}.`;
  };
```
3. Use these function in the main with Curly brace `{}` with passing function parameters. <br>
```{Information(user)}```

### Root Element

1. to get the root element
```
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
```