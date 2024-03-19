# React Hooks - useRef, useReducer

## useRef

**Description:** useRef returns a mutable ref object whose .current property is initialized to the passed argument. The returned object persists for the full lifetime of the component.

**Use cases:** *Accessing and modifying DOM elements imperatively*, storing mutable values that persist across renders (without causing re-renders).

**syntax:**33

```
const inputRef = useRef(null);
```

1. It returns the Object.
2. it does not need re-rendering.
3. n 0

<hr>

## useReducer