
import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert =(message,type)=>{
     setAlert({
    msg:message,
    type:type
     })
     setTimeout(()=>{
      setAlert(null);
     },1500)
  }
 const toggleMode =()=>{
  if(mode==='light')
   { setMode('dark');
  document.body.style.backgroundColor='#02022d';

  showAlert("dark mode has been enabled",'success');
  // document.title ='TextUtils - dark mode';
  // setInterval(()=>{
  //   document.title =' TextUtils is amazing';
  // },2000);
  // setInterval(()=>{
  //   document.title='install TexttUtils now!'
  // },1500)
  }
   else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("light mode has been enabled" ,"sucess")
   }
  }
  
  return (
    <>
    {/* <Router> */}
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3">
     {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}> */}
            {/* <About /> */}
          {/* </Route> */}
          
          {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>} > */}
          
          {/* </Route> */}
        {/* </Routes> */}

        <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
      
      </div>
      {/* </Router> */}
      
     
    </>
    
  );
}

export default App;
