const players = [
    {
        name: 'Maria', score: '131', id: 1
    }, {
        name: 'Helen', score: '128', id: 2
    }, {
        name: 'Adriana', score: '117', id: 3
    }, {
        name: 'Jenny', score: '92', id: 4
    }
];

function Header(props) {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: { props.players }</span>
        </header>
    );
};

function Player(props) {
    return (
        <div className="player">
            <span className="player-name">
                { props.player }
            </span>
            <Counter/>
        </div>
    );
};

class Counter extends React.Component {
    state = {
        score: 0
    }

    incrementScore = () => {
        this.setState({
            score: this.state.score + 1
        });
    }

    decrementScore = () => {
        this.setState({
            score: this.state.score - 1
        });
    }
    
    render() {
        return(
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        );
    }
};

function App(props) {
    return (
        <div className='scoreboard'>
            <Header title="Scoreboard" players={ props.initialPlayer.length}/>
            {
                props.initialPlayer.map( player => 
                    <Player 
                        player={player.name} 
                        key={player.id.toString()}
                    />
                )
            }
        </div>
    );
};

ReactDOM.render(
    <App initialPlayer={players}/>, document.getElementById('root')
);
