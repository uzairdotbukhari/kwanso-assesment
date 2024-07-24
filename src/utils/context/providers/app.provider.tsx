import React, { useState, ReactNode } from 'react';
import { AppContext, AppContextType } from '../app.context';

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gender, setGender] = useState<ProfileGender>('');

  const contextValue: AppContextType = { gender, setGender };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
  