import React, { useState, useEffect } from 'react';
import './CardSliderComp.css';
import Slider from "react-slick";



function CardSliderComp(props) {
  const [products, setProduct] = useState([]);
  useEffect(() => {

    fetch("http://localhost:8080/api/addAlbum")
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
      });
  }, []);
  const config = {
    // dots:false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 3




  };

  const [settings, setSettings] = useState(config);

  return (

    <div className="App">
      <h1 align="center">Album</h1>
      {/* <label className="cb-centermode">
        <input type="checkbox" checked={settings.centerMode} onChange={onChangeCenterMode} />
        <span>Enable Center Mode</span>
      </label> */}

      <Slider {...settings}>
        {products.map((product, i) => {
          return <div key={i} className="img-card">

            <a href={"/Image/" + product.albumId}>
              <img className="img" src={product.albumName} alt={`${product.albumName}`} />
            </a>

            <div className="card-body">
            </div>
          </div>
        })}
      </Slider>
    </div>
  );

}

export default CardSliderComp;