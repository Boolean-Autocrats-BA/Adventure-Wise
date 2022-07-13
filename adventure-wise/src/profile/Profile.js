import React from "react";
import "./Profile.css";

class Profile extends React.Component {
constructor(props){
    super(props)
    this.state = {
        loading: true,
        user: null,
        loadingMsg: "loading ...",
     }
}


 componentDidMount() {
 fetch("http://localhost:3050/users/9")
    .then((res) => res.json())
    .then((data) => {
       console.log(data);
       this.setState({ loading: false, user: data });
    });
}

render() {
    if (this.state.loading) {
           return <h1>{this.state.loadingMsg}</h1>;
       }
     

    else 
    {   const e = this.state.user;

        
            return (
                    <div>
                    <div className="myinfo">MY INFO</div>

                    <div className="myinfo">FULL NAME:{e.last_name+''+e.first_name}</div>
            
                    <div className="myinfo">EMAIL:{e.email}</div>

            

                    <div className="myinfo">ADDRESS:{e.address}</div>
            
                    <div className="myinfo">CITY:{e.city}</div>
            
                    <div className="myinfo">STATE:{e.state}</div>
            
                    <div className="myinfo">ZIP:{e.zipcode}</div>
            
                    <div className="myinfo">COUNTRY:{e.country}</div>
                     </div>
                )
            }

        }

    } 

         
       
    
    


export default Profile;