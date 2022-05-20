import "./service.css"

export default function Service() {
  return (
    <div className="service">
      <div className="title">
        <h1> What We Offer </h1>
        <p>Qizaa is an All In One platform for Sustainable Products, B2B Sustainable Services, and Community Programs for a Sustainable Lifestyle.</p>
      </div>
      <div className="facility">
        <div className="servcol">
          <img className="facilimg" src="./images/sustainability.png"/>
          <h1>Sustainable Products</h1>
          <p>Buy sustainable zero-waste products from best brands.</p>
        </div>
        <div className="servcol">
          <img className="facilimg" src="./images/B2B.png"/>
          <h1>B2B Services</h1>
          <p>Introducing sustainable culture in corporate environment. </p>
        </div>
        <div className="servcol">
          <img className="facilimg" src="./images/community.png"/>
          <h1>Our Community</h1>
          <p>Introducing sustainable culture in all communities.</p>
          </div>
      </div>
    </div> 
  )
}
