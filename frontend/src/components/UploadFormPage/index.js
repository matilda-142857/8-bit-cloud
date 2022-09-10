import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Modal } from "../../context/Modal";
import UploadForm from "./UploadFormPage";

function UploadFormModal() {
  const [showModal, setShowModal] = useState(false);
  const path = useLocation();

  if ((path.pathname === "/")) {
    return (
      <>
        <button className="splashbtn" id="loginbtn" onClick={() => setShowModal(true)}>
          Sign In
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <LoginForm />
          </Modal>
        )}
      </> 
    );
  } else {
    return (
      <>
        <button className="navbtn" id="loginbtn" onClick={() => setShowModal(true)}>
          Sign In
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <LoginForm />
          </Modal>
        )}
      </>
    );
  }
}

export default UploadFormModal;
