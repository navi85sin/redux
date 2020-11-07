
import React from 'react';
import {useSelector, useDispatch } from 'react-redux';

const AgeDown = (props) => {
    const ageUpCount = useSelector(state => state.rUp.count);
    const dispatch = useDispatch();
    return (
    <button onClick={(() => dispatch({type:"AGEDOWN", count:ageUpCount}))}>Age Down {props.count}</button>
    );
}

export default AgeDown;