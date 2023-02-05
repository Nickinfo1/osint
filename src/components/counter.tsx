import React, {useState, useEffect} from 'react';
import classes from './Counter.module.scss';

export const Counter = ()=>{

	const [count, setCount] = useState(0);

	const increment = ()=>{
		setCount(count+1);	
	}

	useEffect(()=>{
		document.title = `clicked ${count} times`;
	})

	return (
		<div className={classes.btn}>
			<h1>{count}</h1>
			<button  onClick={increment}>Increment</button>
		</div>
	);
	
} 
