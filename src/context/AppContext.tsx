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
  payment: number;
  setPayment: Dispatch<SetStateAction<number>>;
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
  const [payment, setPayment] = useState<number>(0);

  return (
    <AppContext.Provider
      value={{ isIntroduction, setIsIntroduction, payment, setPayment }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
