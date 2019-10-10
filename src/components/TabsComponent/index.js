import React from 'react';
import classes from './TabsComponent.module.css';
import Tab from '../ReusableComponents/Tab';

let tabs = ["Tab 1", "Tab 2", "Tab 3", "Tab 4"];

let TabsComponent = (props) => {
	return (
		<div className={classes["tab-wrapper"]}>
			{tabs.map((tab, index) => (
				<Tab 
					text={tab} 
					onTabClick={props.onTabClick}
					active={props.activeTab === index + 1 ? 'active' : null}
					key={Math.random()}/>
			))}
		</div>
	)
}

export default TabsComponent;