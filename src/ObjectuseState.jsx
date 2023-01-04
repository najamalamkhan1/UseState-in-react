import React, { useState } from 'react'

function ObjectuseState() {
    // State Variable
    const [personArray, setPersonArray] = useState([])
    const [personObject, setPersonObject] = useState({})
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    // Helper Function
    let btnfunc = () => {
        setPersonArray([{
            username: userName,
            password: password
        }])
        console.log(
            [{
                username: userName,
                password: password
            }]
        )
    }


    return (
        <div className="container">
            {/* {personObject} */}
            <div>
                Username:<input type="text" value={userName} onChange={(e) => { return (setUserName(e.target.value)) }} />    
                </div>
                <div>
                Password: <input type="password" value={password} onChange={(e) => { return (setPassword(e.target.value)) }} />
            </div>
            <div>
                <button onClick={btnfunc}>Submit</button>
            </div>
        </div>

    )
}

export default ObjectuseState