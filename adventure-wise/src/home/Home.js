import React from "react";


function Home({gobackpage}){

    function updatepage(p){ 
        gobackpage(p)
         
   }

return(
   <>
        <div>this is home page</div>
        <button onClick={()=>updatepage('')}>Back</button>
   </>
)
}
export default Home;