# React Hook - useMemo, useCallback

## useMemo

**Description:** 
1. useMemo memoizes the result of a function computation and re-runs the computation only when its dependencies change. It's useful for optimizing performance by *caching* expensive calculations.
2. passing it a function and an array of dependencies.
3. Bassically Caching is done in the useMemo hook

<br>

**Use cases:** Memoizing computed values, expensive calculations, or any value that can be derived from props or state to avoid unnecessary re-calculations.

*syntax:*
```
const memoizedValue = useMemo(() => computeValue(a, b), [a, b]);
```

**example:**
1. In this if we do not use the useMemo hook it will cause to the whole application. every time it will re-compute the loop
2. whareas by using the useMemo hook it calculates the first time only and then puts in the cache so no need to do the calculations again & again on the time of re-rendering.
```
const memoizedValue = useMemo(() => {
    let i = 1;
    while(i < 2000000000000){
        i++;
    }

    console.log("useMemo Hook");
    return 1;
}, [val]);
```


<hr>

## useCallback

The useCallback hook in React is used to memoize functions, meaning it returns a memoized version of the callback function that only changes if one of the dependencies has changed. This optimization is useful when passing callbacks to child components that rely on reference equality to prevent unnecessary re-renders. By wrapping the callback function with useCallback, you ensure that the same function reference is returned unless its dependencies change, thus optimizing performance by avoiding unnecessary re-renders. It takes two arguments: the callback function and an array of dependencies. If any of the dependencies change, the memoized callback function will be re-created.

**Description:** 
1. useCallback memoizes a callback function, preventing it from being recreated on every render unless its dependencies change. 
2. This optimization is useful for passing callbacks to child components that rely on reference equality for performance optimizations.

**Use cases:** Optimizing performance by preventing unnecessary re-renders of child components that depend on callback functions, such as event handlers passed as props.

*syntax:*
```
const handleChange = useCallback((e)=>{
    // codee
},[])
```
**Note:** This hook takes the two parameters,
1. function that going to call itself
2. dependency array

