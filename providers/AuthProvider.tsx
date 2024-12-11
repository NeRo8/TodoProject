import { useContext, createContext, PropsWithChildren, useState } from "react";

const AuthContext = createContext({
  isAuthComplete: false,
  onChangeAuthStatus: (status: boolean) => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAuthComplete, setAuthComplete] = useState(false);

  const onChangeAuthStatus = (status: boolean) => {
    setAuthComplete(status);
  };

  return (
    <AuthContext.Provider value={{ isAuthComplete, onChangeAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
