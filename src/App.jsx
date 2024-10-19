import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function submitForm(){
    return alert("form submited");
  }
  return (
    <div class="container">
    <h1>CV Application</h1>
    <form >
      <GeneralInfo class="generalInfo"/>
      <EducationalInfo class="eduInfo"/>
      <button type='submit' onClick={submitForm}>Submit</button>
    </form>
    </div>
  )
}

function GeneralInfo(){

  const labels=['name','email','phone'];
  const [value,setValue]=useState();
  return (
    <div>
      <h2>General Information</h2>
      {labels.map((item,index) =>{ 
        
        return (
        <div>
          <label key={index}>{item}</label>
          <input key={index} value={item}/>
          <h1 key={index}>{value}</h1>
        </div>);
        })}
      
     
    </div>
   
  );

}

function EducationalInfo(){
  const labels=['Company Name','Position','Responsibility','date-From','date-To'];
  const [value,setValue]=useState();
  return (
    <div>
      <h2>Educational Information</h2>
      {labels.map((item,index) =>{ 
        return (
        <div>
          <label key={index}>{item}</label>
          <input key={index} value={item}/>
          <h1 key={index}>{value}</h1>
        </div>);
        })}
     
    </div>
   
  );
}

function viewSubmitedInfo(){

}

export default App
