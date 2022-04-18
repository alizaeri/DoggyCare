import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import React, { useEffect, useState } from 'react';
import GetData from './components/GetData';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import List from './components/List';
import Dog from './components/Dog';
import { SidebarData } from './components/SidebarData';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';


const url ='https://api.jsonbin.io/b/624d5acbfdd14a0f4681364d/1'

function App() {
  const [dogsList, setDogsList] = useState([]);
  useEffect(() => {
    fetch(url)
    .then(Response => Response.json())
    .then(json => setDogsList(json))
  }, [])

  //let dogsData =  getData();
  const [dog, setDog] = useState("IEH455006");
  

  console.log('dogsdata', dogsList);
  let currentDog="IEH455006";
  const[sidebar, setsidebar] = useState(false);
  const showSidebar = () =>{setsidebar(!sidebar)}
  function openSlideMenu() {
   
   
  }
  function closeSlideMen() {
   
    

  }
 
  

  return (
    <div className="App">
      <header className="App-header">
        <nav className='nav'>
          
          <div className='Logo'>
            <div>
              <h3>Dogy Care</h3>
            </div>
            <div> 
              <img className ='logo-image' src="hund.png" alt="" />
            </div>
             

        
          </div>
          
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          
            <span className='open-slide' onClick={showSidebar}>
              
              <svg className='menuicon' width= "30" height="30">
                <path d="M0,5 30,5" stroke="#fff"
                strokeWidth="5"/>
                <path d="M0,14 30,14" stroke="#fff"
                strokeWidth="5"/>
                <path d="M0,23 30,23" stroke="#fff"
                strokeWidth="5"/>

              </svg>
              
            </span>
         

         
          

        
        </nav>
       
       

      </header>
      <main>
        
      <Router>
     
       <Routes>
         
          <Route exact path="/" element={
            <Welcome />
          } />
          <Route  path="/list" element={
            <List dogsList={dogsList} currentDog={() => setDog(dog)}/>
          } />
          <Route path='/list/:chipNumber' element={
            <Dog dogsList={dogsList} />

          }></Route>
        

       </Routes>


      </Router>

      </main>
      <footer>
        <div className='fotter'>
          <p>CopyRight @2022</p>
          <div className='Social'>
            <i className='fa-facebook'></i>
            <i className='fa-instagram'></i>
          </div>

        </div>
      </footer>
    </div>
  );
}


export default App;
