import React from 'react';
import './Pricing.css';

export default function Pricing() {

    const titleStyle={
        fontFamily: 'Noto Serif JP, serif',
      }


    return (
        <div className='heightFixing'>
        
        {/* title & description */}
        
        <div className="row ml-0 mr-0" style={{textAlign:'center',  marginTop:'100px'}}>
          <div className="col-md-6 offset-md-3" ><h1 style={titleStyle}>Pricing</h1></div>
        </div>
        <div className="row ml-0 mr-0" style={{textAlign:'center',  marginTop:'1em'}}>
          <div className="col-md-4 offset-md-4"><p style={{fontSize:'18px'}}>Blue Bottle Vice fanny pack, Williamsburg roof party Wes Anderson mlkshk seitan brunch before they sold out tofu scenester small batch.

</p>
          </div>
        </div>
        
        {/* features & image */}
        
        <div className="text-center">
    <div className="container">
        <div className="row pt-4" style={{height:'43.75em'}}>
            {/* 1st card */}
            <div className="col-md-4">
                <div className="card mb-4 w-lg-75 w-md-100 ml-lg-5 ml-md-2" style={{ height:'25em',marginTop:'100px',borderRadius:'15px',boxShadow: '0px 0px 5px 5px #CBC3E3'}}>
                    <div className="card-body mt-2" >
                    <h3 className="card-title" style={{color:'#24a0ed'}}>START</h3>
                        < h3 style=
                        {{fontSize:'40px'}}><sup>$</sup> <span style=
                        {{fontSize:'54px'}}> 2 </span> </h3>
                        <p className="text-muted">monthly</p>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li className="mb-3 mt-4">ADAPTIVE</li>
                            <li className="mb-3 mt-4">FULL CUSTOMIZABLE</li>
                        </ul> <button type="button" className="btn btn-lg btn-outline-primary mt-4 mb-4" style={{borderRadius:'30px', fontSize:'20px', textAlign:'center'}}><span className="p-3" style={{ color:'#24a0ed'}}>BUY</span></button>
                    </div>
                </div>
            </div>

            {/* 2ND CARD */}
            <div className="col-md-4">
                <div className="card mb-4 w-lg-75 w-md-100 ml-lg-5 ml-md-0" style={{height:'28em', marginTop:'40px',borderRadius:'15px', boxShadow: '0px 0px 5px 5px #CBC3E3'}}>
                <div className="card-body">
                    <h3 className="card-title" style={{color:'#24a0ed'}}>BUSINESS</h3>
                        < h3 style=
                        {{fontSize:'40px'}}><sup>$</sup> <span style=
                        {{fontSize:'54px'}}> 29 </span> </h3>
                        <p className="text-muted">monthly</p>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li className="mb-3 mt-4">ADAPTIVE</li>
                            <li className="mb-3 mt-4">FULL CUSTOMIZABLE</li>
                            <li className="mb-3 mt-4">TEMPLATES</li>
                        </ul> <button type="button" className="btn btn-lg btn-primary mt-4 mb-4" style={{borderRadius:'30px', fontSize:'20px', textAlign:'center'}}><span className="p-3" style={{ color:'#ffffff'}}>BUY</span></button>
                    </div>
                </div>
            </div>

            {/* 3rd */}
            <div className="col-md-4">
                <div className="card mb-4w-lg-75 w-md-100 ml-lg-5 ml-md-0" style={{boxShadow: '0px 0px 5px 5px #CBC3E3',borderRadius:'15px', marginTop:'100px'}}>
                <div className="card-body">
                    <h3 className="card-title" style={{color:'#24a0ed'}}>PREMIUM</h3>
                        < h3 style=
                        {{fontSize:'40px'}}><sup>$</sup> <span style=
                        {{fontSize:'54px'}}> 149 </span> </h3>
                        <p className="text-muted">monthly</p>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li className="mb-3 mt-4">ADAPTIVE</li>
                            <li className="mb-3 mt-4">FULL CUSTOMIZABLE</li>
                            <li className="mb-3 mt-4"> TEMPLATES</li>
                            <li className="mb-3 mt-4">200 GB SPACE</li>
                        </ul> 
                        <button type="button" className="btn btn-lg btn-outline-primary mt-4 mb-4" style={{borderRadius:'30px', fontSize:'20px', textAlign:'center'}}><span className="p-3" style={{ color:'#24a0ed'}}>BUY</span></button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}



<div className="card text-center" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#home" className="btn btn-primary">Go somewhere</a>
  </div>
</div>