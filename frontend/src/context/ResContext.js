import { createContext, useReducer } from "react";

export const ResContext = createContext();

export const resReducer = (state, action) => {
  switch (action.type) {
    case "SET_RESOURCE":
      return {
        resource: action.payload,
      };
    case "CREATE_RESOURCE":
      return {
        resource: [action.payload, ...state.resource],
      };
    default:
      return state;
  }
};

export const ResContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(resReducer, {
    resources: null,
  });

  return (
    <ResContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ResContext.Provider>
  );
};
