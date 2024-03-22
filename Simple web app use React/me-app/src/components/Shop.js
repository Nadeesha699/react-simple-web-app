import { useState } from "react";
import { SData, SHData } from "../Data/StoreData";
import "../css/Shop.css";

function Shop() {
  const [shop, setShop] = useState(false);

  const clickShop = () => {
    setShop(true);
  };

  function clickHShop() {
    setShop(false);
  }

  return (
    <>
      <section id="shop">
        <div className="home-main">
          <div>
            <label className="txt-list">SHOP</label>
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
          <div className="card-background">
            {SData.map((ele) => {
              return (
                <div className="card">
                  <div>
                    <img src={ele.image} alt="item" className="img-card" />
                  </div>
                  <div>
                    <label className="item">{ele.item}</label>
                  </div>
                  <div>
                    <label className="price">{ele.price}</label>
                  </div>
                  <div>
                    <label className="dis">{ele.discription}</label>
                  </div>
                  <div>
                    <button className="btn-add">ADD</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <div>
              <button className="btn-more" onClick={clickShop}>
                more
              </button>
            </div>
            <div
              className="card-h-main"
              style={{
                top: `${shop ? "2%" : "-200%"}`,
              }}
            >
              <div>
                <button className="btn-close" onClick={clickHShop}>
                  x
                </button>
              </div>
              <div className="card-hbackground">
                {SHData.map((ele) => {
                  return (
                    <div className="hcard">
                      <div>
                        <img src={ele.image} alt="item" className="img-card" />
                      </div>
                      <div>
                        <label className="item">{ele.item}</label>
                      </div>
                      <div>
                        <label className="price">{ele.price}</label>
                      </div>
                      <div>
                        <label className="dis">{ele.discription}</label>
                      </div>
                      <div>
                        <button className="btn-add">ADD</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;
