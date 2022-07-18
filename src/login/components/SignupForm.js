import React from "react";
import { useForm } from "react-hook-form";

export default function SignupForm() {
   const { register, handleSubmit } = useForm();

   const onSubmit = (data) => {
      fetch("http://localhost:3050/users", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
      })
         .then((res) => res.json())
         .then((response) => console.log(response));
   };

   return (
      <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
         <label>first name</label>
         <input className="inputFields" type="text" {...register("first_name", { required: true })} />
         <label>last name</label>
         <input className="inputFields" type="text" {...register("last_name", { required: true })} />
         <label>email</label>
         <input className="inputFields" type="email" {...register("email", { required: true })} />
         <label>password</label>
         <input
            className="inputFields"
            type="password"
            {...register("password", { required: true, max: 24, min: 6, maxLength: 24 })}
         />
         <input id="submitRegister" type="submit" value="register" />
      </form>
   );
}
