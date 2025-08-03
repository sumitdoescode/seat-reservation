"use client";

import { createContext, useContext, useState } from "react";

export const SeatContext = createContext();

const SeatContextProvider = ({ children }) => {
    const [seatNumber, setSeatNumber] = useState("1");
    return <SeatContext.Provider value={{ seatNumber, setSeatNumber }}>{children}</SeatContext.Provider>;
};

export default SeatContextProvider;
