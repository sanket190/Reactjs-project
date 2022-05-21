import "./brand.css"

export default function Brand() {
  return (
    <div className="brand">
      <div className="brandtitle">
          <span>Sustainable Brands</span>
      </div>
      <div className="brands">
        <div className="brandcol">
          <img className="brandimg" src="./images/b1.png" alt="brand"/>
          <h1>Brown Living</h1>
          <p>Buy sustainable zero-waste products from best brands.</p>
        </div>
        <div className="brandcol">
          <img className="brandimg" src="./images/b2.png"alt="brand"/>
          <h1>Planet Care</h1>
          <p>Buy sustainable zero-waste products from best brands. </p>
        </div>
        <div className="brandcol">
          <img className="brandimg" src="./images/b3.png"alt="brand"/>
          <h1>Ecohoy</h1>
          <p>Buy sustainable zero-waste products from best brands.</p>
          </div>
      </div>
      <div className="brands">
        <div className="brandcol">
          <img className="brandimg" src="./images/b4.png" alt="brand"/>
          <h1>Sustainable Products</h1>
          <p>Buy sustainable zero-waste products from best brands.</p>
        </div>
        <div className="brandcol">
          <img className="brandimg" src="./images/b5.png"alt="brand"/>
          <h1>
The Sustainable Indian</h1>
          <p>Buy sustainable zero-waste products from best brands.</p>
        </div>
        <div className="brandcol">
          <img className="brandimg" src="./images/b6.png" alt="brand"/>
          <h1>Earthsy.in</h1>
          <p>Buy sustainable zero-waste products from best brands.</p>
          </div>
      </div>
      <div className="brandview">
            <a href="https://www.qizaa.com/allproducts" class="brandview-btn">View all</a>
      </div>

    </div>
  )
}
