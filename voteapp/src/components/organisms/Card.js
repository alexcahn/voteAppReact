import React from 'react';

const Card = (props) => {
    return (
        <div className="card-container">
            {props.list.map(li => (
                <div key={li.name} className="list-group-item">
                    <img alt="engineer" src={li.image_url} className="img-fluid" />
                    <h1>{li.name}</h1>
                    <p>{li.title}</p>
                    <p>{li.bio}<img src="../images/thumbs-up.svg"></img></p>
                </div>
            ))}



        </div>
    )

}

export default Card;