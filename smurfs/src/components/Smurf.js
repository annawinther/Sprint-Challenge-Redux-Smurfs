import React from 'react';

const Smurf = props => {
    return (
        <div> 
            <h3>{props.smurf.name}</h3>
            <h3>{props.smurf.age}</h3>
            <h3>{props.smurf.height}</h3>
        </div>
    )
}

export default Smurf;