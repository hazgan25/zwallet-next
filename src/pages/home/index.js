import Layout from 'src/commons/components/Layout'
import MenuHome from 'src/commons/components/MenuHome'
import styles from 'src/commons/styles/Home.module.css'
import Chart from 'src/commons/components/Chart'
import History from 'src/commons/components/Historys'
import formatRupiah from 'src/modules/helper/formarterRupiah'
// import { connect } from 'react-redux'
import { dashboardAction } from 'src/redux/actions/dashboard'
import { historyAction } from 'src/redux/actions/history'
// import { useRouter } from 'next/router'
// import { personalUser } from 'src/redux/actions/user'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useMemo } from 'react'
import Topup from 'src/commons/components/Topup'
import Link from 'next/link'

const Home = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const { id, token } = state.auth.userData
    const { userData } = state.user
    const { dashboardData } = state.dashboad

    const { balance, noTelp } = userData
    const { totalExpense, totalIncome } = dashboardData

    useEffect(() => {
        dispatch(dashboardAction(id, token))
    }, [dispatch, id, token])

    useEffect(() => {
        const param = {
            page: 1,
            limit: 4
        }
        dispatch(historyAction(param, token))
    }, [dispatch, token])

    return (
        <>
            <Layout title='Zwallet - Home'>
                <MenuHome>
                    <div className={`${styles['balance-box']}`}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-sm'>
                                    <p className={`${styles['balance-text']}`}>balance</p>
                                    <p className={`${styles['money-text']}`}>{`Rp.${formatRupiah(balance)}`}</p>
                                    <p className={`${styles['phone-text']}`}>{noTelp !== null ? noTelp : 'no phone number'}</p>
                                </div>
                                <div className='col-sm'>
                                    <Link href='/home/transfer' passHref>
                                        <button className={`${styles['btn-payment']}`}>
                                            <span className={`bi bi-arrow-up ${styles['bi']}`}>
                                                <span className={`${styles['btn-text-position']}`}>Transfer</span>
                                            </span>
                                        </button>
                                    </Link>

                                    <Topup>
                                        <button className={`${styles['btn-payment']}`}>
                                            <span className={`bi bi-plus-lg ${styles['bi']}`}>
                                                <span className={`${styles['btn-text-position']}`}>Top Up</span>
                                            </span>
                                        </button>
                                    </Topup>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-sm'>
                            <div className={`${styles['finance-box']}`}>
                                <div className='row container justify-content-between'>
                                    <div className='col'>
                                        <span className={`bi bi-arrow-down-short ${styles['bi-arrow-down']}`}></span>
                                        <p className={`${styles['financial-text']}`}>Income</p>
                                        <p className={`${styles['financial-money-text']}`}>{`Rp.${formatRupiah(totalIncome)}`}</p>
                                    </div>
                                    <div className='col-3'>
                                        <span className={`bi bi-arrow-up-short ${styles['bi-arrow-up']}`}></span>
                                        <p className={`${styles['financial-text']}`}>Expense</p>
                                        <p className={`${styles['financial-money-text']}`}>{`Rp.${formatRupiah(totalExpense)}`}</p>
                                    </div>
                                </div>
                                <div>
                                    <Chart />
                                </div>
                            </div>
                        </div>

                        <div className='col'>
                            <div className={`${styles['transaction-history-box']}`}>
                                <div className='row container m-0' style={{ position: 'relative', top: '12px' }}>
                                    <History />
                                </div>
                            </div>
                        </div>

                    </div>
                </MenuHome>
            </Layout>
        </>

    )
}

export default Home
