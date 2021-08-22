import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

/**
 * Context types
 */
type AppContextType = {
  isIntroduction: boolean;
  setIsIntroduction: Dispatch<SetStateAction<boolean>>;
};

/**
 * Context props
 */
interface Props {
  children: ReactNode;
}

export const AppContext = createContext({} as AppContextType);

const AppProvider = ({ children }: Props) => {
  const [isIntroduction, setIsIntroduction] = useState<boolean>(true);

  return (
    <AppContext.Provider value={{ isIntroduction, setIsIntroduction }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
