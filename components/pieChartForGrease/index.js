import { useState,useEffect } from "react";
import styles from './pieChartForGrease.module.css';

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, 
    ArcElement, 
    Tooltip, 
    Legend } from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend);

export default function AreaChart() {

    const [chartData,setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            datasets: [
                {
                    label: '%',
                    data: [85,10,5],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                      ],
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                      ],
                }
            ],
            
            labels: ["Overheating of cooking oil/grease", "Leaving oil/grease unattended on the stovetop", "Setting heat too high while cooking"],
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title:{
                    display: true,
                    text: "Main causes of Grease FIre"
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