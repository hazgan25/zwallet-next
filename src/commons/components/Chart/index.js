// import { connect } from 'react-redux'
// import styles from 'src/commons/styles/Chart.module.css'
import { useSelector } from 'react-redux'

import ReactEcharts from 'echarts-for-react'

const Chart = () => {
    const state = useSelector((state) => state)
    const { dashboardData } = state.dashboad
    const { listIncome } = dashboardData

    let dayChart = []
    let totalChart = []
    for (let i = 0; i < listIncome.length; i++) {
        dayChart.push(listIncome[i].day)
        totalChart.push(listIncome[i].total)
    }

    const option = {
        xAxis: {
            type: 'category',
            data: dayChart
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: totalChart,
                type: 'bar'
            }
        ]
    }

    console.log(option)

    return (
        <>
            <main ei>
                <ReactEcharts option={option} />
            </main>
        </>
    )
}

export default Chart
