import React from 'react';
import './PromoVideo.css'
import playvideo from '../../images/Browser.png';
import pin from '../../images/pin.png';


export default function PromoVideo() {
    return (
      
        <div className='wave2 heightFixing' style={{border:'1px solid black'}}>
       
        <div class="container overflow-hidden" style={{border:'1px solid black'}}>
<div class="row  mt-5 mb-5">

    {/* image */}

    <div class="col mt-5">
  <div class="p-3 my-auto" style={{display:'flex', alignItem:'center', justifyContent:'center'}}>
  <img class='mt-5 imgResize w-77' src={playvideo} alt=''></img>
  </div>
</div>

{/* content */}
<div class="col mt-lg-5 mt-sm-0">
 <div class="p-3 mt-lg-4 mt-sm-0" style={{textAlign:'left', fontFamily: 'Noto Serif JP, serif',color:'white'}}>
 <div class="mt-lg-5 mt-sm-0">
     <h1>Watch Promo Video</h1>
     </div>
     <div style={{marginTop:'1.5em'}}>
     <p>Normcore you probably haven’t heard of them Marfa organic squid. Slow-carb 90’s ennui Godard pug asymmetrical.</p>
     <ul class="list-unstyled mt-3 mb-4">



     <div class="row">
  <div class="col-lg-1 col-sm-1 my-auto"><img src={pin} alt=''/></div>
  <div class="col-lg-10 col-sm-10 my-auto"><li class="mb-3 mt-3">Probably haven’t heard of them Marfa organic squid.</li></div>
</div>


<div class="row">
  <div class="col-lg-1 col-sm-1 my-auto"><img src={pin} alt=''/></div>
  <div class="col-lg-10 col-sm-10 my-auto"> <li class="mb-3 mt-3"> Slow-carb 90’s ennui Godard pug asymmetrical.</li></div>
</div>


<div class="row">
  <div class="col-lg-1 col-sm-1 my-auto"><img src={pin} alt=''/></div>
  <div class="col-lg-10 col-sm-10 my-auto">   <li class="mb-3 mt-3"> XOXO tofu scenester small batch.</li></div>
</div>


<div class="row">
  <div class="col-lg-1 col-sm-1 my-auto"><img src={pin} alt=''/></div>
  <div class="col-lg-10 col-sm-10 my-auto"> <li class="mb-3 mt-3">  Retro dreamcatcher synth Godard pickled.</li></div>
</div>


<div class="row">
  <div class="col-lg-1 col-sm-1 my-auto"><img src={pin} alt=''/></div>
  <div class="col-lg-10 col-sm-10 my-auto"><li class="mb-3 mt-3"> Etsy jean shorts beard.</li></div>
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
