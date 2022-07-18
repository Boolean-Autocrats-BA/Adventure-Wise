import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import UserContext from "../../context/UserContext";

export default function LoginForm() {
   const { register, handleSubmit, resetField } = useForm({
      defaultValues: {
         email: "",
         password: "",
      },
   });

   const { setUser, setLoggedIn } = useContext(UserContext);

   const onSubmit = (data) => {
      fetch("http://localhost:3050/users/login", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
      })
         .then((res) => res.json())
         .then((user) => {
            setUser(user);
            setLoggedIn(true);
         });
      resetField("email");
      resetField("password");
   };

   return (
      <>
         <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
            <label>email</label>
            <input className="inputFields" type="email" {...register("email", { required: true })} />
            <label>password</label>
            <input
               className="inputFields"
               type="password"
               {...register("password", { required: true, max: 24, min: 6, maxLength: 24 })}
            />
            <input id="submitLogin" type="submit" value="login" />
         </form>
      </>
   );
}
