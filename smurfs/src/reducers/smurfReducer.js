import * as types from '../actions';

const initialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}

const smurfReducer = (state = initialState, action) => {
  switch(action.type){
    case(types.FETCHING_SMURFS_START):
      return {...state, fetchingSmurfs: true };
    case (types.FETCHING_SMURFS_SUCCESS):
        return {...state, fetchingSmurfs: false, smurfs: action.payload };
    case (types.FETCHING_SMURFS_FAILURE): 
        return {...state, fetchingSmurfs: false, error: action.payload};
    case (types.ADD_SMURFS_START):
        return {...state, addingSmurf: true };
    case (types.ADD_SMURFS_SUCCESS):
        return {...state, addingSmurf: false, smurfs: action.payload };
    case (types.ADD_SMURFS_FAILURE):
        return {...state, addingSmurf: false, error: action.payload };
    default:
        return state;
  }
};

export default smurfReducer;