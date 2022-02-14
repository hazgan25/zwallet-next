import Image from 'next/image'
import Layout from 'src/commons/components/Layout'
import MenuHome from 'src/commons/components/MenuHome'
import photoDefault from 'src/assets/img/profile-default.png'
import styles from 'src/commons/styles/Confirmation.module.css'
import formatRupiah from 'src/modules/helper/formarterRupiah'

import { useSelector, useDispatch } from 'react-redux'

const Confirmation = () => {
    const state = useSelector((state) => state)
    console.log(state.userTransfer.transaction)
    const { userData, transaction } = state.userTransfer

    const { firstName, lastName, noTelp, image, balance } = userData
    const { amount, notes } = transaction
    // console.log(userData)
    const d = new Date()
    const optionsDay = { month: 'short', day: 'numeric' }
    return (
        <>
            <Layout title='Zwallet - Transfer Confirmation'>
                <MenuHome>
                    <div className={`${styles['transfer-box']}`} style={{ height: '100%' }}>
                        <div className='container'>
                            <h5 className={`${styles['transfer-text']}`}>Transfer To</h5>
                            <div className={`${styles['box']}`}>
                                <div className={`${styles['wrapper-user']}`}>
                                    <Image src={!image ? photoDefault :
                                        !`${process.env.NEXT_PUBLIC_IMAGE_USER}/${image}` ? photoDefault :
                                            photoDefault
                                    }
                                        alt='avatar' className='rounded' height={56} width={56} objectFit='cover'
                                    />
                                    <p className={`${styles['name-text']}`}>{firstName} {lastName}</p>
                                    <p className={`${styles['phone-text']}`}>{noTelp !== null ? noTelp : 'no phone number'}</p>
                                </div>
                                <h5 className={`${styles['details-text']}`}>Details</h5>
                                <div className={`${styles['box-detail']}`}>
                                    <p className={`${styles['amount-text']}`}>Amount</p>
                                    <p>{`Rp.${formatRupiah(amount)}`}</p>
                                </div>
                                <div className={`${styles['box-detail']}`}>
                                    <p className={`${styles['amount-text']}`}>Balance Left</p>
                                    <p>{`Rp.${formatRupiah(balance)}`}</p>
                                </div>
                                <div className={`${styles['box-detail']}`}>
                                    <p className={`${styles['amount-text']}`}>{`Date & Time`}</p>
                                    <p>{`
                                        ${d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })},
                                    ${d.toLocaleDateString('en-US', { year: 'numeric' })} -
                                    ${d.getHours()}.${d.getMinutes()}
                                    `}</p>
                                </div>
                                <div className={`${styles['box-detail']}`}>
                                    <p className={`${styles['amount-text']}`}>Notes</p>
                                    <p>{notes}</p>
                                </div>
                            </div>
                            <button className={`btn btn-primary ${styles['button']}`}>Continue</button>

                        </div>
                    </div>
                </MenuHome>
            </Layout>
        </>
    )
}

export default Confirmation