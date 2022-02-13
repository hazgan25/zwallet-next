// import { connect } from 'react-redux'
import styles from 'src/commons/styles/Chart.module.css'
import { useSelector } from 'react-redux'

const Chart = () => {

    const state = useSelector((state) => state)
    const { dashboardData } = state.dashboad
    const { listIncome } = dashboardData

    return (
        <>
            <div className='col'>
                <div className="row" style={{ position: 'relative', left: '18px', top: '16px' }}>
                    {Array.isArray(listIncome) && listIncome.length > 0 &&
                        listIncome.map((data, idx) => (
                            <div className={`col ${styles['range-data']}`} key={idx}>
                                <div className={`${styles['data-update']}`}></div>
                                <p className={`${styles['day-text']}`}>{
                                    data.day === 'Monday' ? 'Mon' :
                                        data.day === 'Tuesday' ? 'Tue' :
                                            data.day === 'Wednesday' ? 'Wed' :
                                                data.day === 'Thursday' ? 'Thu' :
                                                    data.day === 'Friday' ? 'Fri' :
                                                        data.day === 'Saturday' ? 'Sat' :
                                                            data.day === 'Sunday' ? 'Sun'
                                                                : 'nothing day'
                                }</p>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default Chart
// const Chart = (props) => {
//     const listIncomeArr = props.listIncome
//     return (
//         <>
//             <div className="row" style={{ position: 'relative', left: '18px', top: '16px' }}>
//                 {Array.isArray(listIncomeArr) && listIncomeArr.length > 0 &&
//                     listIncomeArr.map((data, idx) => (
//                         <div className={`col ${styles['range-data']}`} key={idx}>
//                             <div className={`${styles['data-update']}`}></div>
//                             <p className={`${styles['day-text']}`}>{
//                                 data.day === 'Monday' ? 'Mon' :
//                                     data.day === 'Tuesday' ? 'Tue' :
//                                         data.day === 'Wednesday' ? 'Wed' :
//                                             data.day === 'Thursday' ? 'Thu' :
//                                                 data.day === 'Friday' ? 'Fri' :
//                                                     data.day === 'Saturday' ? 'Sat' :
//                                                         data.day === 'Sunday' ? 'Sun'
//                                                             : 'nothing day'
//                             }</p>
//                         </div>
//                     ))}
//             </div>
//         </>
//     )
// }

// const mapStateToProps = (state) => {
//     // console.log(state.dashboad.dashboardData.listIncome)
//     return {
//         listIncome: state.dashboad.dashboardData.listIncome
//     }
// }

// export default connect(mapStateToProps)(Chart)

