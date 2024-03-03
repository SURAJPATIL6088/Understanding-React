# Props

1. ***Passing Data:*** You can pass data from a parent component to a child component by specifying attributes in the JSX of the parent component.

2. ***Accessing Props:*** In the child component, you can access these passed data using the props object. Props are accessed like function parameters inside the component.

3. ***Immutable:*** Props are immutable, meaning that child components cannot modify the props received from their parent. They are purely used for one-way communication.

4. ***Dynamic Values:*** Props can hold various types of data such as strings, numbers, objects, or even functions. This flexibility allows you to create dynamic and interactive components.

5. ***Reusability:*** By passing different props, you can reuse the same component in different parts of your application, displaying different data or behavior based on the props received.
<br>
Overall, props play a crucial role in React for building reusable and composable components. They facilitate the flow of data in a React application, enabling a clear and efficient component hierarchy.

<hr>

## Note: 
1. To Understand the Working of an Todo App with props here we are taking the parent component as an `TodoApp.jsx`.<br> 
2. the child component as `UserDashboard.jsx` and `TodoList.jsx` 
3. from the parent conponent we will pass the `props` that we be accessible by the child component.

## Types of Props : 

1. **Object Destructuring in props :** <br>
Object destructuring in props is a technique in React that allows you to extract specific properties from the props object more conveniently. Instead of accessing props directly through the props object, you can destructure the props object to extract only the properties you need.
```
  // Without object destructuring
  // const name = props.person.name;
  // const age = props.person.age;
  // const gender = props.person.gender;

  // With object destructuring
  const { name, age, gender } = props.person;
```

2. **Spread Operator in props :** <br>
The spread operator (...) in props is a feature in React that allows you to pass all properties of an object as separate props to a component. It provides a concise way to pass multiple props to a component without explicitly listing each property.
```
<ChildComponent {...person} />
```


## Assignment :  <br>
![alt text](Props-(data-through-props-re-render-when-props-change)/src/Images/assignment.png)