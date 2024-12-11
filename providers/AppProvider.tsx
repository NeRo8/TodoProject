import { useContext, createContext, PropsWithChildren, useState } from "react";

const AppContext = createContext({
  isOnboardingComplete: false,
  onChangeOnboardingStatus: (status: boolean) => {},
});

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

  const onChangeOnboardingStatus = (status: boolean) => {
    setIsOnboardingComplete(status);
  };

  return (
    <AppContext.Provider value={{ isOnboardingComplete, onChangeOnboardingStatus }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
