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