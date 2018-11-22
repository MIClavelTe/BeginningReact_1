const title = 'Using REACT';
const description = 'First time using REACT';
var titleId = 'main-title'

const header = ( 
    <header>
        <h1 id={titleId}>{ title }</h1>
        <p>{ description }</p>
    </header>
);

ReactDOM.render(
    header, document.getElementById('root')
);
