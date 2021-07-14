import React from 'react';
import './PromoVideo.css'
import playvideo from '../../images/Browser.png';
import pin from '../../images/pin.png';


export default function PromoVideo() {
    return (
      
        <div className='wave2'>
       
        <div className="container overflow-hidden">
<div className="row mt-5">

    {/* image */}

    <div className="col mt-5">
  <div className="p-3 my-auto" style={{display:'flex', alignItem:'center', justifyContent:'center'}}>
  <img className='mt-5 imgResize w-77' src={playvideo} alt=''></img>
  </div>
</div>

{/* content */}
<div className="col mt-lg-5 mt-sm-0">
 <div className="p-3 mt-lg-4 mt-sm-0" style={{textAlign:'left', fontFamily: 'Noto Serif JP, serif',color:'white'}}>
 <div className="mt-lg-5 mt-sm-0">
     <h1>Watch Promo Video</h1>
     </div>
     <div style={{marginTop:'1.5em'}}>
     <p>Normcore you probably haven’t heard of them Marfa organic squid. Slow-carb 90’s ennui Godard pug asymmetrical.</p>
     <ul className="list-unstyled mt-3 mb-4">
     <div className="row">
  <div className="col-lg-1 col-sm-1 my-auto"><img src={pin} alt=''/></div>
  <div className="col-lg-10 col-sm-10 my-auto"><li className="mb-1 mt-1">Probably haven’t heard of them Marfa organic squid.</li></div>
</div>


<div className="row">
  <div className="col-lg-1 col-sm-1 my-auto"><img src={pin} alt=''/></div>
  <div className="col-lg-10 col-sm-10 my-auto"> <li className="mb-1 mt-1"> Slow-carb 90’s ennui Godard pug asymmetrical.</li></div>
</div>


<div className="row">
  <div className="col-lg-1 col-sm-1 my-auto"><img src={pin} alt=''/></div>
  <div className="col-lg-10 col-sm-10 my-auto">   <li className="mb-1 mt-1"> XOXO tofu scenester small batch.</li></div>
</div>


<div className="row">
  <div className="col-lg-1 my-auto"><img src={pin} alt=''/></div>
  <div className="col-lg-10 my-auto"> <li className="mb-1 mt-1">  Retro dreamcatcher synth Godard pickled.</li></div>
</div>


<div className="row">
  <div className="col-lg-1 col-sm-1 my-auto"><img src={pin} alt=''/></div>
  <div className="col-lg-10 col-sm-10 my-auto"><li className="mb-1 mt-1"> Etsy jean shorts beard.</li></div>
</div>
                     
                        </ul>
     </div>
 </div>
</div>

</div>
</div>

    </div>

       
    )
}
