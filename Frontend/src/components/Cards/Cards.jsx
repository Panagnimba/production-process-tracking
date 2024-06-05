import { iconsImgs } from "../../utils/images";
import "./Cards.css";
//  ------------------CHART ------------
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

const Cards = ({ filtreOption,typeOption }) => {
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
        <div className="grid-one-item grid-common grid-c1">
            <div className="grid-c-title">
                <h3 className="grid-c-title-text">Production</h3>
                <button className="grid-c-title-icon">
                    <img src={iconsImgs.plus} />
                </button>
            </div>
            <div className="grid-c1-content">
                {
                    typeOption == "line" && <Line data={data} />
                }
                {
                    typeOption == "bar" && <Bar data={data} />
                }
                {
                    typeOption == "pie" && <Pie data={data} />
                }
                {
                    typeOption == "doughnut" && <Doughnut data={data} />
                }

                <div className="card-logo-wrapper">
                    <div>
                        <p className="text text-silver-v1 expiry-text">Production</p>
                        <p className="text text-sm text-white">Horaire</p>
                    </div>
                    <div className="card-logo">
                        <div className="logo-shape1"></div>
                        <div className="logo-shape2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
