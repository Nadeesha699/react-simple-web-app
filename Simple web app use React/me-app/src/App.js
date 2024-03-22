import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
// import Shop from "./components/Shop";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import About from "./components/About";
import Banner from "./components/Banner";
// import Login from './components/Login';

function App() {
  return (
    <>
      {/* <Login/> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Banner />
                <Shop />
                <About />
                <Contact />
              </>
            }
          />
          {/* <Route path="/shop" element={<Shop />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
