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
                <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
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
        this.setState( prevState => ({
            score: prevState.score + 1
        }));
    }

    decrementScore = () => {
        this.setState( prevState => ({
            score: prevState.score - 1
        }));
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

class App extends React.Component {
    state = {
        players: [{
            name: 'Maria', id: 1
        }, {
            name: 'Helen', id: 2
        }, {
            name: 'Adriana', id: 3
        }, {
            name: 'Jenny', id: 4
        }]
    }

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
                players: this.state.players.filter( p => p.id !== id)
            }
        });
    }

    render() {
        return (
            <div className='scoreboard'>
                <Header title="Scoreboard" players={ this.state.players.length }/>
                {
                    this.state.players.map( player => 
                        <Player 
                            player={player.name} 
                            id={player.id}
                            key={player.id.toString()}
                            removePlayer={this.handleRemovePlayer}
                        />
                    )
                }
            </div>
        );
    }
};

ReactDOM.render(
    <App />, document.getElementById('root')
);
