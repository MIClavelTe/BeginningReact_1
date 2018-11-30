const players = [
    {
        name: 'Maria', score: '131'
    }, {
        name: 'Helen', score: '128'
    }, {
        name: 'Adriana', score: '117'
    }, {
        name: 'Jenny', score: '92'
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

function Counter(props) {
    return(
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{ props.score }</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
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
                    />
                )
            }
        </div>
    );
};

ReactDOM.render(
    <App initialPlayer={players}/>, document.getElementById('root')
);
