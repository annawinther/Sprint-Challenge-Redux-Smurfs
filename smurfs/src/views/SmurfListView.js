import React from 'react';
import { connect }from 'react-redux';

import { getSmurfs } from "../actions";
import SmurfList from '../components/SmurfList';

export class SmurfListView extends React.Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    render(){
        if(this.props.fetchingSmurfs){
            return  (
                <div> 
                    <h3>Fetching smurfs, please wait...</h3>
                </div>
            )
        }
        if(this.props.error) {
            return (
                <div>
                    <h1>{this.props.error}</h1>
                </div>
            )
        }

        return(
            <div>
                {this.props.smurfs.map(smurf => {
                    debugger;
                    <div> 
                        <h1>{smurf.name}</h1>
                        <h1>{smurf.age}</h1>
                        <h1>{smurf.height}</h1>
                    </div>
                })}
                {/* <SmurfList 
                    smurfs={this.props.smurfs}
                    fetchingSmurfs={this.props.fetchingSmurfs}
                    
                    getSmurfs={this.props.getSmurfs}
                    /> */}
                    
            </div>
        )
        
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { getSmurfs }
)(SmurfListView);