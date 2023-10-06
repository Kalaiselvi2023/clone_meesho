import React from "react";
import Image from "./search.png";
import Mobile from "./mobile.png";
import Profile from "./pic.png";
import Card from "./card.png";
import "./nav.css";
function Nav() {
  return (
    <div>
      <nav>
        <div class="logo">
          <a>meesho</a>
        </div>
        <div class="searchbox">
          <div class="searchicon">
            <img src={Image} className="image" alt="" />
          </div>
          <from action="">
            <input
              type="search"
              placeholder="Try Saree, Kurti or Search from Product Code"
              id="input"
              class="inputsearch"
            />
            <div class="searchrecentmodel">
              <h3>Popular search</h3>
              <ul>
                <li>Saree</li>
                <li>kurtis</li>
                <li>Samartwatch</li>
              </ul>
            </div>
          </from>
        </div>
        <div class="headerright">
          <div class="downloadcontain">
            <div class="mobileicon">
              <img src={Mobile} />
            </div>
            <p>Download App</p>
            <div class="downloadhover">
              <p>Download form</p>

              <a href="" class="dbtn">
                <img src="https://images.meesho.com/images/pow/playstore-icon-big.png" />
              </a>
              <a href="" class="dbtn1">
                <img src="https://images.meesho.com/images/pow/appstore-icon-big.png" />
              </a>
            </div>
          </div>
          <div class="seller">
            <p>Become a Supplier</p>
          </div>
          <div class="profilecont">
            <div class="profile">
              <div class="picon">
                <img src={Profile} />
              </div>
              <p>Profile</p>
            </div>
            <div class="cart">
              <div class="cicon">
                <img src={Card} />
              </div>
              <p>Cart</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
