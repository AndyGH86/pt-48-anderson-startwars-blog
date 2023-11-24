import React from "react";
import "../../styles/home.css";
import logo from '/workspaces/pt-48-anderson-startwars-blog/src/img/logo.jpg'



export const Home = () => {
	return (
		<div id="carouselExampleAutoplaying" className="container carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={logo} className="img-fluid d-block w-100" alt="logo" />
        </div>
        <div className="carousel-item">
          <img src='https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg.webp' className="img-fluid d-block w-100" alt="personajes" />
        </div>
        <div className="carousel-item">
          <img src='https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2017/04/233336-star-wars-episodio-viii-ultimo-jedi-mark-hamill-revela-nuevos-secretos.jpg?tf=2048x' className="img-fluid d-block w-100" alt="nave" />
        </div>
        <div className="carousel-item">
          <img src='https://i.blogs.es/e36113/yoda/1024_2000.jpg' className="img-fluid d-block w-100" alt="nave" />
        </div>
        <div className="carousel-item">
          <img src='https://pm1.aminoapps.com/6343/a6d695eb2d64cc011a5bef61eb2daed310b6f3fc_hq.jpg' className="img-fluid d-block w-100" alt="nave" />
        </div>
        <div className="carousel-item">
          <img src='https://estaticos-cdn.prensaiberica.es/clip/89987d8b-55f4-4dd1-b181-633cb78ac390_alta-libre-aspect-ratio_default_0.jpg' className="img-fluid d-block w-100" alt="nave" />
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