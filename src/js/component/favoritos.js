import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";


const Favoritos = () => {
  const { store, actions } = useContext(Context)
  const params = useParams()

  return (
    <div className="row">
      {store.favoritos.map((fav, index) => {
        console.log("-----",fav);
        return (
          <div className="card favorite" key={index} style={{ "width": "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/${fav.type}/${fav.uid}.jpg`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}
              className="card-image" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{fav.name}</h4>
            </div>
            <div className="delete"><i class="fa fa-trash" onClick={() => actions.deleteFavorito(fav)}></i></div>
          </div>
        )
      })}
    </div>
  )
}

export default Favoritos