# React Hook : useEffect

Docs : [React Hook : useEffect](https://react.dev/reference/react/useEffect)

### Syntax: <br> 
**useEffect(function, [dependencies])**

### Lifecycle Phases : 
1. initialization (initial render happens)
2. mounting (initial render + empty dependency array happens)
3. Updatation (initial render + re-render on changes in dependency array happens)
4. unmounting

### Consider these 3 cases : 

1. Passing a dependency array
If you specify the dependencies, your Effect runs after the initial render and after re-renders with changed dependencies.
```
useEffect(() => {
  // ...
}, [a, b]); // Runs again if a or b are different
```

2. Passing an empty dependency array
If your Effect truly doesn’t use any reactive values, it will only run after the initial render.
```
useEffect(() => {
  // ...
}, []); // Does not run again (except once in development)
```

3. Passing no dependency array at all
If you pass no dependency array at all, your Effect runs after every single render (and re-render) of your component.
```
useEffect(() => {
  // ...
}); // Always runs again
```


### USES
1. Event Listeners
2. Subscriptions (real-time updates)
3. Fetching Data from an API
4. Clean up when component unmounts

