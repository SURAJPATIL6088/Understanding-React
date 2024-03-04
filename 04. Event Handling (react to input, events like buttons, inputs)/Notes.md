# Event Handling

In React, there are various types of event handlers that you can use to handle different user interactions. Here are some commonly used ones:

1. onClick: Handles click events, typically used with buttons, links, or any clickable elements.

```
<button onClick={handleClick}>Click me!</button>
```

2. onChange: Handles changes in input elements like text fields, checkboxes, and select dropdowns.

```
<input type="text" onChange={handleChange} />
```

3. onSubmit: Handles form submission events. Useful for validating form data and preventing default form submission behavior.

```
<form onSubmit={handleSubmit}>
  {/* Form elements */}
  <button type="submit">Submit</button>
</form>
```

4. onMouseOver/onMouseOut: Handles mouse hovering events over an element.

```
<div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
  Hover over me!
</div>
```

5. onFocus/onBlur: Handles focus and blur events on input elements. Useful for form validation or styling changes.

```
<input type="text" onFocus={handleFocus} onBlur={handleBlur} />
```

6. onKeyDown/onKeyUp/onKeyPress: Handles keyboard events like key presses, key releases, and continuous key pressing.

```
<input type="text" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />
```

## Important 
if we have to pass an arguments to the handleClick then we have to use an anonymous arrow function

```
<button
  onClick={() => handleBtnClick("Blue")}
  className="btn-color">Blue
</button>
```