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
    case "DELETE_RESOURCE":
      return {
        resource: state.resource.filter((w) => w._id !== action.payload._id),
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
