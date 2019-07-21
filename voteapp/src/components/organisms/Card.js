import React from 'react';
import "./style.css"

let count = 0;
let handleIncrement = function () {
    count = count + 1
};

const Card = (props) => {
    return (
        <div className="card-container">
            {props.list.map(li => (
                <div key={li.name} className="list-group-item">
                    <img alt="engineer" src={li.image_url} className="img-fluid" />
                    <h2>{li.name}</h2>
                    <h4>{li.title}</h4>
                    <p className="bio">{li.bio}</p>
                    <p className="workWith">Want to work with {li.name}? <button onClick={handleIncrement}>Yes!</button></p>
                    <p className="workWith">{count} have said Yes!</p>
                </div>
            ))}
        </div>
    )

}

export default Card;