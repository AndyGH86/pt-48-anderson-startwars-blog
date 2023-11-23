import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import logo from '/workspaces/pt-48-anderson-startwars-blog/src/img/logo.jpg'
import personajes from '/workspaces/pt-48-anderson-startwars-blog/src/img/personajes.png'
import nave from '/workspaces/pt-48-anderson-startwars-blog/src/img/nave.png'


export const Home = () => {
	return (
		<div id="carouselExampleAutoplaying" className="container carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={logo} className="img-fluid d-block w-100" alt="logo" />
        </div>
        <div className="carousel-item">
          <img src={personajes} className="img-fluid d-block w-100" alt="personajes" />
        </div>
        <div className="carousel-item">
          <img src={nave} className="img-fluid d-block w-100" alt="nave" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      
    </div>
	

)
	}