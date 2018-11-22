const titleId = 'main-title';
const descId = 'main-desc';
const name = 'Maria';
// A Comment in JSX looks like this:
// {/* TEXT */}

const header = ( 
    <header>
        <h1 id={titleId}>{ name }'s REACT</h1>
        <p id={descId}>{ name }'s first time using REACT</p>
    </header>
);

ReactDOM.render(
    header, document.getElementById('root')
);
