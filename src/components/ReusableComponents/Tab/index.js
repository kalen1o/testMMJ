import React from 'react';
import classes from './Tab.module.css';

let Tab = (props) => 
	<div 
		className={classes.tab + ' ' + (props.active ? classes[props.active] : '')}
		onClick={props.onTabClick}
	>
		{props.text}
	</div>

export default Tab;