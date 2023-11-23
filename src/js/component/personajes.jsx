import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Personajes = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="row">
      {store.personajes.map((value, index) => {
        value["type"]="characters"
        return (
          <div className="card people" key={index} style={{ "width": "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${value.uid}.jpg`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;

                currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}
              className="card-image" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{value.name}</h4>
              <div className="read">
                <Link to={`/personaje/${value.uid}`}>
                  <button className="btnread">Saber Mas</button>
                </Link>
                <button className="fav" onClick={() => actions.getFavorito(value)} ><i class="fas fa-star"></i></button>
              </div>
            </div>
          </div>)
      })}
    </div>
  )
};
export default Personajes;