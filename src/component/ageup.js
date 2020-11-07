
import React from 'react';
import {useSelector, useDispatch } from 'react-redux';


const AgeUP = (props) => {
    const ageCounter = useSelector(state => state.rUp.count);
    const dispatch = useDispatch();
    return (
    <button  onClick={(()=> dispatch({type:"AGEUP"}))}>Age UP {ageCounter}</button>
    );
}

export default AgeUP;