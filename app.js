function Header(props) {
    console.log(props)
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

function App() {
    return (
        <div className='scoreboard'>
            <Header title="Scoreboard" players={4}/>
            <Player player="Adriana" score={117}/>
            <Player player="Maria" score={131}/>
            <Player player="Helen" score={128}/>
            <Player player="Jenny" score={92}/>
        </div>
    );
};

ReactDOM.render(
    <App />, document.getElementById('root')
);
