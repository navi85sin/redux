const initialState = {
    count:3
};


const ageReducer = (state = initialState, action) => {
 const newage ={...state};
 switch(action.type) {
     case 'AGEUP' : 
        newage.count++;
     break;
     default : {
        
     }       
 }
 return newage;
}

export default ageReducer;