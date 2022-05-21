import Header from  "../../header/header.jsx";
import Service from "../../service/service.jsx"
import Shop from "../../shop/shop.jsx"
import Brand from "../../Brand/brand.jsx";
import "./home.css"

export default function Home() {
  return (
    <>
    <Header/>
     <div className="home">
      <Service/>
    </div>
    <Shop/>
    <Brand/>
    </>
   
  )
}
