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
       <div className="user"></div>
       <div className="welcome">welcome, sid!</div><br></br>
       <button className="exploreBTN" onClick={ButtonOne}>explore</button><br></br>
       <button className="exploreBTN" onClick={ButtonOne}>my trips</button><br></br>
       <button className="exploreBTN" onClick={ButtonOne}>my account</button><br></br>
       <button className="exploreBTN" onClick={ButtonOne}>about</button>
       </div>
       </div>
       <div className="rightHalf">
          <div className="popular">popular destinations</div>
          <div className="imageHalves">
              <div className="imagesLeftHalf">
                <button className="buttonImg" onClick={ButtonOne}><img className="parisContainer" src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ1oS-DeKDIgvicoSyoD8KKoIAinTTDeC6VO7erBHEsAggFjaZYZ6YP1HkFahtlKTb_"/><br></br> paris</button>
                <button className="buttonImg" onClick={ButtonOne}><img className="parisContainer" src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcT2flpNZx086BC6BmM-NlHkukeLeHgtDwKFU-4RX0NNegXJIKV8EGvm7Rlt3sgSlckT"/><br></br> new york city</button>
                <button className="buttonImg" onClick={ButtonOne}><img className="parisContainer" src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSUh-v15KtL37Sy21xw-d4spneAvP-kD7zqvYu6lx0sciSDnesNbFfZbSw7lB1ZdWjJ"/><br></br> los angeles</button>
              </div>
              <div className="imagesRightHalf">
                  <button className="buttonImg" onClick={ButtonOne}><img className="parisContainer" src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQ-Kr35ZnOY1h-xaHeCziDK3-8HuXgIIsB-buK0-BWJx_ci8VzEZY-Ni-rdPtNmtjFO"/><br></br> shanghai</button>
                  <button className="buttonImg" onClick={ButtonOne}><img className="parisContainer" src="https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"/><br></br> las vegas</button>
                  <button className="buttonImg" onClick={ButtonOne}><img className="parisContainer" src="https://img.traveltriangle.com/blog/wp-content/uploads/2015/05/Places-to-visit-in-Bali-Cover1.jpg"/><br></br> bali</button>
              </div>
            </div>
        </div>
        </div>
      </div>
    );
  }

export default Home;