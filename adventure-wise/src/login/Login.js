import React, { useState } from "react";
import Modal from "react-modal";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import "./Login.css";

const customStyles = {
   overlay: {
      background: "linear-gradient(to right, #59fbfb73, #f4791fad)",
   },
   content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
   },
};

Modal.setAppElement("#root");

function Login() {
   let subtitle;
   const [modalIsOpen, setIsOpen] = useState(false);
   const [login, setLogin] = useState(true);

   function openModal() {
      setIsOpen(true);
   }

   function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = "black";
   }

   function closeModal() {
      setIsOpen(false);
   }

   return (
      <div className="LoginPage">
         <h1 id="loginTitle">Adventure Wise</h1>
         <button id="loginButton" onClick={openModal}>
            login/register
         </button>
         <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Login Modal"
         >
            <div className="modalContainer">
               <h2 id="modalHeader" ref={(_subtitle) => (subtitle = _subtitle)}>
                  AW
               </h2>
               <button id="modalCloseBtn" onClick={closeModal}>
                  X
               </button>
               <div>{login ? <LoginForm /> : <SignupForm />}</div>
               <div>
                  {login ? (
                     <button
                        id="switch2Register"
                        onClick={() => {
                           setLogin(false);
                        }}
                     >
                        register
                     </button>
                  ) : (
                     <button
                        id="switch2Login"
                        onClick={() => {
                           setLogin(true);
                        }}
                     >
                        login
                     </button>
                  )}
               </div>
            </div>
         </Modal>
      </div>
   );
}

export default Login;
