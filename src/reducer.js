import React from "react";


//1-initial states
export const initialState = {
  user: null,
};



//action types..
//just for avoiding typos & getting auto suggestion
export const actionTypes = {
  SET_USER: "SET_USER"
};



//2-reducer (data manipulation)*************
const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return{
        ...state,
        user: action.user,
      };
      break;
  
    default:
      return state;
  }
};

export default reducer;



// this could've been in the state provider file ..
// they're written in a separate file just for clean code
// But why needed: bcz we want the value={} in the .provider to be dynamic
// so that we can change the user value
