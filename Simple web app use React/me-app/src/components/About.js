import Logo from "../image/logos.jpg";
import "../css/About.css";
import { useState } from "react";

function About() {
  const [popupm, setPopUpM] = useState(false);

  const clickMore = () => {
    setPopUpM(true);
  };

  function clickAClose() {
    setPopUpM(false);
  }

  return (
    <section id="about">
      <div>
        <div className="about-main">
          <div>
            <img src={Logo} alt="logos" />
          </div>
          <div className="about-submain">
            <div>
              <h1>ABOUT</h1>
            </div>
            <div>
              <h3>ADMIN</h3>
            </div>
            <div>
              <h5>Nadeesha Ruwandima</h5>
            </div>
            <div>
              <p className="lbl-p1">
                React is most power in language in current world<br></br>
                And create your world use magic component as well<br></br>
                Function is your real friend in react world cloud<br></br>
                You can handle css properties to create amazing thing<br></br>
                Success your future using react world<br></br>
              </p>
            </div>
            <div>
              <button onClick={clickMore}>Read more</button>
            </div>
          </div>
        </div>
        <div>
          <div
            className="about-h-submain"
            style={{
              right: `${popupm ? "6%" : "-80%"}`,
            }}
          >
            <div>
              <button className="btn-close" onClick={clickAClose}>
                x
              </button>
            </div>
            <div>
              <h3>ADMIN</h3>
            </div>
            <div>
              <h5>Nadeesha Ruwandima</h5>
            </div>
            <div>
              <p className="lbl-hp1">
                React is most power in language in current world<br></br>
                And create your world use magic component as well<br></br>
                Function is your real friend in react world cloud<br></br>
                You can handle css properties to create amazing thing<br></br>
                Success your future using react world<br></br>
              </p>
            </div>
            <div>
              <p className="lbl-hp2">
                React is most power in language in current world<br></br>
                And create your world use magic component as well<br></br>
                Function is your real friend in react world cloud<br></br>
                You can handle css properties to create amazing thing<br></br>
                Success your future using react world<br></br>
                React is Modern Language in this current world<br></br>
                Method can be divide two type that are normal function<br></br>
                and arrow function and function can return value or run<br></br>
                default macanism<br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
