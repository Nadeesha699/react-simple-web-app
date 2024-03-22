import Truck from "../image/delivery-truck.png";
import "../css/Banner.css";

const Banner = () => {
  return (
    <div className="main-banner">
      <div className="submain-banner">
        <div>
          <label className="lbl-dis">20% Discount off</label>
        </div>
        <div>
          <img src={Truck} alt="truck"></img>
        </div>
      </div>
      <div>
        <label className="lbl-more">Get more</label>
      </div>
    </div>
  );
};

export default Banner;
