import React from 'react';
import ReactDOM from 'react-dom';

const App = function () {
    return (
        <div>
            <label htmlFor="test">Enter Name: </label>
            <input id="test" type="text"/>
            <button style={{ backgroundColor: 'blue', color: 'white' }}>Submit</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

