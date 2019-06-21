import React from 'react';
import { connect }from 'react-redux';

import { getSmurfs } from "../actions";
// import Smurf from '../components/SmurfList';

export class Smurfs extends React.Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    render(){
        return (
            <div>
                {this.props.smurfs.map(smurf => {
                    <div>
                        <h2>{smurf.name}</h2>
                        <h2>{smurf.age}</h2>
                        <h2>{smurf.height}</h2>
                    </div>
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs,
    }
}

export default connect(
    mapStateToProps,
    { getSmurfs },
)(Smurfs);