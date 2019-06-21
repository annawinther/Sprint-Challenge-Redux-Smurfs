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
        
    }
}