'use client';
import { createContext, useContext, useState } from 'react';

const ModalContext = createContext({ isOpen: false, openModal: () => {}, closeModal: () => {} });

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ isOpen, openModal: () => setIsOpen(true), closeModal: () => setIsOpen(false) }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
