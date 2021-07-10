import React, { useState } from 'react';
import './Banner.css';
import iphone from '../../images/iPhone@2x.png';




export default function Banner() {


  const [overlay, setOverlay] = useState(false);

  const changeBackground = () => {
    if(window.scrollY>=100){
      setOverlay(true);
    }
    else{
      setOverlay(false);
    };
  };
  window.addEventListener('scroll', changeBackground);

    return (

      <div className='h-lg-100 h-sm-100'>
    <div className={overlay ? 'overlay active banner' : 'overlay banner'}
>
                <div className="container overflow-hidden" >
 
 <div className="row gx-5 ml-sm-1 ml-md-1 ml-lg-8" style={{marginTop:'4em'}}>
   {/* mobile view */}
 <div className="col-lg-5 col-sm-12">
    <div className="p-2"><img  style={{width:'350px', width:'90%'}} src={iphone} alt=''></img></div>
   </div>

   {/* description */}
   <div className="col-lg-6 col-sm-12" style={{color:'#ffffff',marginTop:'30px'}}>
     <div className="p-3">
     <h1 className="display-4" style={{color:'#ffffff',textAlign:'left', fontFamily: 'Secular One, sans-serif', display:'flex', justifyContent:'center', alignItems:'center'}}>Best Way to promote service</h1>
   <div>
       <p><span style={{ fontSize:'20px'}}>Quinoa retro aesthetic polaroid, Williamsburg American Apparel plaid small batch. Blue Bottle Vice fanny pack, Williamsburg roof party Wes Anderson seitan brunch before they sold out tofu scenester small batch. </span></p>
   </div>
   <div style={{marginTop:'2em', padding:'10px'}}>
   <button type="button" className="btn btn-light btn-lg" style={{borderRadius:'20px', fontSize:'25px', textAlign:'center'}}><span style={{padding:'15px', color:'#24a0ed'}}>DOWNLOAD</span></button>
   </div>
     </div>
   </div>
 </div>

 
</div>
        </div>



        <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
</div>


      </div>
    
    )
}

  
