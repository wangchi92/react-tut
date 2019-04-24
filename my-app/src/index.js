import React from 'react';
import ReactDOM from 'react-dom';
import Game from './tictactoe.js';

class Main extends React.Component {
    render() {
        return (
            <div className="tictactoe">
                <Game />
            </div>
        )
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);