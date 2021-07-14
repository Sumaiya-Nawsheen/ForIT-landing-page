import React from 'react'
import './MainFeatures.css';
import iphone2 from '../../images/iPhone2@2x.png';
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import icon3 from '../../images/icon3.png';
import icon4 from '../../images/icon4.png';
import icon5 from '../../images/icon5.png';
import icon6 from '../../images/icon6.png';


export default function MainFeatures() {


  const iconStyle ={
    display:'flex',
     justifyContent:'center',
     alignItems:'center',
  }

  const titleStyle={
    fontFamily: 'Noto Serif JP, serif',
  }




    return (
        <div>
<div className='parallax'>
  {/* title & description */}

<div> 
<div className="row mr-0 ml-0" style={{textAlign:'center',  marginTop:'100px'}}>
  <div className="col-md-6 offset-md-3"><h1 style={titleStyle}>Main Features</h1></div>
</div>
<div className="row mr-0 ml-0" style={{textAlign:'center',  marginTop:'1em'}}>
  <div className="col-md-4 offset-md-4"><p style={{fontSize:'18px', color:'grey'}}>Blue Bottle Vice fanny pack, Williamsburg roof party Wes Anderson seitan brunch before they sold out tofu scenester small batch.</p>
  </div>
</div>

<div style={{marginTop:'100px'}}>
  <div className="row ml-0 mr-0">

{/* 1st column */}
    <div className="col-lg-4 col-md-4 col-sm-12 ml-sm-1 ml-lg-3">
    <div className="row row-cols-1 row-cols-lg-1">

{/* card 1 */}
<div className="col">
    <div className="card mb-3" style={{maxWidth: '540px', border:'transparent',  background:'rgba(255, 255, 255, 0.0)'}}>
  <div className="row g-0">
   
    <div className="col-md-8  order-2 order-md-2 order-lg-1">
      <div className="card-body">
        <h5 className="card-title" style={titleStyle}>Responsive Design</h5>
        <p className="card-text">Fanny pack, Williamsburg roof party Wes Anderson seitan brunch before they sold out tofu small batch.</p>
      </div>
    </div>
    <div className="col-md-4  order-1 order-md-1 order-lg-2" style={iconStyle}>
      <img src={icon1} className="img-fluid rounded-start" alt="..."/>
    </div>
  </div>
</div>
    </div>
    
      {/* card 2 */}
    <div className="col">  
    <div className="card mb-3" style={{maxWidth: '540px', border:'transparent', background:'rgba(255, 255, 255, 0.0)'}}>
  <div className="row g-0">
    
    <div className="col-md-8 order-2 order-md-2 order-lg-1">
      <div className="card-body">
        <h5 className="card-title" style={titleStyle}>Perfect Grafic View</h5>
        <p className="card-text">Fanny pack, Williamsburg roof party Wes Anderson seitan brunch before they sold out tofu small batch.</p>
      </div>
    </div>
    <div className="col-md-4 order-1 order-md-1 order-lg-2" style={iconStyle}>
      <img src={icon2} className="img-fluid rounded-start" alt="..."/>
    </div>
  </div>
</div>
    </div>

    {/* card 3 */}
    <div className="col">
    <div className="card mb-3" style={{maxWidth: '540px',border:'transparent',background:'rgba(255, 255, 255, 0.0)'}}>
  <div className="row g-0">
    
    <div className="col-md-8 order-2 order-md-2 order-lg-1">
      <div className="card-body">
        <h5 className="card-title" style={titleStyle}>Mobile App Support</h5>
        <p className="card-text">Fanny pack, Williamsburg roof party Wes Anderson seitan brunch before they sold out tofu small batch.</p>
      </div>
    </div>
    <div className="col-md-4 order-1 order-md-1 order-lg-2" style={iconStyle}>
      <img src={icon3} className="img-fluid rounded-start" alt="..."/>
    </div>
  </div>
</div>
    </div>
      </div>
      </div>
 

{/* 2nd column */}
<div className="col-lg-3 col-md-3 col-sm-12 mobileDisplay">
      <img style={{width:'100%'}} src={iphone2} alt=""></img>
    </div>

{/* 3rd column */}
<div className="col-lg-4 col-md-4 col-sm-12 ml-lg-3 ml-md-1 ml-sm-0">
<div className="row row-cols-1 row-cols-lg-1">

{/* card 1 */}
<div className="col">
<div className="card mb-3" style={{maxWidth: '540px', border:'transparent'}}>
  <div className="row g-0">
    <div className="col-md-4" style={iconStyle}>
      <img src={icon4} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={titleStyle}>Calendar Sinhronize</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
    </div>
    
      {/* card 2 */}
    <div className="col">  
    <div className="card mb-3" style={{maxWidth: '540px', border:'transparent',background:'rgba(255, 255, 255, 0.0)'}}>
  <div className="row g-0">
    <div className="col-md-4" style={iconStyle}>
      <img src={icon5} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={titleStyle}>Additional Functions</h5>
        <p className="card-text">Fanny pack, Williamsburg roof party Wes Anderson seitan brunch before they sold out tofu small batch.</p>
      </div>
    </div>
  </div>
</div>
</div>

    {/* card 3 */}
    <div className="col">
    <div className="card mb-3" style={{maxWidth: '540px',border:'transparent', background:'rgba(255, 255, 255, 0.0)'}}>
  <div className="row g-0">
    <div className="col-md-4" style={iconStyle}>
      <img src={icon6} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={titleStyle}>Web Interface</h5>
        <p className="card-text">Fanny pack, Williamsburg roof party Wes Anderson seitan brunch before they sold out tofu small batch.</p>
      </div>
    </div>
  </div>
</div>
    </div>

</div>
</div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}
