import { useState } from "react";
import { Modal } from "../Modals/Modal";

export const TranscriptModal = ({ script, isOpen, onClose }) => {
  const formatScript = (script) => {
    return script?.split("\n").map((line, index) => (
      <p key={index}>
        <br />
        {line}
      </p>
    ));
  };
  return (
    <Modal open={isOpen}>
      <div className="container rounded-md bg-primary min-h-[100vh] min-w-[90vw] p-8 ">
        <h1 className="text-6xl text-center"> Transcript</h1>
        <p className="font-workSans p-8 text-xl mx-auto my-8 max-w-[50%] border rounded-md center">
          {formatScript(script)}
        </p>
        <button
          className="absolute w-20 h-10 p-2 rounded-lg top-10 bg-secondaryRed"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};
