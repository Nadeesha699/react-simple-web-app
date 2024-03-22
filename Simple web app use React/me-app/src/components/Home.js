// import Home_img1 from '../image/home-img1.jpg';
import Home_img2 from '../image/home-img2.jpg';
import Home_img3 from '../image/home-img3.jpg';
import Home_img4 from '../image/background.jpg';
import '../css/Home.css';
import { HashLink } from 'react-router-hash-link';
// npm i react-router-hash-link

function Home() {
  return (
    <>
    <section id='home'>
      <div className='homo-main'>
        <div className='slide-bar'></div>
        {/* <div><img alt='home_img1' className='img-h1'/></div> */}
        <div className='home-main2'>
          <div className='home-submain'>
            <div><p>React is most power in language in current world<br></br> 
            And create your world use magic component as well<br></br>
            Function is your real friend in react world cloud<br></br>
            You can handle css properties to create amazing thing<br></br>
            Success your future using react world<br></br>
            </p></div>
            <div><HashLink to="/shop">
                  <button>shop now</button>
                </HashLink></div>
          </div>
          <div className='homo-img2'>
            <div><img src={Home_img2} alt='home_img1' className='h-img1'/></div>
            <div><img src={Home_img3} alt='home_img1' className='h-img2'/></div>
            <div><img src={Home_img4} alt='home_img1' className='h-img3'/></div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default Home;
