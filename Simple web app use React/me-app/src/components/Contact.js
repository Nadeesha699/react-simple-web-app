import { useState } from "react";
import "../css/Contact.css";
import Facebook from "../image/facebook.png";
import Intragram from "../image/instagram.png";

const Contact = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [mesage,setMessage] = useState("");
  const [backs,setBacks] = useState(false);
  const [success,setSuccess] = useState(false);

  const clickSubs = () =>{
    if(name.length === 0){
      setBacks(
        true
      )
    }
    else if(email.length === 0){
      setBacks(
        true
      )
    }
    else if(subject.length === 0){
      setBacks(
        true
      )
    }
    else if(mesage.length === 0){
      setBacks(
        true
      )
    }
    else{
      setBacks(
        false
      )
      setSuccess(
        true
      )
      setName(
        ""
      )
      setEmail(
        ""
      )
      setMessage(
        ""
      )
      setSubject(
        ""
      )
    }
  }

  function clickSClose(){
    setSuccess(
      false
    )
  }

  return (
    <section id="contact">
    <div className="main-contact" style={{
      backgroundColor:`${backs?"rgb(255, 2, 74)":"rgba(0, 0, 0, 0.401)"}`
    }}>
      <div>
        <div>
          <h1>CONTACT</h1>
        </div>
        <div>
          <h5>will can be contact us</h5>
        </div>
        <div>
          <p>
            React is most power in language in current world<br></br>
            And create your world use magic component as well<br></br>
            Function is your real friend in react world cloud<br></br>
            You can handle css properties to create amazing thing<br></br>
            Success your future using react world<br></br>
          </p>
        </div>
        <div>
          <label className="lbl-email">Email:</label>
        </div>
        <div>
          <label className="lbl-name">nadeesharuwandima@gmial.com</label>
        </div>
        <div className="submain-icon">
          <div>
            <img src={Facebook} alt="facebook" />
          </div>
          <div>
            <img src={Intragram} alt="facebook" />
          </div>
        </div>
      </div>
      <div className="submian-form">
        <div>
          <input type="text" placeholder="Name" value={name} onChange={
            (e) =>{
              setName(
                e.target.value
              )
            }
          }/>
        </div>
        <div>
          <input type="text" placeholder="Email" value={email} onChange={
            (e) =>{
              setEmail(
                e.target.value
              )
            }
          }/>
        </div>
        <div>
          <input type="text" placeholder="Subject" value={subject} onChange={
            (e) =>{
              setSubject(
                e.target.value
              )
            }
          } />
        </div>
        <div>
          <input type="text" placeholder="Message" value={mesage} onChange={
            (e) =>{
              setMessage(
                e.target.value
              )
            }
          }/>
        </div>
        <div>
          <button onClick={clickSubs}>submit</button>
        </div>
      </div>
      <div className="display-success" style={{
            right:`${success?"10px":"-200px"}`
        }}>
          <div>
            <button onClick={clickSClose}>x</button>
          </div>
          <div>
            <label>submitted</label>
          </div>
        </div>
    </div>
    </section>
  );
};

export default Contact;
