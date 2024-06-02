import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import 'chart.js/auto';  // Automatically registers the necessary chart components

import { Doughnut, Line, Bar, Pie } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import axiosInstance from '../../axios/axios';

const LineChartComponent = ({ filtreOption, typeOption }) => {
  let [labels, setLabels] = useState([])
  let [values, setValues] = useState([])
  useEffect(() => {
    async function fetchLineChart() {
      let resp = await axiosInstance.get(`/production/line/${filtreOption}`)
      if (resp.data.success) {
        console.log(resp.data.result)
        setLabels(resp.data.result.labels)
        setValues(resp.data.result.values)

      }
    }
    fetchLineChart()
  }, [filtreOption])
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Production',
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        // backgroundColor: [
        //   'rgba(75,192,192,0.4)',
        //   'rgba(254, 108, 0, 0.6)', // clr-pumpkin
        //   'rgba(168, 165, 166, 0.6)', // clr-silver
        //   'rgba(45, 160, 73, 0.6)', // clr-green
        //   'rgba(254, 200, 10, 0.6)', // clr-yellow
        //   'rgba(48, 41, 36, 0.6)', // clr-jet
        //   'rgba(255, 195, 151, 0.6)' // clr-peach
        // ],
        // borderColor: [
        //   'rgba(75,192,192,0.4)',
        //   'rgba(254, 108, 0, 1)', // clr-pumpkin
        //   'rgba(168, 165, 166, 1)', // clr-silver
        //   'rgba(45, 160, 73, 1)', // clr-green
        //   'rgba(254, 200, 10, 1)', // clr-yellow
        //   'rgba(48, 41, 36, 1)', // clr-jet
        //   'rgba(255, 195, 151, 1)' // clr-peach
        // ],
        data: values
      }
    ]
  };
  return (
    <div className="chart-container" style={{ width: "100%", maxHeight: "500px" }}>
      <h2>Production Horaire</h2>
      <div style={{ display: "flex", justifyContent: "center", width: "100%", maxHeight: "500px" }}>
        {
          typeOption == "line" && <Line data={data} />
        }
        {
          typeOption == "bar" && <Bar data={data} />
        }
        {
          typeOption == "pie" && <Pie data={data} />
        }

      </div>




    </div>
  );
};

export default LineChartComponent;
