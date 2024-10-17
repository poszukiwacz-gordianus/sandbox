import { useContext, cloneElement, useState, createContext } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import { HiXMark } from "react-icons/hi2";

import useCloseOnOutsideInteraction from "../../hooks/useCloseOnOutsideInteraction";

Modal.propTypes = {
  children: PropTypes.any,
};

Window.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string,
};

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined)
    throw new Error("Context used outside Context Provider");

  return context;
}

function Open({ children, open: openWindowName }) {
  const { open } = useModal();

  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useModal();

  const ref = useCloseOnOutsideInteraction(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-screen backdrop-blur-sm  z-50 transition-all duration-500">
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 rounded-lg shadow-md py-12 px-16 transition-all duration-500"
        ref={ref}
      >
        <button
          className="bg-none p-2 rounded-sm translate-x-3 transition-all duration-200 absolute top-5 right-8 hover:bg-gray-100"
          onClick={close}
        >
          <HiXMark className=" w-6 h-6 text-gray-500" />
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
