import React, { useContext } from "react";
import { isPropertySignature } from "typescript";

export type UserContextType = {
  name: string;
  email: string;
  role: "user" | "admin" | "super user";
  token: string;
};

const UserContext = React.createContext<UserContextType | undefined>(undefined);

type UserContextProviderProps = {
  children: React.ReactNode; // accept anything
  value: UserContextType;
};

// we will wrap our app with this component so any child component can consume this
// global data
export function UserContextProvider(props: UserContextProviderProps) {
  return (
    <UserContext.Provider value={props.value}>
      {props.children}
    </UserContext.Provider>
  );
}

// custom hook to consume the user data from any component
export function useUserContext() {
  const userContext = useContext(UserContext);
  if (!userContext)
    throw new Error("user context must be wrapped in user context provider");
  return userContext;
}
