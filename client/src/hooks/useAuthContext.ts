import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export type User = {
  email: string;
  password: string;
  _id: string;
};

export type AuthContext = {
  user: User | null;
  dispatch: React.Dispatch<any>;
};

export const useAuthContext = (): AuthContext => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  }

  return context;
};