import { createContext, useState } from "react";

export const EmployeeContext = createContext();

export const EmployeeContextProvider = ({ children }) => {
  const [Employee, setEmployee] = useState(0);
  const handleEmployee = () => {
    set(Employee + 1);
  };
  return (
    <EmployeeContext.Provider value={{ Employee, handleEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};