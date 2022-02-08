import styles from 'src/commons/styles/Chart.module.css'

const Chart = () => {
    return (
        <>
            <div className="row" style={{ position: 'relative', left: '18px', top: '16px' }}>
                <div className={`col ${styles['range-data']}`}>
                    <div className={`${styles['data-update']}`}></div>
                    <p className={`${styles['day-text']}`}>Sat</p>
                </div>
                <div className={`col ${styles['range-data']}`}>
                    <div className={`${styles['data-update']}`}></div>
                    <p className={`${styles['day-text']}`}>Sun</p>
                </div>
                <div className={`col ${styles['range-data']}`}>
                    <div className={`${styles['data-update']}`}></div>
                    <p className={`${styles['day-text']}`}>Mon</p>
                </div>
                <div className={`col ${styles['range-data']}`}>
                    <div className={`${styles['data-update']}`}></div>
                    <p className={`${styles['day-text']}`}>Tue</p>
                </div>
                <div className={`col ${styles['range-data']}`}>
                    <div className={`${styles['data-update']}`}></div>
                    <p className={`${styles['day-text']}`}>Wed</p>
                </div>
                <div className={`col ${styles['range-data']}`}>
                    <div className={`${styles['data-update']}`}></div>
                    <p className={`${styles['day-text']}`}>Thu</p>
                </div>
                <div className={`col ${styles['range-data']}`}>
                    <div className={`${styles['data-update']}`}></div>
                    <p className={`${styles['day-text']}`}>Fri</p>
                </div>
            </div>
        </>
    )
}

export default Chart

