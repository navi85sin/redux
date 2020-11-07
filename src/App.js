import React from 'react';
import './App.css';
import AgeUP from './component/ageup';
import AgeDown from './component/agedown';
import { useSelector } from 'react-redux';

function App() {
   const ageCounter = useSelector(state => state.rUp.count);
   return (
     <div>
       <h1 >Age Counter : {ageCounter}</h1>
       <AgeUP></AgeUP>
       <AgeDown count={ageCounter}></AgeDown>
     </div>
  );
}

export default App;