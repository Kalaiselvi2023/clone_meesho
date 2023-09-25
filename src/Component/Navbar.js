import Image from "./search.png";
import Mobile from "./mobile.png";
import Profile from "./pic.png";
import Cart from "./card.png";
import Cdelivery from "./cash.png";
import Delivery from "./delivery.png";
import Return from "./return.png";
import Store from "./playstore.png";
import Green from "./green.png";
import React from "react";
import "./Navstyle.css";
function Navbar() {
  return (
    <>
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
                <img src={Cart} />
              </div>
              <p>Cart</p>
            </div>
          </div>
        </div>
      </nav>

      <header>
        <ul>
          <li>
            Women Ethnic
            <div class="submenu">
              <div class="women">
                <h2 class="topic">All Women Ethnic</h2>
                <p>View All</p>
              </div>
              <div class="saree">
                <h2 class="topic">Sarees</h2>
                <p>All Sarees</p>
                <p>Slik Sarees</p>
                <p>Cotton Slik Sarees</p>
                <p>Cotton Sarees</p>
                <p>Georgette Sarees</p>
                <p>Chiffon Sarees</p>
                <p>Satin Sarees</p>
                <p>Embroidered Sarees</p>
              </div>
              <div class="kurtis">
                <h2 class="topic">Kurtis</h2>
                <p>All Kurtis</p>
                <p>Anarkali Kurtis</p>
                <p>Rayon Kurtis</p>
                <p>Cotton Kurtis</p>
                <p>Embroidered Kurtis</p>
              </div>
            </div>
          </li>
          <li>
            Women Western
            <div class="submenu">
              <div class="women">
                <h2 class="topic">Topwear</h2>
                <ol>
                  <li>Tops</li>
                  <li>Dresses</li>
                  <li>Sweaters</li>
                  <li>Jumpsuits</li>
                </ol>
              </div>
              <div class="saree">
                <h2 class="topic">Bottomwear</h2>
                <ol>
                  <li>Jeans</li>
                  <li>Jeggings</li>
                  <li>Palazzos</li>
                  <li>Shorts</li>
                  <li>Skirts</li>
                </ol>
              </div>
              <div class="kurtis">
                <h2 class="topic">Innerwear</h2>
                <ol>
                  <li>Bra</li>
                  <li>Briefs</li>
                </ol>
              </div>
              <div class="kurta">
                <h2 class="topic">Sleepwear</h2>
                <ol>
                  <li>Nightsuits</li>
                  <li>Babydolls</li>
                </ol>
              </div>
            </div>
          </li>
          <li>
            Men
            <div class="submenu">
              <div class="women">
                <h2 class="topic">All Women Ethnic</h2>
                <p>View All</p>
              </div>
              <div class="saree">
                <h2 class="topic">Sarees</h2>
                <p>All Sarees</p>
                <p>Slik Sarees</p>
                <p>Cotton Slik Sarees</p>
                <p>Cotton Sarees</p>
                <p>Georgette Sarees</p>
                <p>Chiffon Sarees</p>
                <p>Satin Sarees</p>
                <p>Embroidered Sarees</p>
              </div>
              <div class="kurtis">
                <h2 class="topic">Kurtis</h2>
                <p>All Kurtis</p>
                <p>Anarkali Kurtis</p>
                <p>Rayon Kurtis</p>
                <p>Cotton Kurtis</p>
                <p>Embroidered Kurtis</p>
              </div>
            </div>
          </li>
          <li>
            Kids
            <div class="submenu">
              <div class="women">
                <h2 class="topic">Topwear</h2>
                <ol>
                  <li>Tops</li>
                  <li>Dresses</li>
                  <li>Sweaters</li>
                  <li>Jumpsuits</li>
                </ol>
              </div>
              <div class="saree">
                <h2 class="topic">Bottomwear</h2>
                <ol>
                  <li>Jeans</li>
                  <li>Jeggings</li>
                  <li>Palazzos</li>
                  <li>Shorts</li>
                  <li>Skirts</li>
                </ol>
              </div>
              <div class="kurtis">
                <h2 class="topic">Innerwear</h2>
                <ol>
                  <li>Bra</li>
                  <li>Briefs</li>
                </ol>
              </div>
              <div class="kurta">
                <h2 class="topic">Sleepwear</h2>
                <ol>
                  <li>Nightsuits</li>
                  <li>Babydolls</li>
                </ol>
              </div>
            </div>
          </li>
          <li>
            Home & Kitchen
            <div class="submenu">
              <div class="women">
                <h2 class="topic">All Women Ethnic</h2>
                <p>View All</p>
              </div>
              <div class="saree">
                <h2 class="topic">Sarees</h2>
                <p>All Sarees</p>
                <p>Slik Sarees</p>
                <p>Cotton Slik Sarees</p>
                <p>Cotton Sarees</p>
                <p>Georgette Sarees</p>
                <p>Chiffon Sarees</p>
                <p>Satin Sarees</p>
                <p>Embroidered Sarees</p>
              </div>
              <div class="kurtis">
                <h2 class="topic">Kurtis</h2>
                <p>All Kurtis</p>
                <p>Anarkali Kurtis</p>
                <p>Rayon Kurtis</p>
                <p>Cotton Kurtis</p>
                <p>Embroidered Kurtis</p>
              </div>
            </div>
          </li>
          <li>
            Beauty & Heaith
            <div class="submenu">
              <div class="women">
                <h2 class="topic">Topwear</h2>
                <ol>
                  <li>Tops</li>
                  <li>Dresses</li>
                  <li>Sweaters</li>
                  <li>Jumpsuits</li>
                </ol>
              </div>
              <div class="saree">
                <h2 class="topic">Bottomwear</h2>
                <ol>
                  <li>Jeans</li>
                  <li>Jeggings</li>
                  <li>Palazzos</li>
                  <li>Shorts</li>
                  <li>Skirts</li>
                </ol>
              </div>
              <div class="kurtis">
                <h2 class="topic">Innerwear</h2>
                <ol>
                  <li>Bra</li>
                  <li>Briefs</li>
                </ol>
              </div>
              <div class="kurta">
                <h2 class="topic">Sleepwear</h2>
                <ol>
                  <li>Nightsuits</li>
                  <li>Babydolls</li>
                </ol>
              </div>
            </div>
          </li>
          <li>
            Jewellary & Accessories
            <div class="submenu">
              <div class="women">
                <h2 class="topic">All Women Ethnic</h2>
                <p>View All</p>
              </div>
              <div class="saree">
                <h2 class="topic">Sarees</h2>
                <p>All Sarees</p>
                <p>Slik Sarees</p>
                <p>Cotton Slik Sarees</p>
                <p>Cotton Sarees</p>
                <p>Georgette Sarees</p>
                <p>Chiffon Sarees</p>
                <p>Satin Sarees</p>
                <p>Embroidered Sarees</p>
              </div>
              <div class="kurtis">
                <h2 class="topic">Kurtis</h2>
                <p>All Kurtis</p>
                <p>Anarkali Kurtis</p>
                <p>Rayon Kurtis</p>
                <p>Cotton Kurtis</p>
                <p>Embroidered Kurtis</p>
              </div>
            </div>
          </li>
          <li>
            Bages & Footwear
            <div class="submenu">
              <div class="women">
                <h2 class="topic">Topwear</h2>
                <ol>
                  <li>Tops</li>
                  <li>Dresses</li>
                  <li>Sweaters</li>
                  <li>Jumpsuits</li>
                </ol>
              </div>
              <div class="saree">
                <h2 class="topic">Bottomwear</h2>
                <ol>
                  <li>Jeans</li>
                  <li>Jeggings</li>
                  <li>Palazzos</li>
                  <li>Shorts</li>
                  <li>Skirts</li>
                </ol>
              </div>
              <div class="kurtis">
                <h2 class="topic">Innerwear</h2>
                <ol>
                  <li>Bra</li>
                  <li>Briefs</li>
                </ol>
              </div>
              <div class="kurta">
                <h2 class="topic">Sleepwear</h2>
                <ol>
                  <li>Nightsuits</li>
                  <li>Babydolls</li>
                </ol>
              </div>
            </div>
          </li>
          <li>
            Electronies
            <div class="submenu">
              <div class="women">
                <h2 class="topic">All Women Ethnic</h2>
                <p>View All</p>
              </div>
              <div class="saree">
                <h2 class="topic">Sarees</h2>
                <p>All Sarees</p>
                <p>Slik Sarees</p>
                <p>Cotton Slik Sarees</p>
                <p>Cotton Sarees</p>
                <p>Georgette Sarees</p>
                <p>Chiffon Sarees</p>
                <p>Satin Sarees</p>
                <p>Embroidered Sarees</p>
              </div>
              <div class="kurtis">
                <h2 class="topic">Kurtis</h2>
                <p>All Kurtis</p>
                <p>Anarkali Kurtis</p>
                <p>Rayon Kurtis</p>
                <p>Cotton Kurtis</p>
                <p>Embroidered Kurtis</p>
              </div>
            </div>
          </li>
        </ul>
      </header>

      <div class="total">
        <div class="main">
          <h1>Lowest Prices Best Quality Shopping</h1>
          <div class="main2">
            <div class="free">
              <img src={Delivery} />
              <p>Free Delivery</p>
            </div>
            <div class="case">
              <img src={Cdelivery} />
              <p>Cash on Delivery</p>
            </div>
            <div class="return">
              <img src={Return} />
              <p>Easy Returns</p>
            </div>
          </div>
          <button>
            <img src={Store} />
            Download the Meesho App
          </button>
        </div>
        <div class="rightmain">
          <img src="https://images.meesho.com/images/marketing/1687149525469_512.webp" />
        </div>
      </div>

      <div class="topcategoriesfrom">
        <div class="topcategoriesheading">
          <span class="horizontalLine"></span>

          <h1>Top Categories to choose from</h1>
          <span class="horizontalLine"></span>
        </div>
      </div>
      <div class="fashionforword">
        <div class="womenstore">
          <img src="https://images.meesho.com/images/marketing/1692190996099_400.webp" />
        </div>
        <div class="menstore">
          <img src="https://images.meesho.com/images/marketing/1678691699680_300.webp" />
        </div>
        <div class="kidstore">
          <img src="https://images.meesho.com/images/marketing/1678691712594_300.webp" />
        </div>
      </div>
      <div class="essentialbackground">
        <div class="imagesub">
          <div class="etn">
            <button>View All</button>
          </div>
          <div class="home1">
            <img src="https://images.meesho.com/images/marketing/1678691846068_200.webp" />
            <img src="https://images.meesho.com/images/marketing/1678691858580_150.webp" />
          </div>
          <div class="kit2">
            <img src="https://images.meesho.com/images/marketing/1678691832099_200.webp" />
            <img src="https://images.meesho.com/images/marketing/1678691818629_150.webp" />
          </div>
          <div class="helath">
            <img src="https://images.meesho.com/images/marketing/1678691796046_200.webp" />
            <img src="https://images.meesho.com/images/marketing/1678691781261_150.webp" />
          </div>
        </div>
      </div>
      <div class="newstyle">
        <div class="subnew">
          <div class="subbtn">
            <button>View All</button>
          </div>
          <div class="access1">
            <img src="https://images.meesho.com/images/marketing/1678691960553_200.webp" />
            <img src="https://images.meesho.com/images/marketing/1678691971903_150.webp" />
          </div>
          <div class="footwear2">
            <img src="https://images.meesho.com/images/marketing/1678691936892_200.webp" />
            <img src="https://images.meesho.com/images/marketing/1678691948963_150.webp" />
          </div>
          <div class="elect3">
            <img src="https://images.meesho.com/images/marketing/1678691925419_200.webp" />
            <img src="https://images.meesho.com/images/marketing/1678691914513_150.webp" />
          </div>
        </div>
      </div>
      <div class="become">
        <div class="text">
          <p>Become a Reseller and</p>
          <h1>Start your Online Business</h1>
          <h2> with Zero Investment</h2>
        </div>
      </div>

      <div class="regis">
        <div class="registermeesho">
          <h1>Register as a Meesho Supplier</h1>
          <p>Sell your Products to crores of customer at 0% commision</p>
          <div class="content">
            <div class="greenicon">
              <img src={Green} />
            </div>
            <h4>Grow your Business </h4>
            <h3>10x</h3>
          </div>
          <div class="enjoy">
            <div class="greenicon">
              <img src={Green} />
              <h4>Enjoy 100%</h4>
              <h3>Profit</h3>
            </div>
          </div>
          <div class="sell">
            <div class="greenicon">
              <img src={Green} />
              <h4>Sell all over</h4>
              <h3>India</h3>
            </div>
            <div class="input">
              <h4> Sign Up Now</h4>
            </div>
          </div>

          <div class="pro">
            <h1>Products For You</h1>
            <select>
              <input type="DropDown" value="Sort by : Relevance" />
              <option>Sort by: Relevence</option>
              <option>Relevence</option>
              <option>New Arrivals</option>
              <option>Price(High to Low0</option>
              <option>Price(Low to High)</option>
              <option>Ratings</option>
              <option>Discounts</option>
            </select>
          </div>
          <div class="productcontainer">
            <aside class="productcategory">
              <div class="lef3">
                <h4>FILTERS</h4>
                <h6>1000+ Products</h6>
                <p>__________________</p>
              </div>
              <h3>Category</h3>
              <div class="sub">
                <div class="searchicon">
                  <img src={Image} className="image" alt="" />
                </div>
                <input
                  type="search"
                  placeholder="Search"
                  id="input"
                  class="inputsearch"
                />
              </div>
              <div class="displaycategory">
                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Analog Watches</label>

                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Bangles Bracelets</label>

                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Bedsheets</label>

                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Bike Covers</label>

                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Blouses</label>

                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Bluetooth</label>

                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Bra</label>

                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Car Covers</label>
                <br />
                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Cups & mugs</label>

                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Dresses</label>

                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Dupatta set</label>

                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Dupattas</label>

                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Earrings & Studs</label>

                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Gowns</label>

                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Hair Oil</label>

                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Heels</label>

                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Idols & Figurines</label>
                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Jeans</label>

                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Jewellary set</label>
                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Kitchen Storage</label>
                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Kitchen Tools</label>
                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">kurta set </label>
                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Kurtis</label>
                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Lehengas</label>
                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Mangalsutras</label>
                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Men Jewellary</label>
                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Mobile Accessories</label>
                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Mobile Cases & Covers</label>
                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Motorcycle Covers</label>
                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Nighties</label>
                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Panty</label>
                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Pendants & Lockets</label>
                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Puja Articles</label>
                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Rings</label>
                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Sarees</label>
                <input
                  type="checkbox"
                  class="check"
                  name="Electronies"
                  value="Electronies"
                />
                <label class="ele">Shirts</label>
                <div class="lef7">
                  <p>________________</p>
                </div>
                <div class="lef8">
                  <select>
                    <input type="DropDown" value="catergories" />
                    <option>Gender</option>
                  </select>
                  <p>________________</p>
                </div>
                <div class="lef9">
                  <select>
                    <input type="DropDown" value="catergories" />
                    <option>Fabric</option>
                  </select>
                  <p>________________</p>
                </div>
                <div class="lef10">
                  <select>
                    <input type="DropDown" value="catergories" />
                    <option>Oxfords</option>
                  </select>
                  <p>_______________</p>
                </div>
                <div class="lef11">
                  <select>
                    <input type="DropDown" value="catergories" />
                    <option>Dail_shape</option>
                  </select>
                  <p>________________</p>
                </div>
                <div class="lef12">
                  <select>
                    <input type="DropDown" value="catergories" />
                    <option>Fabric</option>
                  </select>
                  <p>________________</p>
                </div>
                <div class="lef13">
                  <select>
                    <input type="DropDown" value="catergories" />
                    <option>Color</option>
                  </select>
                  <p>________________</p>
                </div>
                <div class="lef14">
                  <select>
                    <input type="DropDown" value="catergories" />
                    <option>Smart Coins</option>
                  </select>
                  <p>________________</p>
                </div>
                <div class="lef15">
                  <select>
                    <input type="DropDown" value="catergories" />
                    <option>Price</option>
                  </select>
                  <p>_________________</p>
                </div>
                <div class="lef16">
                  <select>
                    <input type="DropDown" value="catergories" />
                    <option>Meesho Mall</option>
                  </select>
                  <p>________________</p>
                </div>
                <div class="lef17">
                  <select>
                    <input type="DropDown" value="catergories" />
                    <option>Occassion</option>
                  </select>
                  <p>________________</p>
                </div>
                <div class="lef18">
                  <select>
                    <input type="DropDown" value="catergories" />
                    <option>combo of</option>
                  </select>
                  <p>_________________</p>
                </div>
                <div class="lef19">
                  <select>
                    <input type="DropDown" value="catergories" />
                    <option>Kurta-Fabric</option>
                  </select>
                  <p>________________</p>
                </div>
                <div class="lef20">
                  <select>
                    <input type="DropDown" value="catergories" />
                    <option>Dupatta Color</option>
                  </select>
                  <p>________________</p>
                </div>
                <div class="lef21">
                  <select>
                    <input type="DropDown" value="catergories" />
                    <option>Dupatta Color</option>
                  </select>
                  <p>________________</p>
                </div>
                <div class="lef22">
                  <select>
                    <input type="DropDown" value="catergories" />
                    <option>Discount</option>
                  </select>
                  <p>________________</p>
                </div>
                <div class="lef23">
                  <select>
                    <input type="DropDown" value="catergories" />
                    <option>Rating</option>
                  </select>
                  <p></p>
                </div>
              </div>
            </aside>
            <main class="productdisplay"></main>
          </div>
        </div>
      </div>

      <div class="flex">
        <div class="card">
          <div class="c1">
            <img src="https://images.meesho.com/images/products/230436344/lup42_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c2">
            <img src="https://images.meesho.com/images/products/134547201/spw9z_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c3">
            <img src="https://images.meesho.com/images/products/275098237/jump2_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c4">
            <img src="https://images.meesho.com/images/products/165368871/4xbrq_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
        </div>
        <div class="card2">
          <div class="c5">
            <img src="https://images.meesho.com/images/products/179677672/ntotb_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c6">
            <img src="https://images.meesho.com/images/products/315791064/gakbr_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c7">
            <img src="https://images.meesho.com/images/products/304287688/baxep_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c8">
            <img src="https://images.meesho.com/images/products/60422990/hhmpo_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
        </div>
        <div class="card3">
          <div class="c9">
            <img src="https://images.meesho.com/images/products/280046490/efkvl_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c10">
            <img src="https://images.meesho.com/images/products/310365528/z5rft_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c11">
            <img src="https://images.meesho.com/images/products/92382474/msi8s_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c12">
            <img src="https://images.meesho.com/images/products/289888408/jzhro_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
        </div>
        <div class="card4">
          <div class="c13">
            <img src="https://images.meesho.com/images/products/313948928/s4ucs_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c14">
            <img src="https://images.meesho.com/images/products/335448870/t51ez_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c15">
            <img src="https://images.meesho.com/images/products/310711913/jzplz_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c16">
            <img src="https://images.meesho.com/images/products/249062718/1zutl_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
        </div>
        <div class="card4">
          <div class="c17">
            <img src="https://images.meesho.com/images/products/281141592/9vxlx_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c18">
            <img src="https://images.meesho.com/images/products/67606981/emdob_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c19">
            <img src="https://images.meesho.com/images/products/208933961/vfywu_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c20">
            <img src="https://images.meesho.com/images/products/290445019/dcua7_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
        </div>
        <div class="card4">
          <div class="c21">
            <img src="https://images.meesho.com/images/products/299724560/wmsl2_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c22">
            <img src="https://images.meesho.com/images/products/329376118/9kybb_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c23">
            <img src="https://images.meesho.com/images/products/245439981/q0p2b_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c24">
            <img src="https://images.meesho.com/images/products/309360984/1wyw7_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
        </div>

        <div class="rig2">
          <div class="c5">
            <img src="https://images.meesho.com/images/products/179677672/ntotb_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c6">
            <img src="https://images.meesho.com/images/products/315791064/gakbr_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c7">
            <img src="https://images.meesho.com/images/products/304287688/baxep_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c8">
            <img src="https://images.meesho.com/images/products/60422990/hhmpo_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
        </div>
        <div class="rig4">
          <div class="c13">
            <img src="https://images.meesho.com/images/products/313948928/s4ucs_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c14">
            <img src="https://images.meesho.com/images/products/335448870/t51ez_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c15">
            <img src="https://images.meesho.com/images/products/310711913/jzplz_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c16">
            <img src="https://images.meesho.com/images/products/249062718/1zutl_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
        </div>
        <div class="rig6">
          <div class="c21">
            <img src="https://images.meesho.com/images/products/299724560/wmsl2_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c22">
            <img src="https://images.meesho.com/images/products/329376118/9kybb_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c23">
            <img src="https://images.meesho.com/images/products/245439981/q0p2b_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c24">
            <img src="https://images.meesho.com/images/products/309360984/1wyw7_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
        </div>
        <div class="rig2">
          <div class="c1">
            <img src="https://images.meesho.com/images/products/20393758/htrro_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c2">
            <img src="https://images.meesho.com/images/products/134547201/spw9z_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c3">
            <img src="https://images.meesho.com/images/products/275098237/jump2_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
          <div class="c4">
            <img src="https://images.meesho.com/images/products/165368871/4xbrq_400.webp" />
            <p>Stylo Water Bottols</p>
            <h4>
              $665<span>onwards</span>
            </h4>
            <h6>Free Delivery</h6>
            <button>3.9*</button>
            <span>1499 Reviews</span>
          </div>
        </div>
        <footer>
          <div class="footer">
            <div class="subfoot">
              <p>Shop Non-Stop on Meesho</p>
              <h6>
                Trusted by more than 1 Crore Indians <br />
                Cash on Delivery | Free Delivery
              </h6>
              <div class="foot">
                <div class="foot1">
                  <img src="https://images.meesho.com/images/pow/playstore-icon-big_400.webp" />
                </div>
                <div class="foot1">
                  <img src="https://images.meesho.com/images/pow/appstore-icon-big_400.webp" />
                </div>
              </div>
            </div>
            <div class="subfoot2">
              <ul>
                <li>Career</li>
                <li>Become a Supplier</li>
                <li>Hall of Fame</li>
                <li>Sitemap</li>
              </ul>
            </div>
            <div class="subfoot3">
              <ul>
                <li>Legal and Policy</li>
                <li>Meesho Tech Blog</li>
                <li>Notice and Return</li>
              </ul>
            </div>
            <div class="subfoot4">
              <h4>Reach out to us</h4>
              <div class="ftimg">
                <div class="ftimg1">
                  <img src="https://images.meesho.com/images/pow/facebook.png" />
                </div>
                <div class="ftimg2">
                  <img src="https://images.meesho.com/images/pow/instagram.png" />
                </div>
                <div class="ftimg3">
                  <img src="https://images.meesho.com/images/pow/youtube.png" />
                </div>
                <div class="ftimg4">
                  <img src="https://images.meesho.com/images/pow/linkedin.png" />
                </div>
                <div class="ftimg5">
                  <img src="https://images.meesho.com/images/pow/twitter.png" />
                </div>
              </div>
            </div>
            <div class="subfoot5">
              <h3>Contact Us</h3>
              <p>Fashnear Technologies Private</p>
              <p>Limited,</p>
              <p>CIN: U74900KA2015PTC082263</p>
              <p>06-105-B, 06-102, (138 Wu)</p>
              <p>Vaishnavi Signature, No. 78/9,</p>
              <p>Outer Ring Road, Bellandur,</p>
              <p>Varthur Hobli, Bengaluru-560103</p>
              <p>Karnataka, India</p>
              <p>E-mail address: query@meesho.com</p>
              <p>© 2015-2023 Meesho.com</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
export default Navbar;
