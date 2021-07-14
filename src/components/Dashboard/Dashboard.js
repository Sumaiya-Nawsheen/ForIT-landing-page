import React from 'react'
import macbook from '../../images/macbook.png'
export default function Dashboard() {
    return (
        <div style={{backgroundColor:'rgb(74,100,108)'}}>

  <div className="row gx-5 w-100 mt-5">

{/* macbook view */}
<div className="col-lg-6 col-md-7 col-sm-1 mr-lg-5 my-auto">
 <div className="mt-4"><img  style={{width:'100%'}} src={macbook} alt=''></img></div>
</div>


{/* dashboard content */}
<div className="col-lg-4 col-md-4 col-sm-1 ml-5  my-auto" style={{color:'#ffffff'}}>
   
   <div>
   <h1 style={{color:'#ffffff',textAlign:'left', fontFamily: 'Noto Serif JP, serif'}}>Web View with Dashboard</h1>
   </div>
   <div style={{marginTop:'1em'}}>
   <p>Normcore you probably haven’t heard of them Marfa organic squid. Slow-carb 90’s ennui Godard pug asymmetrical, narwhal VHS Tony High Life. Retro dreamcatcher synth Godard pickled Etsy jean shorts beard, pour-over fanny pack mumblecore. Quinoa retro aesthetic polaroid American Apparel plaid small batch.</p>

   </div>
   <div style={{marginTop:'2em', padding:'10px'}}>
<button type="button" className="btn btn-light btn-lg" style={{borderRadius:'30px', fontSize:'20px', textAlign:'center'}}><span className="p-3" style={{ color:'#24a0ed'}}>SIGN UP</span></button>
</div>
</div>
</div>
 
        </div>
    )
}
