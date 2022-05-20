import "./topbar.css"


export default function Topbar() {
  return (
    <div className="top">
      
      <div className="topleft">
      
     
      <img className="topicon" src="./images/topicon.png" alt="qizaaicon"/>
      <img className="topiname" src="./images/sitename.png" alt="qizaaname"/>
      </div>
      

      <div className="topcenter">
          <ul className="toplist">
              <li className="toplistitem">Home</li>
              <li className="toplistitem">Our Store</li>
              <li className="toplistitem">Tableware</li>
              <li className="toplistitem">Sustainable Packaging</li>
              <li className="toplistitem">Lifestyle Products</li>
              <li className="toplistitem">Oragnic Product</li>
              
          </ul>
      </div>
      <div className="topright">  
      <i className="cart fa-solid fa-cart-shopping"></i>
      <i className="zero fa-solid fa-circle-0"></i>
      <i className="signin fa fa-user" aria-hidden="true"></i>
      <a className="join"href="https://www.qizaa.com/">Join Community</a>
      </div>
    </div>
  )
}
