import { useState } from "react";
import "../css/Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(false);
  const [success,setSuccess] = useState(false);
  const [errormsg,setErrormsg] = useState("");

  function clickLogin() {
    if (name.length === 0) {
        setError(
            true
        )
        setErrormsg(
            "empty name"
        )
    } else if (password.length === 0) {
        setError(
            true
        )
        setErrormsg(
            "empty password"
        )
    } else if (password !== "1234") {
        setError(
            true
        )
        setErrormsg(
            "incorrect password"
        )
    }
    else{
        setName(
            ""
        )
        setPassword(
            ""
        )
        setError(
            false
        )
        setSuccess(
            true
        )
    }
  }

  const clickEClose = () =>{
    setError(
        false
    )
  }

  const clickSClose = () =>{
    setSuccess(
        false
    )
  }

  return (
    <>
      <div className="login-background">
        <div className="login-card">
          <div>
            <h1>LOGIN</h1>
          </div>
          <div>
            <input
              type="text"
              placeholder="user name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <button onClick={clickLogin}>login</button>
          </div>
        </div>
        <div className="display-error" style={{
            top:`${error?"10px":"-200px"}`
        }}>
          <div>
            <button onClick={clickEClose}>x</button>
          </div>
          <div>
            <label>{errormsg}</label>
          </div>
        </div>
        <div className="display-success" style={{
            top:`${success?"10px":"-200px"}`
        }}>
          <div>
            <button onClick={clickSClose}>x</button>
          </div>
          <div>
            <label>login success</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
