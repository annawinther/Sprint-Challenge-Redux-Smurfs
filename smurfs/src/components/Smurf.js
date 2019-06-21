import React from 'react';

const Smurf = props => {
    return (
        <div> 
            <h3>Name: {props.smurf.name}</h3>
            <h4>Age: {props.smurf.age}</h4>
            <g4>Height {props.smurf.height}cm</g4>
        </div>
    )
}

export default Smurf;