import React from 'react';
import classes from './Card.module.css';

let Card = props => {
	return (
		<div className={classes.card}>
			<div 
				style={{
					position: "relative",
				}}
				className={props.card.new ? classes.new + " " + classes.triangle : classes.triangle}
			>
				{props.card.new && <h2 className={classes.newTitle}>Mới!</h2>}
				<img src={props.card.image} alt={props.card.name} style={{display: "block"}}/>
				<div className={classes["info-wrapper"]}>
					<div>
						<div className={classes.info}>
							<div 
								style={{
									display: 'inline-block',
									float: "left",
									width: 15,
									height: 15,
									borderRadius: '50%',
									marginLeft: 10,
									marginRight: 10,
									background: props.card.status === 0 ? "#53ff00" : props.card.status === 1 ? "#f9e03d" : "#c6c5cd"
								}}
							/>
							<h3>{props.card.name} - {props.card.yearsOld}</h3>
						</div>
						<h4>{props.card.city}</h4>
					</div>
					<div>
						<h5>Like</h5>
						<h6>{props.card.like}%</h6>
					</div>
				</div>
			</div>
			<div style={{padding: 15}}>
				<p>Nghề nghiệp</p>
				<p className={classes.work}>{props.card.work}</p>
				<div className={classes["button-wrapper"]}>
					<button type="button" className={classes.btn}>Trò chuyện</button>
					{Boolean(props.card.chat) && <p className={classes.chat}>{props.card.chat}</p>}
				</div>
			</div>
		</div>
	)
}

export default Card;