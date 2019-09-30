import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getSmurf} from '../actions';


const SmurfList = ({smurfs, getSmurf}) => {
    useEffect(()=>{
        getSmurf();
    }, [getSmurf]);
    return(
        <>
        {smurfs.map(smurf => {
            return(
                <div>
                    <h1>{smurf.name}</h1>
                    <p>height: {smurf.height}</p>
                    <p>age: {smurf.age}</p>
                    <p>id: {smurf.id}</p>
                </div>
                
            ) 
            
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