import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

export class SmurfForm extends React.Component {
    nameRef = React.createRef();
    ageRef = React.createRef();
    heightRef = React.createRef();

    onAddNewSmurf = () => {
        this.props.addSmurf({ 
            name: this.nameRef.current.value,
            age: this.ageRef.current.value,
            height: this.heightRef.current.value,
        })
        this.nameRef.current.value = '';
        this.ageRef.current.value = '';
        this.heightRef.current.value = '';
    }

    render(){
        return (
            <div>
                <h3> Add New Smurf To The Village! </h3>
                <div>
                    <em>Name: </em>
                    <input ref={this.nameRef} type="text" />
                </div>
                <div>
                    <em>Age: </em>
                    <input ref={this.ageRef} type="number" />
                </div>
                <div>
                    <em>Height: </em>
                    <input ref={this.heightRef} type="number" />
                </div>

            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return (
//         addSmurf: state
//     )
// }

export default connect(
    null,
    { addSmurf }
)(SmurfForm);
