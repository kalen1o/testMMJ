import React from 'react';
import classes from './Content.module.css';
import Sub from '../ReusableComponents/Sub';
import Card from '../ReusableComponents/Card';

let subs = ["Sub 1", "Sub 2", "Sub 3", "Sub 4", "Sub 5"]

class Content extends React.Component {
	state = {
		activeSub: 1
	}

	onSubClick = (event) => {
		if(this.state.activeSub === +event.target.innerHTML.slice(4, event.target.innerHTML.length)) return
		this.setState({activeSub: +event.target.innerHTML.slice(4, event.target.innerHTML.length)})
	  }

	render() {
		let { activeSub } = this.state;
		return (
			<div>
				<div className={classes["subs-wrapper"]}>
					<div className={classes.scroll}>
						{subs.map((sub, index) => (
							<Sub 
								text={sub} 
								onSubClick={this.onSubClick.bind(this)} 
								active={this.state.activeSub === index + 1}
								key={Math.random()}
							/>
						))}
					</div>
				</div>
				<div className={classes["users-wrapper"]}>
					<h1 className={classes.title}>Title for sub {activeSub}</h1>
					<div className={classes["cards-wrapper"]}>
						{this.props.users[activeSub - 1].map(card => (
							<Card card={card} key={Math.random()}/>
						))}
					</div>
				</div>
			</div>
		)
	}
}

export default Content;