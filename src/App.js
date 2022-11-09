
import { useState } from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/Textform';
import About from './components/About';


function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showalert=(message,type)=>{
   setAlert({
    msg:message,
    type:type
   })
   setTimeout(()=>{
      setAlert(null);
   },2000)
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(1 16 1)';
      showalert("Dark mode enabled",'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert('light mode enabled ','success');

    }
  }
  return (
    <>
    <Navbar title="TextUtils" about="About"mode={mode} func={toggleMode}/>
    <Alert alert={alert}/>
    <Textform showalert={showalert} heading="Write text to analyze below" mode={mode}/>
    {/* <About/> */}
    </>
  );
}

export default App;
