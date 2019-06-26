import React from 'react';
import './Smurfs.css';

const Smurf = props => {
    return (
        <div className="smurf-list"> 
            <h3>Name: {props.smurf.name}</h3>
            <p>Age: {props.smurf.age}</p>
            <p>Height {props.smurf.height}</p>
        </div>
    )
}

export default Smurf;
