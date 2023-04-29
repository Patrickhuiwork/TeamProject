import { useEffect, useState } from "react";
import styles from './LineChart.module.css'

import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
)

export default function LineChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {

        setChartData({
            labels: ["September", "October", "Novemeber", "December", "January"],
            datasets: [
                {
                    label: 'American-plated Motercycles entering Canada',
                    data: [926, 413, 86, 41, 99],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: 'rgba(53,162,235,0.4)'
                },
                {
                    label: 'Canadian-plated Motercycles entering Canada',
                    data: [5111, 3401, 806, 90, 81],
                    borderColor: 'rgb(255,99,132)',
                    backgroundColor: 'rgba(255,99,132,0.4)'
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
                    text: "Motercycles entering Canada by land, by vehicle type and licence plate 2022"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })

    }, [])

    return(
        <>
            <div className={styles.container}>
                <Line data={chartData} options={chartOptions}/>
            </div>
        
        </>
    )
}