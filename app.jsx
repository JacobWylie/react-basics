const Header = (props) => {
	return (
 		<div className="header">
 			<h1>{props.title}</h1>
 		</div>
		);
}

Header.propTypes = {
	title: React.PropTypes.string.isRequired,
};

const Counter = (props) => {
	return (
		<div className="counter">
			<button className="counter-action decrement"> - </button>
			<div className="counter-score"> {props.score} </div>
			<button className="counter-action increment"> + </button>
		</div>
		);
}

Counter.propTypes = {
	score: React.PropTypes.number.isRequired,
}

const Player = (props) => {
	return (
		<div className="player">
			<div className="player-name">
				{props.name}
			</div>
			<div className="player-score">
				<Counter score={props.score} />
			</div>
		</div>	
	);
}

Player.propTypes = {
	name: React.PropTypes.string.isRequired,
	score: React.PropTypes.number.isRequired,
}

const Application = (props) => {
 return (
 	<div className="scoreboard">

 		<Header title={props.title} />

 		<div className="players">
 			<Player name="Jacob" score={31} />
 			<Player name="Liza" score={45} />
 			<Player name="Oscar" score={68} />
 		</div>

 	</div>
 	);
}

Application.propTypes = {
	title: React.PropTypes.string
};

Application.defaultProps = {
	title: "Scoreboard"
};

ReactDOM.render(<Application />, document.getElementById('container'))






















