import axios from 'axios';
export const GET_SMURF_START = 'GET_SMURF_START'
export const GET_SMURF_SUCCESS = 'GET_SMURF_SUCCESS'
export const GET_SMURFS_ERROR = 'GET_SMURFS_ERROR'

export const getSmurf = () => dispatch => {
    dispatch({type: GET_SMURF_START})
    axios.get('http://localhost:3333/smurfs')
    .then(res=>{
        dispatch({type:GET_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err=> {
        dispatch({type:GET_SMURFS_ERROR, payload: err})
    })
}

export const addSmurf = smurf => {
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(res=> {
         console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}