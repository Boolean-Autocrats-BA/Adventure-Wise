import React, { useState } from "react";
import Modal from "react-modal";
import "./Login.css";

function Login() {
   const [login, setLogin] = useState(false);

   const openLogin = () => setLogin(true);

   if (login) {
      return <div>It works</div>;
   }

   return (
      <div className="LoginPage">
         <h1 id="loginTitle">Adventure Wise</h1>
         <button id="loginButton" onClick={openLogin}>
            login/register
         </button>
      </div>
   );
}

export default Login;
