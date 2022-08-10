import React, { createContext, useState } from "react";
export const ContextMade = createContext();

function ContextValue({ children }) {
  const [contextValue, setContextValue] = useState({
    fullName: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    whatsappNumber: "",
    emergencyContactNumber: "",
    billingAddress: {
      houseNumber: "",
      streetName: "",
      area: "",
      landmark: "",
      zipCode: "",
      city: "",
      state: "",
    },
    shippingAddress: {
      houseNumber: "",
      streetName: "",
      area: "",
      landmark: "",
      zipCode: "",
      city: "",
      state: "",
    },
    additionalAddress: 
      {
        houseNumber: "",
        streetName: "",
        area: "",
        landmark: "",
        zipCode: "",
        city: "",
        state: "",
      },
    
    notifications: ["email"],
  });

  return (
    <ContextMade.Provider value={[contextValue, setContextValue]}>
      {children}
    </ContextMade.Provider>
  );
}

export default ContextValue;
