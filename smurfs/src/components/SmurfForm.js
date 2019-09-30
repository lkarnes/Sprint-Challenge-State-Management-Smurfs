import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getSmurf} from '../actions'

const SmurfForm = ({getSmurf}) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [height, setHeight]= useState('');

    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handleAgeChange = e => {
        setAge(e.target.value)
    }
    const handleHeightChange = e => {
        setHeight(e.target.value)
    }
    const addSmurf = smurf => {
        axios.post('http://localhost:3333/smurfs', smurf)
        .then(res=> {
             console.log(res)
             getSmurf();
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        addSmurf({
            name: name,
            age: age,
            height: height
        });
        setName('')
        setAge()
        setHeight('')

    }
return (
    <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange} type='text' value={name}/>
        <input onChange={handleAgeChange} type='number' value={age}/>
        <input onChange={handleHeightChange} type='text' value={height}/>
        <button type='submit'>Submit</button>
    </form>
)
}

export default connect(null, {getSmurf})(SmurfForm)