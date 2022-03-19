import React from "react";


//1-initial states
export const initialState = {
  user: null,
};



//2-action types
export const actionTypes = {
  SET_USER: "SET_USER"
};



//3-reducer (data manipulation)*************
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
