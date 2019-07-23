import React from "react";

class Counter extends React.Component {
    state = {
        count: 0
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p className="workWithButton">Want to work with {li.name}? <button onClick={this.handleIncrement}>Yes!</button></p>
                <p className="workWith">{this.state.count} have said Yes!</p>

            </div>
        )
    }
}

export default Counter;