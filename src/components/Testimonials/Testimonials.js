import React from 'react';
import './Testimonials.css';
import user1 from '../../images/user1.png';
import user2 from '../../images/user2.png';
import user3 from '../../images/user3.png';
import { Avatar } from "@material-ui/core";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';


export default function Testimonials() {


    return (
        <div className='wave3'>
<div className="row ml-0 mr-0" style={{textAlign:'center'}}>
          <div className="col-md-6 offset-md-3"><h1 style={{ fontFamily: 'Noto Serif JP, serif',marginTop:'1.5em', color:'white'}}>Testimonials</h1></div>
        </div>
       

{/* carousel */}
<div style={{ display: "flex", justifyContent: "center", marginTop: 50 }} >
   
     <OwlCarousel className='owl-theme' items='1' dots>

{/* 1st carousel */}
     <div className='row ml-0 mt-0' style={{textAlign: "left"}}>
<div className='col-lg-4  col-md-4 col-sm-1'>
<Avatar className='ml-lg-5 ml-md-5 ml-sm-0'
src={user1}
style={{
  width: 120,
  height: 120,
  border: "1px solid lightgray",
  marginBottom: 20,
  background:'white',
  borderRadius: "50%",
}}
/>
</div>

<div className='col-lg-7 col-md-7 col-sm-1' style={{ background:'white', fontFamily: 'Noto Serif JP, serif', borderRadius:'10px'}}>
<p style={{ marginTop: '1.25em' }}>
All staff was very helpful and I got exactly what I needed, in the timeframe I needed it. I would highly recommend this application to anyone. I love this app.
</p>
<p style={{ color: "#24a0ed", marginTop: '1.25em' }}>
Mery Morgan. Lowyer
</p>
</div>
</div>


{/* 2nd carousel */}
<div className='row ml-0 mt-0' style={{textAlign: "left"}}>
<div className='col-lg-4 col-md-4 col-sm-1'>
<Avatar className='ml-lg-5 ml-md-5 ml-sm-0'
src={user2}
style={{
  width: 120,
  height: 120,
  border: "1px solid lightgray",
  marginBottom: 20,
  background:'white',
  borderRadius: "50%",
}}
/>
</div>

<div className='col-lg-7 col-md-7 col-sm-1' style={{ background:'white', fontFamily: 'Noto Serif JP, serif', borderRadius:'10px'}}>
<p style={{ marginTop: '1.25em' }}>
All staff was very helpful and I got exactly what I needed, in the timeframe I needed it. I would highly recommend this application to anyone. I love this app.
</p>
<p style={{ color: "#24a0ed", marginTop: '1.25em' }}>
Mery Morgan. Lowyer
</p>
</div>
</div>

  {/* 3rd carousel */}
  <div className='row ml-0 mt-0' style={{textAlign: "left",}}>
<div className='col-lg-4 col-md-4 col-sm-1'>
<Avatar className='ml-lg-5 ml-md-5  ml-sm-0'
src={user3}
style={{
  width: 120,
  height: 120,
  border: "1px solid lightgray",
  marginBottom: 20,
  background:'white',
  borderRadius: "50%",
}}
/>
</div>

<div className='col-lg-7 col-md-7 col-sm-1' style={{ background:'white', fontFamily: 'Noto Serif JP, serif', borderRadius:'10px'}}>
<p style={{ marginTop: '1.25em' }}>
All staff was very helpful and I got exactly what I needed, in the timeframe I needed it. I would highly recommend this application to anyone. I love this app.
</p>
<p style={{ color: "#24a0ed", marginTop: '1.25em' }}>
Mery Morgan. Lowyer
</p>
</div>
</div>
</OwlCarousel> 
    </div>
        </div>
    )
}



