import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Naves = () => {
  const { store,actions } = useContext(Context)

  return (
    <div className="row">
      {store.naves.map((value, index) => {
        value["type"]="vehicles"
        return (
          <div className="card vehicle" key={index} style={{ "width": "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${value.uid}.jpg`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}
              className="card-image" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{value.name}</h4>
              <div className="read">
              <Link to={`/nave/${value.uid}`}>
                <button className="btnread">Saber Mas</button>
              </Link>
                <button className="fav" onClick={() => actions.getFavorito(value)} ><i class="fas fa-star"></i></button>
              </div>
            </div>
          </div>)
      })}
    </div>
  )
}

export default Naves;