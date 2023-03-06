import React from 'react';
import './App.css'
import NavbarB from './components/Navbar/navbar.jsx'
// import ItemlistContainer from './components/itemListContainer/itemListContainer.jsx'


import saludo , {Welcome} from './components/ItemListContainer/ItemListContainer.jsx'
     

     function App() {
  return(
    <div >
     

     <h1>Kid Blessed</h1>
     

   
  
    <NavbarB/>

    
    <Welcome param = "bienvenidos"/>
  
     
    </div>
    

   
  );
 
 }

 export default App
     

  
    

