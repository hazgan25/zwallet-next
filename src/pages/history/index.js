import { useState, useEffect } from 'react'
import Layout from 'src/commons/components/Layout'
import MenuHome from 'src/commons/components/MenuHome'
import styles from 'src/commons/styles/History.module.css'
import photoDefault from 'src/assets/img/profile-default.png'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { historyTransactionFilter } from 'src/modules/utils/transactions'

import formatRupiah from 'src/modules/helper/formarterRupiah'

const History = () => {
    const state = useSelector(state => state)
    const { token } = state.auth.userData

    const [filter, setFilter] = useState('')
    const [page, setPage] = useState(1)
    const limit = 4

    const [dataHistory, setDataHistory] = useState({})

    useEffect(() => {
        const param = {
            page: page,
            limit: limit,
            filter: filter
        }
        historyTransactionFilter(param, token)
            .then((res) => {
                setDataHistory(res.data)
            }).catch(({ ...err }) => {
                console.log(err)
            })
    }, [filter, page, token])

    return (
        <>
            <Layout title='Zwallet - History'>
                <MenuHome>
                    <main className={styles['history-box']}>
                        <div className='container'>
                            <section className='d-flex justify-content-between'>
                                <p className={`${styles['transaction-text']}`}>Transaction History</p>
                                <select className={`${styles['forms-select']}`} defaultValue={''} onChange={e => setFilter(e.target.value)}>
                                    <option value='' disabled>--Select Filter--</option>
                                    <option value=''>Default</option>
                                    <option value='week'>Week</option>
                                    <option value='month'>Month</option>
                                    <option value='year'>Year</option>
                                </select>
                            </section>
                            <section>
                                {
                                    Array.isArray(dataHistory.data) && dataHistory.data.length > 0 &&
                                    dataHistory.data.map((data, idx) => (
                                        <div key={idx} className={styles['box-users']}>
                                            <div className={`${styles['photo-users']}`}>
                                                <div className='d-flex justify-content-between'>
                                                    <div>
                                                        <Image src={!data.image ? photoDefault : `${process.env.NEXT_PUBLIC_IMAGE_USER}/${data.image}`}
                                                            alt='avatar' className='rounded' height={56} width={56} objectFit='cover' onError={(e) => {
                                                                e.currentTarget.onerror = null
                                                                currentTarget.src = `${photoDefault}`
                                                            }} />
                                                        <p className={`${styles['name-text']}`}>{data.firstName} {data.lastName}</p>
                                                        <p className={`${styles['status-text']}`}>{data.type === 'send' ? 'transfer' : data.status === 'pending' ? `Pending ${data.type}` : data.type}</p>
                                                    </div>
                                                    <div>
                                                        <p className={styles['payment-text']} style={{ color: data.type === 'send' ? 'red' : data.type === 'topup' && data.status === 'success' || data.type === 'accept' ? 'green' : 'gray' }}>
                                                            {`${data.type === 'send' ? `-Rp.${formatRupiah(data.amount)}` : `+Rp.${formatRupiah(data.amount)}`}`}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </section>
                            <section className='mt-5 d-flex justify-content-center'>
                                <div className={`d-flex justify-content-between ${styles['pagination']}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor"
                                        className={`bi bi-arrow-bar-left mx-3 ${styles['bi']}`} viewBox="0 0 16 16"
                                        onClick={() => {
                                            if (page > 1) {
                                                setPage(page - 1)
                                            }
                                        }}
                                    >
                                        <path d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z" />
                                    </svg>
                                    <p className={styles['pagination-text']}>{page}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" className={`bi bi-arrow-bar-left mx-3 ${styles['bi']}`} viewBox="0 0 16 16"
                                        onClick={() => {
                                            console.log(dataHistory)
                                            if (page < dataHistory.pagination.totalPage) {
                                                setPage(page + 1)
                                            }
                                        }}
                                    >
                                        <path d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z" />
                                    </svg>
                                </div>
                            </section>
                        </div>
                    </main>
                </MenuHome>
            </Layout>
        </>
    )
}

export default History
