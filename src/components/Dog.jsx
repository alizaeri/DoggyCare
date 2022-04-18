import React from "react";
import { Link, useParams } from "react-router-dom";


const Dog =({dogsList}) => {
    
    
    let {chipNumber}=useParams();
    
    
        let currentdog= null;
        
    return (
        <div>
         
            <div>
                    {
                           dogsList.forEach(element => {
                            if(element.chipNumber===chipNumber){
                                 currentdog = element;  
                                 console.log(currentdog)
                            }
                        
                    })
                  

                    }
                    <div className="cardView">
                        
                        <img className='imageSize' src={currentdog.img} alt="" />
                        <h2>Dogs Name:{currentdog.name}</h2>
                        <p>ChipNumber :{currentdog.chipNumber}</p>
                        <p>breed: {currentdog.breed}</p>
                        <p>Sex :{currentdog.sex}</p>
                        <p>{currentdog.present ? "present" : "not present"}</p>

                        <p>Owner: {currentdog.owner.name} <span>{currentdog.owner.lastName}</span></p>
                        <p>PhoneNumber :{currentdog.owner.phoneNumber}</p>
                        <Link to="/List">
                             <button>Back to Start Page</button>

                        </Link>

                    </div>
                    
            </div>
            <div> 

            </div>
          
        </div>
      
    )
   
}


export default Dog;