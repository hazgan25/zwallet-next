import MenuHome from 'src/commons/components/MenuHome'
import Layout from 'src/commons/components/Layout'
import styles from 'src/commons/styles/Home.module.css'
import Chart from 'src/commons/components/Chart'
import Link from 'next/link'
import Image from 'next/image'
import photoDefault from 'src/assets/img/profile-default.png'


const arryuser = [1, 2, 3, 4]

const Home = () => {
    return (
        <>
            <Layout title='Zwallet - Home'>
                <MenuHome>
                    <div className={`${styles['balance-box']}`}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-sm'>
                                    <p className={`${styles['balance-text']}`}>balance</p>
                                    <p className={`${styles['money-text']}`}>RP120.000</p>
                                    <p className={`${styles['phone-text']}`}>+62 813-9387-7946</p>
                                </div>
                                <div className='col-sm'>
                                    <button className={`${styles['btn-payment']}`}>
                                        <span className={`bi bi-arrow-up ${styles['bi']}`}>
                                            <span className={`${styles['btn-text-position']}`}>Transfer</span>
                                        </span>
                                    </button>
                                    <button className={`${styles['btn-payment']}`}>
                                        <span className={`bi bi-plus-lg ${styles['bi']}`}>
                                            <span className={`${styles['btn-text-position']}`}>Top Up</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-sm'>
                            <div className={`${styles['finance-box']}`}>
                                {/* masuk keluar financial */}
                                <div className='row container justify-content-between'>
                                    <div className='col'>
                                        <span className={`bi bi-arrow-down-short ${styles['bi-arrow-down']}`}></span>
                                        <p className={`${styles['financial-text']}`}>Income</p>
                                        <p className={`${styles['financial-money-text']}`}>RP.2.120.000</p>
                                    </div>
                                    <div className='col-3'>
                                        <span className={`bi bi-arrow-up-short ${styles['bi-arrow-up']}`}></span>
                                        <p className={`${styles['financial-text']}`}>Expense</p>
                                        <p className={`${styles['financial-money-text']}`}>RP.1.120.000</p>
                                    </div>
                                </div>
                                <div className='row container'>
                                    <div className='col'>
                                        <Chart />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col'>
                            <div className={`${styles['transaction-history-box']}`}>
                                <div className='row container m-0' style={{ position: 'relative', top: '12px' }}>
                                    <div className='col'>
                                        <p className={`${styles['transaction-history-text']}`}>Transaction History</p>
                                        {arryuser.map(() =>
                                            <>
                                                <div className={`${styles['photo-users']}`}>
                                                    <Image src={photoDefault} alt='avatar' className='rounded' height={56} width={56} objectFit='cover' />
                                                    <p className={`${styles['name-text']}`}>Name</p>
                                                    <p className={`${styles['status-text']}`}>status</p>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div className='col-3'>
                                        <Link href='/home/history' passHref>
                                            <p className={`${styles['see-all-text']}`}>See all</p>
                                        </Link>
                                        {arryuser.map(() =>
                                            <>
                                                <p className={`text-success ${styles['transaction-payment']}`}>+150.000</p>
                                            </>
                                        )}
                                    </div>
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
