import { useEffect, useState } from "react";
import styles from './BarChart.module.css'

import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function BarChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {

        setChartData({
            labels: ["Standard milk", "Milk 2%", "Skim milk", "Buttermilk", "Chocolate and other flavoured milk", "Cereal cream", "Whipping cream", "Sour cream", "Milk 1%"],
            datasets: [
                {
                    label: 'Kilolitres',
                    data: [6776,11446,1173,237,905,1281,520,84,3024],
                    borderColor: 'rgb(53,162,235',
                    backgroundColor: 'rgba(53,162,235,0.4)'
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Commercial sales of milk and cream, British Columbia December 2022"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })

    }, [])

    return(
        <>
            <div className={styles.container}>
                <Bar data={chartData} options={chartOptions}/>
            </div>
        
        </>
    )
}