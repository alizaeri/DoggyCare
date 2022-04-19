import React from "react";
import { Link } from "react-router-dom";
import pic from '../images/pic.jpg'

const Welcome =() => {
    
     
    return (
        <div>
       
          <div>
              
              <div className="parent">
         
               
                
                  
                <img className='imgg' src={pic} alt=""/>
                <div className="text">
                    <h1>Welcome to Doggy Daycare</h1>
                    <h5>Press Button To Start</h5>
                    <Link to="/List" >
                    <button>Start
                    </button>
                    </Link>
                      
                </div>
               
              </div>
        
          </div>

        </div>
      
    )
}


export default Welcome;