import { useState } from "react";
import "../css/Header.css";
import { HashLink } from "react-router-hash-link";

const Header = () => {

  const [menu,setMenu] = useState(false);

  function clickMenu(){
     setMenu(
      true
     )
  }

  function clickClose(){
    setMenu(
      false
    )
  }

  return (
    <>
      <div className="header-background">
        <div className="header">
          <div>
            <h1>RE4CT WEB APP</h1>
          </div>
          <div>
            <label className="lbl-reg">register us</label>
          </div>
          <div>
            <label className="lbl-menu" onClick={clickMenu}>menu</label>
          </div>
          <div className="menu" style={{
            right:`${menu?"-2%":"-20%"}`
          }}>
            <div>
              <label onClick={clickClose} className="lbl-close">x</label>
            </div>
            <div><HashLink to="#home" className="lbl-home"><label>home</label></HashLink></div>
            <div><HashLink to="#shop" className="lbl-shop"><label>shop</label></HashLink></div>
            <div><HashLink to="#about" className="lbl-about"><label>about</label></HashLink></div>
            <div><HashLink to="#contact" className="lbl-about"><label>contact us</label></HashLink></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
