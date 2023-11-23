import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Especie = () => {
  const params = useParams();
  const [especie, setEspecie] = useState("")

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/species/${params.uid}`)
      .then(resp => resp.json())
      .then(data => setEspecie(data.result))
      .catch(err => err)
  }, [])

  return (
    <>
      <div className="container-fluid Info">
        <div className="image">
          <img src={`https://starwars-visualguide.com/assets/img/species/${params.uid}.jpg`} className="card-image" />
        </div>
        <div className="specific-information">
          <div className="name-info">{especie == "" ? "Loading..." : especie.properties.name}</div>
          <div className="properties">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Skin Colors: {especie == "" ? "Loading..." : especie.properties.skin_colors}</li>
              <li className="list-group-item">Lenguage: {especie == "" ? "Loading..." : especie.properties.language}</li>
              <li className="list-group-item">Classification: {especie == "" ? "Loading..." : especie.properties.classification}</li>
              <li className="list-group-item">Designation: {especie == "" ? "Loading..." : especie.properties.designation}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Especie;