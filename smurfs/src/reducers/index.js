import {GET_SMURF_START, GET_SMURF_SUCCESS, GET_SMURFS_ERROR, ADD_SMURF} from '../actions';

const initialState = {
    
    isFetching: false,
    error: '',
    smurfs:[]
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_SMURF_START:
            return {
                isFetching: true,
                error: '',
                ...state
            }
        case GET_SMURF_SUCCESS: 
        return {
            smurfs: action.payload,
            isFetching: false,
            error: '',

        }
        case GET_SMURFS_ERROR: 
        return {
            ...state, 
            error: action.payload
        }
        default: 
        return state
    }
}