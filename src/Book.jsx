import React, { useState } from 'react'

function Book(props) {
  // State Variables
  const [studentObject, setStudentObject] = useState({})
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  // Helper Function
  function formSubmit() {
    setStudentObject(
      {
        username: userName,
        password: password
      }
     )
    console.log(
      {
        username: userName,
        password: password
      }
    )
  }



  return (
    <div className="container">
      <div>
        userName: <input value={userName} onChange={(e) => { setUserName(e.target.value) }} type="text" />
        <div>
          password: <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" />
        </div>
        <div>
          <button onClick={formSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Book