/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";

export const ADD_SMURFS_START = "ADD_SMURFS_START";
export const ADD_SMURFS_SUCCESS = "ADD_SMURFS_SUCCESS";
export const ADD_SMURFS_FAILURE = "ADD_SMURFS_FAILURE";

// stretch fro deleting smurfs
export const DELETING_SMURFS_START = "DELETING_SMURFS_START"
export const DELETING_SMURFS_SUCCESS = "DELETING_SMURFS_SUCCESS"
export const DELETING_SMURFS_FAILURE = "DELETING_SMURFS_FAILURE"

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res=> {
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err })
    })
}

export const addSmurf = (smurf) => dispatch => {
  dispatch({ type: ADD_SMURFS_START });
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      dispatch({ type: ADD_SMURFS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ADD_SMURFS_FAILURE, payload: err })
    })
}

export const deletSmurf = (id) => dispatch => {
  dispatch({})
}

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
