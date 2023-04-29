import { useState,useEffect } from "react";
import styles from './pieChartForOrdinary.module.css';
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
                    data: [30,25,20,15,10],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',                       
                      ],
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                      ],
                }
            ],
            
            labels: ["Open flames", "Electrical malfunctions", "Cooking-related", "Heating appliances", "Other heat sources"],
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