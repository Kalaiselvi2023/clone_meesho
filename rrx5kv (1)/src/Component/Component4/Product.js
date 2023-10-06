import Image from "./search.png";
import "./Product.css";
function Product() {
  return (
    <div className="parent">
      <div class="card">
        <div class="lef">
          <div class="lef1">
            <h2>Products For You</h2>
          </div>
          <div class="lef2">
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
          <div class="mainlef3">
            <div class="lef3">
              <h4>FILTERS</h4>
              <h6>1000+ Products</h6>
              <p>______________________</p>
            </div>
            <div class="lef4">
              <select>
                <input type="DropDown" value="catergories" />
                <option>Category</option>
              </select>
            </div>
            <div class="lef5">
              <div class="sicon">
                <img src={Image} className="image" alt="" />
              </div>
              <form>
                <input
                  type="search"
                  placeholder="Search"
                  id="input"
                  class="searchinput"
                />
              </form>
            </div>
            <div class="sublef6">
              <div class="slef1">
                <input type="checkbox" value="Analog Watches" />
                <label>Analog Watches</label>
              </div>
              <div class="slef1">
                <input type="checkbox" value="Bangles & Bracelets" />
                <label>Bangles & Bracelets</label>
              </div>
              <div class="slef1">
                <input type="checkbox" value="Bedsheets" />
                <label>Bedsheets</label>
              </div>
              <div class="slef1">
                <input type="checkbox" value="Bike Cover" />
                <label>Bike Cover</label>
              </div>
              <div class="slef1">
                <input type="checkbox" value="Blouses" />
                <label>Blouses</label>
              </div>
              <div class="slef1">
                <input type="checkbox" value="Bluetooth Headphones" />
                <label>Bluetooth Headphones</label>
              </div>
              <div class="slef1">
                <input type="checkbox" value="Bra" />
                <label>Bra</label>
              </div>
              <div class="slef1">
                <input type="checkbox" value="Car Covers" />
                <label>Car Covers</label>
              </div>
              <div class="slef1">
                <input type="checkbox" value="Bra" />
                <label>Bra</label>
              </div>
              <div class="slef1">
                <input type="checkbox" value="Cup & Mugs" />
                <label>Cup & Mugs</label>
              </div>
              <div class="slef1">
                <input type="checkbox" value="Dresses" />
                <label>Dresses</label>
              </div>
              <div class="slef1">
                <input type="checkbox" value="Duppata Sets" />
                <label>Duppata Sets</label>
              </div>
              <div class="slef1">
                <input type="checkbox" value="Duppatas" />
                <label>Duppatas</label>
              </div>
            </div>
            <div class="lef7">
              <p>_______________________</p>
            </div>
            <div class="lef8">
              <select>
                <input type="DropDown" value="catergories" />
                <option>Gender</option>
              </select>
              <p>______________________</p>
            </div>
            <div class="lef9">
              <select>
                <input type="DropDown" value="catergories" />
                <option>Fabric</option>
              </select>
              <p>_______________________</p>
            </div>
            <div class="lef10">
              <select>
                <input type="DropDown" value="catergories" />
                <option>Oxfords</option>
              </select>
              <p>_______________________</p>
            </div>
            <div class="lef11">
              <select>
                <input type="DropDown" value="catergories" />
                <option>Dail_shape</option>
              </select>
              <p>_______________________</p>
            </div>
            <div class="lef12">
              <select>
                <input type="DropDown" value="catergories" />
                <option>Fabric</option>
              </select>
              <p>_______________________</p>
            </div>
            <div class="lef13">
              <select>
                <input type="DropDown" value="catergories" />
                <option>Color</option>
              </select>
              <p>_______________________</p>
            </div>
            <div class="lef14">
              <select>
                <input type="DropDown" value="catergories" />
                <option>Smart Coins</option>
              </select>
              <p>_______________________</p>
            </div>
            <div class="lef15">
              <select>
                <input type="DropDown" value="catergories" />
                <option>Price</option>
              </select>
              <p>_______________________</p>
            </div>
            <div class="lef16">
              <select>
                <input type="DropDown" value="catergories" />
                <option>Meesho Mall</option>
              </select>
              <p>_______________________</p>
            </div>
            <div class="lef17">
              <select>
                <input type="DropDown" value="catergories" />
                <option>Occassion</option>
              </select>
              <p>_______________________</p>
            </div>
            <div class="lef18">
              <select>
                <input type="DropDown" value="catergories" />
                <option>combo of</option>
              </select>
              <p>_______________________</p>
            </div>
            <div class="lef19">
              <select>
                <input type="DropDown" value="catergories" />
                <option>Kurta-Fabric</option>
              </select>
              <p>_______________________</p>
            </div>
            <div class="lef20">
              <select>
                <input type="DropDown" value="catergories" />
                <option>Dupatta Colors</option>
              </select>
              <p>_______________________</p>
            </div>
            <div class="lef21">
              <select>
                <input type="DropDown" value="catergories" />
                <option>Dupatta </option>
              </select>
              <p>_______________________</p>
            </div>
            <div class="lef22">
              <select>
                <input type="DropDown" value="catergories" />
                <option>Discount</option>
              </select>
              <p>_______________________</p>
            </div>
            <div class="lef23">
              <select>
                <input type="DropDown" value="catergories" />
                <option>Rating</option>
              </select>
              <p>_______________________</p>
            </div>
            <div class="lef24">
              <select>
                <input type="DropDown" value="catergories" />
                <option>Size</option>
              </select>
              <p>_______________________</p>
            </div>
            <div class="lef25">
              <select>
                <input type="DropDown" value="catergories" />
                <option>Combo</option>
              </select>
              <p>_______________________</p>
            </div>
            <div class="lef26">
              <select>
                <input type="DropDown" value="catergories" />
                <option>operating_voltage</option>
              </select>
              <p>_______________________</p>
            </div>
            <div class="lef27">
              <select>
                <input type="DropDown" value="catergories" />
                <option>Reversable</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
