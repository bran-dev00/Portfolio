import { useState } from "react";

export const Modal = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onclose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      } `}
    >
      {/* Main Content Window */}
      <div onClick={(e) => e.stopPropagation()}>
        <h1>Header</h1>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
