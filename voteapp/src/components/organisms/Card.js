import React from 'react';
import "./style.css"
import API from "../../utils/API"

class Card extends React.Component {

    state = {
        count: 0,
    }

    handleIncrement = () => {
        this.setState({
            count: 1,
            // clicked: true
        })
        API.updateCountTotal()
    }

    render() {
        return (
            <div className="card-container">
                <div key={this.props.id} className="list-group-item">
                    <img alt="engineer" src={this.props.engineer.image_url} className="img-fluid" />
                    <h2>{this.props.engineer.name}</h2>
                    <h4>{this.props.engineer.title}</h4>
                    <p className="bio">{this.props.engineer.bio}</p>
                    <p className="workWithButton">Want to work with {this.props.engineer.name}? <button class="btn" onClick={this.handleIncrement}><img src="thumbs-up.svg" />Yes!</button></p>
                    <p className="workWith">{this.state.count} have said Yes!</p>

                </div>
            </div>
        )

    }
}

export default Card;