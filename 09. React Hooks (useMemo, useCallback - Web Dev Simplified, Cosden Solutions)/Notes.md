# React Hook - useMemo, useCallback

# useMemo

**Description:** 
1. useMemo memoizes the result of a function computation and re-runs the computation only when its dependencies change. It's useful for optimizing performance by caching expensive calculations.
2. passing it a function and an array of dependencies.
<br>

**Use cases:** Memoizing computed values, expensive calculations, or any value that can be derived from props or state to avoid unnecessary re-calculations.

*syntax:*
```
const memoizedValue = useMemo(() => computeValue(a, b), [a, b]);
```




<hr>
# useCallback

*syntax:*
```

```

