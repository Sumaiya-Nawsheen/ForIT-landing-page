import React from 'react';
import Comments from '../../images/Comments.png';
import Login from '../../images/Login.png';
import Feed from '../../images/Feed.png';
import Stats from '../../images/Stats.png';
import Settings from '../../images/Settings.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';



export default function BeautifulInterface() {

      const titleStyle={
        fontFamily: 'Noto Serif JP, serif',
      }


    return (
        <div className='h-lg-5156 h-sm-100' style={{border:'1px solid transparent', backgroundColor:'rgb(74,100,108)', color:'white'}}>
        
        {/* heading */}
        
        <div className="row ml-0 mr-0" style={{textAlign:'center',  marginTop:'100px'}}>
          <div className="col-md-6 offset-md-3"><h1 style={titleStyle}>Beautiful interface</h1></div>
          <div className="col-md-4 offset-md-4"><p style={{fontSize:'18px', marginTop:'1em'}}>Screens displays your content in an eye-catching way and enables customizable internal distribution.</p>
   </div>
   </div>

{/* title & description */}
{/* left column */}
        <div class="row mr-0 ml-0 mb-5 mt-5">
        <div class="col-lg-4 col-md-4 col-sm-1 ml-lg-4">
        <div class="p-3">
    <h1 style={{textAlign:'left', fontFamily: 'Noto Serif JP, serif', fontSize:'33px'}}>Perfect look screens</h1>
    <div style={{marginTop:'1.5em'}}>
    <p>ForIT features flexible layouts and themes to customize your content’s unique look. Credibly innovate granular internal or organic sources whereas high standard.</p>
    </div>
 </div>
        </div>

        {/* right column */}
  <div class="col-lg-7 col-md-6 col-sm-1 ml-lg-5">

 {/* carousel */}

 <OwlCarousel className='owl-theme' items='4' dots loop>
<div class="item"  style={{ display: "flex", justifyContent: "center" }}>
    <img  class="w-75" src={Login} alt='login'/>
  </div>
  <div class="item" style={{ display: "flex", justifyContent: "center" }}>
  <img  class="w-75" src={Feed} alt='feed'/>
  </div>
  <div class="item" style={{ display: "flex", justifyContent: "center" }}>
  <img  class="w-75" src={Stats} alt='stats'/>
  </div>
  <div class="item" style={{ display: "flex", justifyContent: "center" }}>
  <img  class="w-75" src={Comments} alt='comments'/>
  </div>
  <div class="item" style={{ display: "flex", justifyContent: "center" }}>
  <img  class="w-75" src={Settings} alt='comments'/>
  </div>
</OwlCarousel> 
</div>
        </div>
        </div>
    )
}
