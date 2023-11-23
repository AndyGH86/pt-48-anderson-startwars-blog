import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store } = useContext(Context);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid contnav">
          <Link to="/">
            <img
              className="imgNav"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSquUoilY01uGHYZ7mRlJRqhcRQ5qJVOnIM0A&usqp=CAU"
              alt=""
            />
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"><i class="fa fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="Titulos">
              <Link to="/personajes">
                <span className="title btn ">Personajes</span>
              </Link>
              <Link to="/planetas">
                <span className="title btn ">Planetas</span>
              </Link>
              <Link to="/naves">
                <span className="title btn ">Naves</span>
              </Link>
              <Link to="/favoritos">
                <span className="title btn ">
                  Favoritos {store.favoritos.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
