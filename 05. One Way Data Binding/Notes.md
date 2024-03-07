# One Way Data Binding


## Implementation of Seach functionality using onChange() method

Note :
serchItem, setSearchItem is an useState hook

```
<div className="main-search-container">
    <input type="text"  className="input-search-bar" placeholder="Search Here..." onChange={(e) => {
        setSearchItem(e.target.value);
    }}/>
</div>
```

We are using the map, filter functions to get the filtered data from the cards

```
  
{
    // here data is the json format
    data
  .filter((val) => {
       if(searchItem == "") 
       {
            return val;
       }      
       else if(val.title.toLowerCase().includes(searchItem.toLowerCase())){
            return val;
       }
  })

  .map((val) => {
    return (
      <div className="card-container-indi" key={val.id}> 
        <img className="card-img" src={val.image} alt={val.title} />
        <h3 className="card-title">{val.title}</h3>
        <p className="card-price">${val.price}</p>
      </div>
    )
  })
}
```
