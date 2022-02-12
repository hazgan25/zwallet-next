import { connect } from 'react-redux'
import styles from 'src/commons/styles/Chart.module.css'

const Chart = (props) => {
    const listIncomeArr = props.listIncome
    return (
        <>
            <div className="row" style={{ position: 'relative', left: '18px', top: '16px' }}>
                {Array.isArray(listIncomeArr) && listIncomeArr.length > 0 &&
                    listIncomeArr.map((data, idx) => (
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
        </>
    )
}

const mapStateToProps = (state) => {
    // console.log(state.dashboad.dashboardData.listIncome)
    return {
        listIncome: state.dashboad.dashboardData.listIncome
    }
}

export default connect(mapStateToProps)(Chart)

