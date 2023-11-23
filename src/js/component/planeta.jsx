import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Planeta = () => {
  const [planeta, setPlaneta] = useState("")
  const params = useParams();

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/planets/${params.uid}`)
      .then(resp => resp.json())
      .then(data => setPlaneta(data.result))
      .catch(err => err)
  }, [])

  return (
    <>
      <div className="container-fluid Info">
        <div className="image">
          <img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; 
              currentTarget.src = "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357";
            }} className="card-image" />
        </div>
        <div className="specific-information">
          <div className="name-info">{planeta == "" ? "Loading..." : planeta.properties.name}</div>
          <div className="properties">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Diameter: {planeta == "" ? "Loading..." : planeta.properties.diameter}</li>
              <li className="list-group-item">Rotation Period: {planeta == "" ? "Loading..." : planeta.properties.rotation_period}</li>
              <li className="list-group-item">Orbital Period: {planeta == "" ? "Loading..." : planeta.properties.orbital_period}</li>
              <li className="list-group-item">Gravity: {planeta == "" ? "Loading..." : planeta.properties.gravity}</li>
              <li className="list-group-item">Climate: {planeta == "" ? "Loading..." : planeta.properties.climate}</li>
              <li className="list-group-item">Terrain: {planeta == "" ? "Loading..." : planeta.properties.terrain}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Planeta