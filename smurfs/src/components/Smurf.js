import React from 'react';
import './Smurfs.css';

const Smurf = props => {
    return (
        <div className="smurf-list"> 
            <h3>Name: {props.smurf.name}</h3>
            <h4>Age: {props.smurf.age}</h4>
            <h4>Height {props.smurf.height}</h4>
        </div>
    )
}

export default Smurf;