import Layout from 'src/commons/components/Layout'
import MenuHome from 'src/commons/components/MenuHome'
import styles from 'src/commons/styles/History.module.css'
import photoDefault from 'src/assets/img/profile-default.png'
import Image from 'next/image'

const userArr = [1, 2, 3, 4, 5, 6]

const History = () => {
    return (
        <>
            <Layout title='Zwallet - History'>
                <MenuHome>
                    <div className={`${styles['history-box']}`}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col'>
                                    <p className={`${styles['transaction-text']}`}>Transaction History</p>
                                    {userArr.map(() =>
                                        <>
                                            <div className={`${styles['photo-users']}`}>
                                                <Image src={photoDefault} alt='avatar' className='rounded' height={56} width={56} objectFit='cover' />
                                                <p className={`${styles['name-text']}`}>Name</p>
                                                <p className={`${styles['status-text']}`}>status</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div className='col'>
                                    <form>
                                        <select className={`${styles['forms-select']}`}>
                                            <option value='' disabled>--Select Filter--</option>
                                            <option value='1'>Week</option>
                                            <option value='1'>Month</option>
                                            <option value='1'>Year</option>
                                        </select>
                                    </form>
                                    {userArr.map(() =>
                                        <>
                                            <p className={`text-success ${styles['payment-text']}`}>+Rp.150.000</p>

                                        </>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </MenuHome>
            </Layout>
        </>
    )
}

export default History
