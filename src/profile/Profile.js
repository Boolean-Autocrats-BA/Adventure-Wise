import React from "react";
import "./Profile.css";

export default function Profile({ user }) {
   return (
      <div className="myProfileGrid">
         <h4 id="profileHeader">My Profile</h4>
         <img
            className="profile-userPicture"
            src="https://www.hrlact.org/wp-content/uploads/2020/12/generic-user-icon-300x300.jpg"
            alt=""
         />
         <div class="profile-userInfo">
            <label className="profileLabel">First Name</label>
            <div>{user.first_name}</div>
            <label className="profileLabel">Last Name</label>
            <div>{user.last_name}</div>
            <label className="profileLabel">Email</label>
            <div>{user.email}</div>
         </div>
      </div>
   );
}
