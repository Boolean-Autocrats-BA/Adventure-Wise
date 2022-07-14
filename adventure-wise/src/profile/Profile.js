import React from "react";
import "./Profile.css";

class Profile extends React.Component {
   state = {
      userProfile: this.props.user,
   };

   render() {
      const user = this.state.userProfile;

      return (
         <div className="myinfo">
            <label>first name</label>
            <div>{user.first_name}</div>
            <label>last name</label>
            <div>{user.last_name}</div>
            <label>email</label>
            <div>{user.email}</div>
            <label>address</label>
            <div>{user.address}</div>
            <label>city</label>
            <div>{user.city}</div>
            <label>state</label>
            <div>{user.state}</div>
            <label>zip code</label>
            <div>{user.zipcode}</div>
            <label>country</label>
            <div>{user.country}</div>
         </div>
      );
   }
}

export default Profile;

{
   /* <div className="myinfo"></div>

<div className="myinfo">FULL NAME:{e.last_name + "" + e.first_name}</div>

<div className="myinfo">EMAIL:{e.email}</div>

<div className="myinfo">ADDRESS:{e.address}</div>

<div className="myinfo">CITY:{e.city}</div>

<div className="myinfo">STATE:{e.state}</div>

<div className="myinfo">ZIP:{e.zipcode}</div>

<div className="myinfo">COUNTRY:{e.country}</div> */
}
