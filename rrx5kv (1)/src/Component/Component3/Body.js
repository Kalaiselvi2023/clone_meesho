import Cdelivery from "./cash.png";
import Delivery from "./delivery.png";
import Return from "./return.png";
import Store from "./playstore.png";
import Green from "./green.png";
import "./body.css";
function Body() {
  return (
    <div>
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
          <img src="https://images.meesho.com/images/marketing/1695987804920_512.webp" />
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
        </div>
      </div>
    </div>
  );
}
export default Body;
