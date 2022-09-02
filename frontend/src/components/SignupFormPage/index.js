import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Modal } from "../../context/Modal";
import SignupForm from "./SignupForm";
import "./SignupForm.css";

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);
  const path = useLocation();

  if ((path.pathname = "/")) {
    return (
      <>
        <button className="splashbtn" id="signupbtn" onClick={() => setShowModal(true)}>
          Create an Account
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <SignupForm />
          </Modal>
        )}
      </>
    );
  } else {
    return (
      <>
        <button className="navbtn" id="signupbtn" onClick={() => setShowModal(true)}>
          Create an Account
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <SignupForm />
          </Modal>
        )}
      </>
    );
  }
}

export default SignupFormModal;
