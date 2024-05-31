import React, { useState, useEffect } from 'react';
import { iconsImgs } from "../../utils/images"
import axiosInstance from '../../axios/axios';
// Mock data for Parametrage table
const parametrageData = [
  {
    idParametrage: 1,
    stock_mp_time: '2 days',
    manutention_time: '3 hours',
    production_step1_time: '1 hour',
    production_step2_time: '2 hours',
    production_step3_time: '1.5 hours',
    conditionnement_time: '30 minutes',
    stock_pf_time: '5 days',
    date_creation: '2023-05-31',
    idArticle: 1
  },
  {
    idParametrage: 2,
    stock_mp_time: '1 day',
    manutention_time: '2 hours',
    production_step1_time: '2 hours',
    production_step2_time: '3 hours',
    production_step3_time: '2 hours',
    conditionnement_time: '1 hour',
    stock_pf_time: '4 days',
    date_creation: '2023-06-01',
    idArticle: 2
  }
  // Add more parametrage entries as needed
];

const ParametrageTable = () => {
  const [parametrages, setParametrages] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchParametrages = async () => {
      let resp = await axiosInstance.get("/parametrage")
      if (resp.data.success) {
        setParametrages(resp.data.result);
      }
    };
    
    fetchParametrages();

  }, []); 

  const handleUpdate = (id) => {
    // Implement update logic
    console.log(`Update parametrage with ID: ${id}`);
  };

  const handleDelete = async(id) => {
    if (confirm("Voulez vous supprimer cet parametrage")) {
      let resp = await axiosInstance.delete(`/parametrage/${id}`)
      if (resp.data.success) {
          setParametrages(parametrages.filter(param => param.idParametrage !== id));
      }

  }
  };

  return (
    <div className="container mt-5">
      <h1>Parametrage</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>ID Article</th>
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
          {parametrages.map((param,idx) => (
            <tr key={idx}>
              <td>{param.idParametrage}</td>
              <td>{param.idArticle}</td>
              <td>{param.stock_mp_time}</td>
              <td>{param.manutention_time}</td>
              <td>{param.production_step1_time}</td>
              <td>{param.production_step2_time}</td>
              <td>{param.production_step3_time}</td>
              <td>{param.conditionnement_time}</td>
              <td>{param.stock_pf_time}</td>
              <td>{new  Date(param.date_creation).toLocaleString()}</td>
              <td >
              <img src={iconsImgs.pen} alt="" className='icon' onClick={() => handleUpdate(param.idParametrage)} style={{marginRight:"25px",cursor:"pointer"}}/>
              <img src={iconsImgs.trash} alt="" className='icon' onClick={() => handleDelete(param.idParametrage)} style={{cursor:"pointer"}}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParametrageTable;
