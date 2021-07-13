import React from 'react';
import './Testimonials.css';
import user1 from '../../images/user1.png';
import user2 from '../../images/user2.png';
import user3 from '../../images/user3.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";



const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos/>
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos />
    </div>
  );
};

export default function Testimonials() {


    return (
        <div className='wave3'>
<div className="row ml-0 mr-0" style={{textAlign:'center'}}>
          <div className="col-md-6 offset-md-3"><h1 style={{ fontFamily: 'Noto Serif JP, serif',marginTop:'1.5em', color:'white'}}>Testimonials</h1></div>
        </div>
       

{/* carousal */}
<div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "75%", textAlign: "center" }}>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>

{/* 1st */}

          <section>
 <div className='row ml-0 mt-0' style={{ display: "flex",textAlign: "left",}}>
      <div className='col-lg-4 col-sm-1'>
        <Avatar className='ml-lg-5 ml-sm-0'
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
     
      <div className='col-lg-7 col-sm-1' style={{ background:'white', fontFamily: 'Noto Serif JP, serif', borderRadius:'10px'}}>
      <p style={{ marginTop: '1.25em' }}>
      All staff was very helpful and I got exactly what I needed, in the timeframe I needed it. I would highly recommend this application to anyone. I love this app.
      </p>
      <p style={{ color: "#24a0ed", marginTop: '1.25em' }}>
      Mery Morgan. Lowyer
      </p>
      </div>
    </div>
          </section>




          {/* 2nd */}

          <section>
 <div className='row ml-0 mt-0' style={{ display: "flex",textAlign: "left",}}>
      <div className='col-lg-4 col-sm-1'>
        <Avatar className='ml-lg-5 ml-sm-0'
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
     
      <div className='col-lg-7 col-sm-1' style={{ background:'white', fontFamily: 'Noto Serif JP, serif', borderRadius:'10px'}}>
      <p style={{ marginTop: '1.25em' }}>
      All staff was very helpful and I got exactly what I needed, in the timeframe I needed it. I would highly recommend this application to anyone. I love this app.
      </p>
      <p style={{ color: "#24a0ed", marginTop: '1.25em' }}>
      Mery Morgan. Lowyer
      </p>
      </div>
    </div>
          </section>


{/* 3rd */}

<section>
 <div className='row ml-0 mt-0' style={{ display: "flex",textAlign: "left",}}>
      <div className='col-lg-4 col-sm-1'>
        <Avatar className='ml-lg-5 ml-sm-0'
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
     
      <div className='col-lg-7 col-sm-1' style={{ background:'white', fontFamily: 'Noto Serif JP, serif', borderRadius:'10px'}}>
      <p style={{ marginTop: '1.25em' }}>
      All staff was very helpful and I got exactly what I needed, in the timeframe I needed it. I would highly recommend this application to anyone. I love this app.
      </p>
      <p style={{ color: "#24a0ed", marginTop: '1.25em' }}>
      Mery Morgan. Lowyer
      </p>
      </div>
    </div>
          </section>
          
        </Slider>
      </div>
    </div>
        </div>
    )
}



