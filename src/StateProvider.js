import { createContext, useContext, useReducer } from "react";


//1-create context (data layer)
export const StateContext = createContext();



//2-ctx provider
export const StateProvider = ( {reducer, initialState, children} ) => {
  return(
    <StateContext.Provider value={ useReducer(reducer, initialState) }> 
      {children}
    </StateContext.Provider>
  )
}



//3-use context
export const useStateValue = () => { 
  return(
    useContext(StateContext)
    ) 
}



// We are using useReducer in value={} prop bcz
// we want to be able to change it when new user login
// The reducer, initialState could be declared here only...
// Just for clean code they're declared somewhere else
// Less confusing if they're here...
