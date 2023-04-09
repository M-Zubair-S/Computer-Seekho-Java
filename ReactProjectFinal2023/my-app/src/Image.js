import React, { useState,useEffect} from 'react';
import './CardSliderComp.css';
import Slider from "react-slick";
import { useParams } from 'react-router-dom';


function CardSliderComp(props) {
  const [products, setProduct] = useState([]);
  const { code }  = useParams();
  useEffect(() => {

      fetch("http://localhost:8080/api/Image/"+code)
        .then((res) => res.json())
        .then((result) => {
          setProduct(result);
        });
    }, []);
  // const config = {
  //   // dots:false,
  //   infinite: true,
  //   speed: 200,
  //   slidesToShow: 1,
  //  // slidesToScroll: 2
  // };

 // const [settings, setSettings] = useState(config);
 
  return (
  
    <div className="App">
     
     <h1 align="center">Images</h1>
      {/* <label className="cb-centermode">
        <input type="checkbox" checked={settings.centerMode} onChange={onChangeCenterMode} />
        <span>Enable Center Mode</span>
      </label> */}

      {/* <Slider {...settings}> */}
      <Slider>
        {products.map((product, i) => 
        {
          return <div key={i} className="img-card">
            <img className="img" src={product.imagepath} alt={`${product.imagepath}`} />
            <div className="card-body">
                    </div>
          </div>
        })}
      </Slider>
    </div>
  );
}

export default CardSliderComp;