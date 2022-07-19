import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import UserContext from "../../context/UserContext";

export default function AddTripModal() {
   const { userID } = useContext(UserContext);
   const { register, handleSubmit } = useForm();
   const onSubmit = (data) => {
      const objReq = {
         trip_name: data.trip_name,
         user_id: userID,
      };

      fetch("http://localhost:3050/users/trips", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(objReq),
      });
      console.log({ trip_name: data.trip_name, user_id: userID });
   };

   return (
      <form className="addTripForm" onSubmit={handleSubmit(onSubmit)}>
         <label>trip name</label>
         <input className="inputFields" type="text" {...register("trip_name", {})} />
         <input id="submitLogin" type="submit" value="create" />
      </form>
   );
}
