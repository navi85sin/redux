const initialState = {
  
};


const ageReducer = (state = initialState, action) => {
 const newage ={...state};
 switch(action.type) {
     case 'AGEDOWN' : 
         newage.count = action.count  - 1;
     break;
     default : {
        
     }       
 }
 return newage;
}

export default ageReducer;