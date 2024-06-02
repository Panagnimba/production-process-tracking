import React, { useState, useEffect } from 'react';
import { iconsImgs } from "../../utils/images"
import axiosInstance from '../../axios/axios';


export default function ProductionTable(){
  const [productions, setProductions] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchProductions = async () => {
      let resp = await axiosInstance.get("/historiques")
      if (resp.data.success) {
        setProductions(resp.data.result);
        // console.log(resp.data.result)
      }
    };
    
    fetchProductions();

  }, []); 

  function setStyleBasedOnCompare(hist , param){
    console.log(hist,param)
    if(hist < param) return {backgroundColor:"green",color:"white"}
    if(hist > param) return {backgroundColor:"red",color:"white"}
  }

  return (
    <div className="container mt-5">
      <h1 style={{color:"white"}}>Bilan de production</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Designation</th>
            <th>ID Article</th>
            <th>Quantite</th>
            <th>Stock MP Time</th>
            <th>Manutention Time</th>
            <th>Production Step 1 Time</th>
            <th>Production Step 2 Time</th>
            <th>Production Step 3 Time</th>
            <th>Conditionnement Time</th>
            <th>Manutention 2 Time</th>
            <th>Date de Création</th>
          </tr>
        </thead>
        <tbody>
          {productions.map((prod,idx) => (
            <tr key={idx} style={{backgroundColor:"white",color:"#473b33"}}>
              <td>{prod.idHistorique}</td>
              <td>{prod.designation}</td>
              <td>{prod.idArticle}</td>
              <td>{prod.quantite}</td>
              <td style={setStyleBasedOnCompare(prod.hist_stock_mp_time,prod.param_stock_mp_time)}>{`${prod.hist_stock_mp_time}/${prod.param_stock_mp_time}`}</td>
              <td style={setStyleBasedOnCompare(prod.hist_manutention_time,prod.param_manutention_time)}>{`${prod.hist_manutention_time}/${prod.param_manutention_time}`}</td>
              <td style={setStyleBasedOnCompare(prod.hist_production_step1_time,prod.param_production_step1_time)}>{`${prod.hist_production_step1_time}/${prod.param_production_step1_time}`}</td>
              <td style={setStyleBasedOnCompare(prod.hist_production_step2_time,prod.param_production_step2_time)}>{`${prod.hist_production_step2_time}/${prod.param_production_step2_time}`}</td>
              <td style={setStyleBasedOnCompare(prod.hist_production_step3_time,prod.param_production_step3_time)}>{`${prod.hist_production_step3_time}/${prod.param_production_step3_time}`}</td>
              <td style={setStyleBasedOnCompare(prod.hist_conditionnement_time,prod.param_conditionnement_time)}>{`${prod.hist_conditionnement_time}/${prod.param_conditionnement_time}`}</td>
              <td style={setStyleBasedOnCompare(prod.hist_stock_pf_time,prod.param_stock_pf_time)}>{`${prod.hist_stock_pf_time}/${prod.param_stock_pf_time}`}</td>
              <td>{new  Date(prod.date_creation).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

 
