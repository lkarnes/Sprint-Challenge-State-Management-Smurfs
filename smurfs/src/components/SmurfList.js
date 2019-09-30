import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getSmurf,addSmurf} from '../actions';


const SmurfList = ({smurfs, getSmurf, addSmurf}) => {
    useEffect(()=>{
        getSmurf();
        console.log(smurfs, 'in useEffect')
    }, [getSmurf, addSmurf]);
    return(
        <>
        {smurfs.map(smurf => {
            return <h1>{smurf.name}</h1>
            
        })}
        </>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {getSmurf})(SmurfList)