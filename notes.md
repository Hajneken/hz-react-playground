# React Hooks 

`use<Something>` is the Syntax 

functions that takes initital state 
and returns 2 things 
 - name of the state 
 - function that updates the state
 
> it is recommended to split state into multiple parts 
```JS
// the initial state of our counter is 0
const Component = () => {
    const [counter, setCounter] = useState(0);
    
render(){
    return(
    <div> 
     <h1>Counter: {counter}</h1>
     <button onChange={setCounter(counter + 1);}></button>
    </div>
)
}
}

...
```

```JS
// somewhere we use our state with counter 
function handleEvent(e){
    setCounter(counter + 1);
}
```

