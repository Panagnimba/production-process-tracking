import React, { useState, useEffect } from 'react';
import { iconsImgs } from "../../utils/images"
import axiosInstance from '../../axios/axios';


export default function ProductionTable(){
  const [productions, setProductions] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchProductions = async () => {
      let resp = await axiosInstance.get("/productions")
      if (resp.data.success) {
        setProductions(resp.data.result);
      }
    };
    
    fetchProductions();

  }, []); 

  const handleUpdate = (id) => {
    // Implement update logic
    console.log(`Update parametrage with ID: ${id}`);
  };

  const handleDelete = async(id) => {
    if (confirm("Voulez vous supprimer cet elements")) {
      let resp = await axiosInstance.delete(`/productions/${id}`)
      if (resp.data.success) {
          setProductions(productions.filter(param => param.idProduction !== id));
      }

  }
  };

  function setRowStyleBasedOnStep(param){
    if(param.etape < 3) return {backgroundColor:"white",color:"#473b33"}
    if(param.etape >= 3 && param.etape < 6) return {backgroundColor:"gold"}
    if(param.etape >= 6) return {backgroundColor:"green",color:"white"}
  }

  return (
    <div className="container mt-5">
      <h1>Productivity tracking</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Designation</th>
            <th>ID Article</th>
            <th>Quantite</th>
            <th>Etape</th>
            <th>Stock MP Time</th>
            <th>Manutention Time</th>
            <th>Production Step 1 Time</th>
            <th>Production Step 2 Time</th>
            <th>Production Step 3 Time</th>
            <th>Conditionnement Time</th>
            <th>Stock PF Time</th>
            <th>Date de Création</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productions.map((param,idx) => (
            <tr key={idx} style={setRowStyleBasedOnStep(param)}>
              <td>{param.idProduction}</td>
              <td>{param.designation}</td>
              <td>{param.idArticle}</td>
              <td>{param.quantite}</td>
              <td>{param.etape}</td>
              <td>{param.stock_mp_time}</td>
              <td>{param.manutention_time}</td>
              <td>{param.production_step1_time}</td>
              <td>{param.production_step2_time}</td>
              <td>{param.production_step3_time}</td>
              <td>{param.conditionnement_time}</td>
              <td>{param.stock_pf_time}</td>
              <td>{new  Date(param.date_creation).toLocaleString()}</td>
              <td >
              <img src={iconsImgs.pen} alt="" className='icon' onClick={() => handleUpdate(param.idProduction)} style={{marginRight:"25px",cursor:"pointer"}}/>
              <img src={iconsImgs.trash} alt="" className='icon' onClick={() => handleDelete(param.idProduction)} style={{cursor:"pointer"}}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

 
