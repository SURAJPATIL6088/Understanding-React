# useContext API

1. `useContext` is a React hook used to consume context within functional components.
2. It allows functional components to access data or functions provided by a context without needing to use a context consumer.
3. useContext takes a context object created by `React.createContext()` and returns the current context value for that context.

### Provider Component
1. import `{createContext}` from 'react';
2. export const myContext = createContext();
3. ```
    <myContext.Provider value={value}>
        <Child />
    </myContext.Provider>
    ```

### Consumer Component
1. import `{useContext}` from 'react';
2. import {myContext} from './ComponentA.jsx';
3.  ```
    const value = useContext(myContext);
    ```


Note : Basically it avoids the *`prop drilling`.*

### Props Drilling

```
App.jsx
const [name, isName] = useState("John");
    return <ComponentA name={name}/>

    ComponentA.jsx
        return <ComponentB name={name}/>

        ComponentB.jsx
            return <ComponentC name={name}/>

            ComponentC.jsx
                return <ComponentD name={name}/>

                ComponentB.jsx
                    return <div>{user.name}</div>
```



### Here are some common use cases where useContext can be particularly useful:

1. **Theme Switching:** If your application supports theming, you can use useContext to provide the current theme throughout the component tree. Components can then access the theme to adjust their styling accordingly.

2. **User Authentication:** When dealing with user authentication, you might have a user object containing information like the user's name, email, and authentication status. useContext can help propagate this user object to all components that need access to it, such as header components displaying user information or conditional rendering based on authentication status.

3. **Language Localization:** If your application supports multiple languages, you can use useContext to provide the current language preference to all components.

4. **Global State Management:** For small to medium-sized applications, you can use useContext along with the Context API as a simple form of global state management.

5. **Theme Settings:** Beyond basic theming, useContext can also be used to provide more dynamic theme settings, such as allowing users to customize colors or fonts.

6. **Dependency Injection:** In testing scenarios or when building higher-order components, useContext can be used for dependency injection.

7. **Navigation State:** If your application involves navigation between different screens or routes, you can use useContext to provide navigation state and functions to handle navigation actions.

