import React from 'react';
import ReactDOM from 'react-dom';

import RustModule from '../rust/src/lib.rs';

class Adder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            num1: 0,
            num2: 0,
            operation: 1
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
                <select onChange={event => {
                    this.setState({
                        operation: event.target.value
                    });
                }}>
                    <option value="1">Add</option>
                    <option value="2">Subtract</option>
                    <option value="3">Multiply</option>
                    <option value="4">Divide</option>
                </select>
                <input type="number" name="num2" value={this.state.num2} onChange={event => {
                    this.setState({
                        num2: event.target.value
                    });
                }} />


                <span>= {RustModule.calculate(this.state.num1, this.state.num2, this.state.operation)}</span>
                {
                    this.state.operation == 4 &&
                    this.state.num2 == 0 &&
                    <div style={{ color: "red" }}>The divisor cannot be 0</div>
                }
            </div>
        );
    }
}

ReactDOM.render(<Adder />, document.getElementById("target"));