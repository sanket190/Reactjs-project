import "./footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <div className="inforow">
        <div className="infocol">
          <h1>Contact</h1>
          <p>Opp. 483/14  Harikaka<br></br> 
            Compound, NH4, Belgavi-<br></br>
            Hubli Service Road, Belgavi <br></br>
            - Karnataka India - 590016<br></br>
            Email-   info@qizaa.com<br></br>
            Call -    +91 9075006557<br></br>
            </p>
        </div>
        <div className="infocol">
          <h1>Shop</h1>
          <p>All Products <br></br>

            Lifestyle Products<br></br>

            Organic Product <br></br>

            Tableware
            <br></br></p>
        </div>
        <div className="infocol">
          <h1>Customer Support</h1>
          <p>Contact Us<br></br>

            Help Center<br></br>

            About Us<br></br>

            Careers
            <br></br>
            </p>
          </div>

          <div className="infocol">
          <h1>Policy</h1>
          <p>Shipping & Returns <br></br>

            Terms & Conditions<br></br>

            Privacy Policy<br></br>

            FAQ</p>
          </div>

      </div>

      <div className="icons">
      <img className="iconimg" src="https://img.icons8.com/color/48/000000/facebook.png" alt="icon"/>
      <img className="iconimg" src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt="icon"/>
      <img className="iconimg" src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="icon"/>
      </div>
     
      <div className="payments">
          <p>We accept the following paying methods</p><br></br>
          <img className="payimg" src="https://img.icons8.com/color/48/000000/mastercard.png" alt="icon"/>
          <img className="bhim" src="./images/bhim-upi.png" alt="icon"></img>
          <img className="upi" src="./images/upi.png" alt="icon"></img>
          <img className="payimg" src="https://img.icons8.com/color/48/000000/american-express-squared.png" alt="icon"/>
          <img className="payimg" src="https://img.icons8.com/color/48/000000/visa.png" alt="icon"/>
          <img className="payimg" src="https://img.icons8.com/color/48/000000/paypal.png" alt="icon"/>
      </div>
      <div className="bottom">
        <div className="qicon">
            <img className="qizicon" src="./images/topicon.png" alt="icon"></img>
        </div> 
        <div className="qname">
          <img className="qizname" src="./images/sitename.png" alt="icon"></img>
        </div>
          <p>All Rights Reserved   © 2021 by Qizaa -  Sustainablity in Your Pocket</p>

      </div>

    </div>
  )
}
