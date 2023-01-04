import logo from './logo.svg';
import './App.css';
// import React, { useState } from 'react';
// import Book from './Book';
import ObjectuseState from './ObjectuseState';

function App() {
  // States Variable
  // const [studantArray, setStudentArray] = useState([])
  // Here empty array is used for breaking array with ...studentArray 
  // const [inputData, setInputData] = useState(["Invalid value"])
  

  
  // Helper Functions
  // function btnfunc() {
  //   // let newArray = [...studantArray, inputData]


  //   // let newArray = studantArray.filter((item) => {
  //   //   return "Apple" != item
  //   // }) 
  //   // using array.filter method for safty purpose for not changing the useState variable

    
  //   setStudentArray([...studantArray, inputData])
  //   // ...studentArray keep the old value in array
  // }

  // function inputfunc(e) {
  //   setInputData(e.target.value)

  // }

  return (
    <div className="container">
      {/* <ul>
        {studantArray.map(
          (item) => {
            return <li>{item}</li>
          }
        )}
      </ul>
      <div>
        <input onChange={inputfunc} type="text" />
        <button onClick={btnfunc}>Click</button>
      </div> */}
   
{/* <Book /> */}
<ObjectuseState />
    </div>
  );
}

export default App;
