import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa"
import { Link } from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import {SidebarData} from './SidebarData'

function Navbar() {
    const[sidebar, setSidebar] = useState(false);
    const showSidebar = () => {setSidebar(!sidebar)}
  return (
    <div>
     
        <div className='navbar'>
            <Link to="#" className= "menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />

            </Link>
        </div>
        <nav className= {sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
            <li className="navbar-toggle">
                <Link to="#" className='menu-bars'>
                    <AiIcons.AiOutlineClose/>

                </Link>
            </li>
            {
                SidebarData.map((item, index) =>{
                    return (
                        <li key={index} className={item.cName}>
                            <Link to= {item.path}>
                                {item.icone}
                                <span>{item.title}</span>
                            </Link>
                            

                            
                        </li>

                    )
                    
                } )
            }

        </ul>
        </nav>
    </div>
  );
}

export default Navbar