import SButton from "./SButton";
import "./Login.css"
import TextInput from "./TextInput";
import { useState } from "react";

function Login(){
    const[name, setName] = useState("");


    return(
        <div>
            
        <button className="btn2">Login</button><br /> <br />
        <TextInput holder="Enter Your Name" />
        <SButton title="Submit" color="red" func={() => (console.log("Submitted"))} />
        <SButton title="Cancle" color="yellow" func={() => {console.log("Cancleeee");}} />
        <SButton title="Go Back" color="green" func={() => {console.log("Go Backkkkk");}} />

        <input type="text" onChange={(e)=> {setName(e.target.value) }} />

        <button onClick={() =>{console.log(name);}}>Print data</button>
       
        </div>
       
    )
}

export default Login;