import React from "react";
import { Link } from "react-router-dom";


const List =({dogsList}) => {

    let subList = dogsList.map((data,index) =>
            
             
    (
    
        <div className="card" key={index}>
           <div className="card_img">
              <img className='cardImage' src={data.img} alt="" />
           </div>
        <div className="card_header">
           <h2>{data.name}</h2>
           <p>{data.breed}</p>
           <p>{data.chipNumber}</p>
           <p>{data.present ? "present" : "not present"}</p>


        </div>
    
    


        <Link  to={`/list/${data.chipNumber}`}><button className="btn">More Information</button>
        </Link>
  </div>



))
    
     
    return (
       
             
        <div className="main_content">
        
        {subList}
        </div>

        
      
    )
}


export default List;