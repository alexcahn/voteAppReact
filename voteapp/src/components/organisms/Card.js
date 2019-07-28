import React from 'react';
import "./style.css"

class Card extends React.Component {

    state = {
        count: 0,
        guid: '',
    }

    componentDidMount() {
        this.getGuid(window.navigator.userAgent.replace(/\D+/g, ''))

    }


    getGuid = (gd) => {
        this.setState({ guid: gd })
        localStorage.setItem('guid', gd)
    }


    handleIncrement = () => {

        if (this.props.guidArray.includes(this.state.guid)) {
            localStorage.setItem('count', this.state.count);
            this.setState({
                count: 1,
            })
        }
    };

    getLocal = () => {
        localStorage.getItem('count')
        localStorage.getItem('guid')
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