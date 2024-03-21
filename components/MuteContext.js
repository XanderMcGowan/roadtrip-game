import React, { createContext, useState, useContext } from 'react';

const MuteContext = createContext();

export const useMute = () => useContext(MuteContext);

export const MuteProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };

  return (
    <MuteContext.Provider value={{ isMuted, toggleMute }}>
      {children}
    </MuteContext.Provider>
  );
};