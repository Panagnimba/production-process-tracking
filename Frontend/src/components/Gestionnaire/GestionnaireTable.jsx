import React, { useState, useEffect } from 'react';
import { iconsImgs } from "../../utils/images"
import axiosInstance from '../../axios/axios';


export default function ProductionTable(){
  const [gestionnaires, setGestionnaires] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchGestionnaires = async () => {
      let resp = await axiosInstance.get("/gestionnaires")
      if (resp.data.success) {
        setGestionnaires(resp.data.result);
      }
    };
    
    fetchGestionnaires();

  }, []); 

  const handleUpdate = (id) => {
    // Implement update logic
    console.log(`Update Gestionnaire with ID: ${id}`);
  };

  const handleDelete = async(id) => {
    if (confirm("Voulez vous supprimer cet gestionnaire ?")) {
      let resp = await axiosInstance.delete(`/Gestionnaire/${id}`)
      if (resp.data.success) {
          setGestionnaires(productions.filter(param => param.idGestionnaire !== id));
      }

  }
  };

 
  return (
    <div className="container mt-5" >
      <h1 style={{color:"white"}}>Gestionnaires</h1>
      <table className="table table-striped" style={{width:"100%"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Email</th>
            <th>Telephone</th>
            <th>Date de Création</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {gestionnaires.map((param,idx) => (
            <tr key={idx}>
              <td>{param.idGestionnaire}</td>
              <td>{param.nom}</td>
              <td>{param.prenom}</td>
              <td>{param.email}</td>
              <td>{param.telephone}</td>
              <td>{new  Date(param.date_creation).toLocaleString()}</td>
              <td >
              <img src={iconsImgs.pen} alt="" className='icon' onClick={() => handleUpdate(param.idGestionnaire)} style={{marginRight:"25px",cursor:"pointer"}}/>
              <img src={iconsImgs.trash} alt="" className='icon' onClick={() => handleDelete(param.idGestionnaire)} style={{cursor:"pointer"}}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

 
