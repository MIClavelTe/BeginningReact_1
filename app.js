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
            <Counter score={props.score}/>
        </div>
    );
};

class Counter extends React.Component {
    render() {
        return(
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{ props.score }</span>
                <button className="counter-action increment"> + </button>
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
                        score={player.score}
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
