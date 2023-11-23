import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Nave = () => {
  const params = useParams();
  const [nave, setNave] = useState("")

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/vehicles/${params.uid}`)
      .then(resp => resp.json())
      .then(data => setNave(data.result))
      .catch(err => err)
  }, [])

  return (
    <>
      <div className="container-fluid Info">
        <div className="image">
          <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`} className="card-image" />
        </div>
        <div className="specific-information">
          <div className="name-info">{nave == "" ? "Loading..." : nave.properties.name}</div>
          <div className="properties">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Model: {nave == "" ? "Loading..." : nave.properties.model}</li>
              <li className="list-group-item">Starship Class: {nave == "" ? "Loading..." : nave.properties.starship_class}</li>
              <li className="list-group-item">Length: {nave == "" ? "Loading..." : nave.properties.length}</li>
              <li className="list-group-item">Passengers: {nave == "" ? "Loading..." : nave.properties.passengers}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nave