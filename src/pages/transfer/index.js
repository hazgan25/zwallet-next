import MenuHome from 'src/commons/components/MenuHome'
import Layout from 'src/commons/components/Layout'
import styles from 'src/commons/styles/Transfer.module.css'
import Image from 'next/image'

import photoDefault from 'src/assets/img/profile-default.png'

const userArr = [1, 2, 4, 5]

const Transfer = () => {
    return (
        <>
            <Layout title='Zwallet - Transfer'>
                <MenuHome>
                    <div className={`${styles['transfer-box']}`}>
                        <div className='container'>
                            <p className={`${styles['search-txt']}`}>Search Receiver</p>
                            <h4 className={`bi bi-search ${styles['bi-search']}`}></h4>
                            <input className={`${styles['input-search']}`} placeholder='Search receiver here' />
                            {userArr.map(() =>
                                <>
                                    <div className={`${styles['box-users']}`}>
                                        <div className={`${styles['photo-users']}`}>
                                            <Image src={photoDefault} alt='avatar' className='rounded' height={56} width={56} objectFit='cover' />
                                            <p className={`${styles['name-text']}`}>Name</p>
                                            <p className={`${styles['status-text']}`}>status</p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </MenuHome>
            </Layout>
        </>
    )
}

export default Transfer
