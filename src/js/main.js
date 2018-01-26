import React from 'react';
import ReactDOM from 'react-dom';

import RustModule from '../rust/src/lib.rs';

class Adder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            num1: 0,
            num2: 0
        };
    }

    render() {
        return (
            <div>
                <input type="number" name="num1" value={this.state.num1} onChange={event => {
                    this.setState({
                        num1: event.target.value
                    });
                }} />
                <span>+</span>
                <input type="number" name="num2" value={this.state.num2} onChange={event => {
                    this.setState({
                        num2: event.target.value
                    });
                }} />

                <span>= {RustModule.add(this.state.num1, this.state.num2)}</span>
            </div>
        );
    }
}

ReactDOM.render(<Adder />, document.getElementById("target"));