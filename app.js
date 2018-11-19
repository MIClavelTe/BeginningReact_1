const title = React.createElement(
    'h1', 
    {id: 'main-title', title: 'Title'},
    'React Title'
);

const description = React.createElement(
    'p',
    null,
    'My First REACT elements'
);

const header = React.createElement( 
    'header',
    null,
    title, description
);

ReactDOM.render(
    header, document.getElementById('root')
);
