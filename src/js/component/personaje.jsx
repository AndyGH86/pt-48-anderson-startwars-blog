import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Personaje = () => {
  const [personaje, setPersonaje] = useState ("")
  const params = useParams();
  
  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${params.uid}`)
      .then(resp => resp.json())
      .then(data => setPersonaje(data.result))
      .catch(err => err)
  }, [])

  return (
    <>
      <div className="container-fluid Info">
        <div className="image">
          <img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} className="card-image" />
        </div>
        <div className="specific-information">
          <div className="name-info"> {personaje == "" ? "Loading..." : personaje.properties.name}</div>
          <div className="properties">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Height: {personaje == "" ? "" : personaje.properties.height}  </li>
              <li className="list-group-item">Mass: {personaje == "" ? "" : personaje.properties.mass} </li>
              <li className="list-group-item">Hair Color: {personaje == "" ? "" : personaje.properties.hair_color} </li>
              <li className="list-group-item">Eye Color: {personaje == "" ? "" : personaje.properties.eye_color} </li>
              <li className="list-group-item">Identification: {personaje == "" ? "" : personaje._id} </li>
            </ul>
          </div>  
        </div>
      </div>
    </>
  )
}

export default Personaje