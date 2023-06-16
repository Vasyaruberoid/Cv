import React from "react";
import './styles/App.css';
import {Route,Routes} from 'react-router-dom';
import About from "./pages/About";
import Posts from "./pages/Posts";
import MyButton from "./Components/UI/button/Mybutton";
import NavBar from "./Components/UI/navbar/navBar";


function App (){

    return( 
  <>
<NavBar/>
     <Routes>
      <Route element = {<MyButton/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/posts" element={<Posts/>}/>
     </Routes>
  </>
    )
}

export default App;