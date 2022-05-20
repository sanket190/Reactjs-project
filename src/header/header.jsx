import "./header.css"

export default function Header() {
  return (
    <div className='header'>
     
      <img className="Lheaderimg" src="https://static.wixstatic.com/media/272cf7_a9b01c08b1204241b557e54afdd43fcb~mv2.png/v1/fill/w_1596,h_1052,al_t,q_90,enc_auto/272cf7_a9b01c08b1204241b557e54afdd43fcb~mv2.png" alt="hexagon" />
      <img className="Uheaderimg" src="https://static.wixstatic.com/media/272cf7_71e7fe458d8a41d08f2c3c2f0857c67e~mv2.png/v1/fill/w_1156,h_579,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/272cf7_71e7fe458d8a41d08f2c3c2f0857c67e~mv2.png" alt="background" />
      <div className="headertitles">
      <span className="headertitlelg">Sustainability In Your Pocker</span>
      <span className="headertitlesm">Building a future that's exciting!</span>
      <a href="https://www.qizaa.com/allproducts" class="explore-btn">Explore</a>
      </div>
    </div>
  )
}
