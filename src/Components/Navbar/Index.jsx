import React from "react";
import { Link } from "react-router-dom";
import './Index.css'
import { AiFillHome } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

function Index() {
  return (
    <>
      <header>
        <nav>
          <div className="left">
            <Link to={"/"}>
            <img className="logo"
              src="https://www.logo.wine/a/logo/Binance/Binance-Horizontal-Black-Logo.wine.svg"
              alt=""
            />
            </Link>
            
          </div>
          <div className="mid">
            <img className="mid" src="https://www.coolgenerator.com/Data/Textdesign/202301/f6bb18f73fd3dedb20ecc8f44a95b882.png" alt="" />
          </div>
          <div className="right">
            <ul className="rights">
              <Link className="link" to={"/"}>Home  <span style={{marginLeft:"5px"}}><AiFillHome/></span></Link>

              <Link className="link" to={"/favourites"}>Favourites <span style={{marginLeft:"5px", color:"red"}}><FaHeart /></span></Link>

             
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Index;
