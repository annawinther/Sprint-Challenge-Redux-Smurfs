import React from 'react';
import Smurf from './Smurf';

const SmurfList = props => {
    console.log(props);
    return (
        <div>
            hello
            {props.smurfs.map(smurf => {
                return <Smurf key={smurf.id} smurf={smurf} />
            })}
        </div>
    )
};

export default SmurfList;