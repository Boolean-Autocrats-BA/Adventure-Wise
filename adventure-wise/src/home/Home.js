import React from 'react';
import './Home.css';
// import { Link } from 'react-router-dom';


function Home(props) {
    
  function ButtonOne()
{
  alert('You clicked button one.')
}  
  
  return (
        
      <div className="Home">
       <h1 className="center"><style>
            @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Major+Mono+Display&display=swap');
            </style>Adventure<br></br>Wise</h1>
       <div className="halves">
       <div className="leftHalf">
       <div className="vertical-center">
       <div className="welcome">Welcome, Sid!</div>
       <h2>Explore</h2>
       <h2>My Trips</h2>
       <h2>About</h2>
       </div>
       </div>
       <div className="rightHalf">
       <div className="imageHalves">
       <div className="imagesLeftHalf"><button className="buttonImg" onClick={ButtonOne}><img className="parisContainer" src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ1oS-DeKDIgvicoSyoD8KKoIAinTTDeC6VO7erBHEsAggFjaZYZ6YP1HkFahtlKTb_"/><br></br> PARIS</button>
       <button className="buttonImg" onClick={ButtonOne}><img className="parisContainer" src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcT2flpNZx086BC6BmM-NlHkukeLeHgtDwKFU-4RX0NNegXJIKV8EGvm7Rlt3sgSlckT"/><br></br> NEW YORK CITY</button>
       <button className="buttonImg" onClick={ButtonOne}><img className="parisContainer" src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSUh-v15KtL37Sy21xw-d4spneAvP-kD7zqvYu6lx0sciSDnesNbFfZbSw7lB1ZdWjJ"/><br></br> LOS ANGELES</button></div>
       <div className="imagesRightHalf"><button className="buttonImg" onClick={ButtonOne}><img className="parisContainer" src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQ-Kr35ZnOY1h-xaHeCziDK3-8HuXgIIsB-buK0-BWJx_ci8VzEZY-Ni-rdPtNmtjFO"/><br></br> SHANGHAI</button>
       <button className="buttonImg" onClick={ButtonOne}><img className="parisContainer" src="https://media.timeout.com/images/105240189/image.jpg"/><br></br> BALI</button>
       <button className="buttonImg" onClick={ButtonOne}><img className="parisContainer" src="https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"/><br></br> LAS VEGAS</button></div>
       </div>
       </div>
       </div>
      </div>
    );
  }

export default Home;