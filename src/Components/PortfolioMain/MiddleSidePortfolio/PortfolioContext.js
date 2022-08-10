import React, { createContext, useState } from "react";
export const PortfolioContextMade = createContext();

function PortfolioContext({ children }) {
  const [PortfolioContext, setPortfolioContex] = useState(false);

  return (
    <PortfolioContextMade.Provider
      value={[PortfolioContext, setPortfolioContex]}
    >
      {children}
    </PortfolioContextMade.Provider>
  );
}

export default PortfolioContext;
