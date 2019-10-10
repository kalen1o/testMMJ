import React from 'react';
import classes from './Sub.module.css';

let Sub = (props) => 
	<button className={classes.btn} onClick={props.onSubClick}>
		{props.active && props.text}
		{!props.active && <div className={classes.active}>{!props.active ? props.text : null}</div>}
	</button>

export default Sub;
