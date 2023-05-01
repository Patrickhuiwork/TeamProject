import { useState,useEffect } from "react";
import styles from './pieChartForFireCause.module.css';

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, 
    ArcElement, 
    Tooltip, 
    Legend } from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend);

export default function pieChartForFireCause() {

    const [chartData,setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            datasets: [
                {
                    label: '%',
                    data: [18,17,3,2,15,5,40],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(75, 192, 192, 0.2)',
                      ],
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                      ],
                }
            ],
            
            labels: ["Heating", "Electrical", "Candles", "Other", "Arson", "Smoking", "Cooking"],
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title:{
                    display: true,
                    text: "TOP CAUSES OF HOUSE FIRES"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    },[])

    return (
        <>
            <div className={styles.container}>
                <Pie data={chartData} options={chartOptions}/>
            </div>
        </>
    )
}