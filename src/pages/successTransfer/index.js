import { useState, useEffect } from 'react'
import Image from 'next/image'
import Layout from 'src/commons/components/Layout'
import MenuHome from 'src/commons/components/MenuHome'
import photoDefault from 'src/assets/img/profile-default.png'
import formatRupiah from 'src/modules/helper/formarterRupiah'

import successPng from 'src/assets/img/success.png'
import styles from 'src/commons/styles/successTransfer.module.css'

import { useSelector } from 'react-redux'
import { getPDF } from 'src/modules/utils/export'

import { useRouter } from 'next/router'

const SuccessTransfer = () => {
    const state = useSelector((state) => state)

    const router = useRouter()

    const { auth, userTransfer, user } = state
    const { transaction } = userTransfer
    const { amount, notes, id } = transaction
    const { balance } = user.userData
    const { firstName, lastName, noTelp, image } = userTransfer.userData
    const { token } = auth.userData
    const [urlPdf, setURLPDF] = useState('')

    const d = new Date()

    useEffect(() => {
        if (!userTransfer.userData.id) {
            router.replace('/home')
        }
        getPDF(id, token)
            .then((res) => {
                setURLPDF(res.data.data.url)
            })
            .catch(({ ...err }) => {
                console.log(err)
            })
    }, [id, token, userTransfer.userData.id, router])

    return (
        <>
            <Layout title='Zwallet - Transfer Success'>
                <MenuHome>
                    <div className={`${styles['transfer-box']}`} style={{ height: '100%' }}>
                        <div className='container'>
                            <div className='mt-5 d-flex justify-content-center'>
                                <Image src={successPng} alt='avatar' />
                            </div>
                            <p className='text-center mt-3'>Transfer Success</p>
                            <div className={`${styles['box-detail']}`}>
                                <p className={`${styles['amount-text']}`}>Amount</p>
                                <p>{`Rp.${formatRupiah(amount)}`}</p>
                            </div>
                            <div className={`${styles['box-detail']}`}>
                                <p className={`${styles['amount-text']}`}>Balance Left</p>
                                <p>{`Rp.${formatRupiah(balance - amount)}`}</p>
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
                            <h5 className={`${styles['transfer-text']}`}>Transfer To</h5>
                            <div className={`${styles['box-detail']}`}>
                                <div className={`${styles['wrapper-user']}`}>
                                    <Image src={!image ? photoDefault : `${process.env.NEXT_PUBLIC_IMAGE_USER}/${image}`}
                                        alt='avatar' className='rounded' height={56} width={56} objectFit='cover' onError={(e) => {
                                            e.currentTarget.onerror = null
                                            currentTarget.src = `${photoDefault}`
                                        }}
                                    />
                                    <p className={`${styles['name-text']}`}>{firstName} {lastName}</p>
                                    <p className={`${styles['phone-text']}`}>{noTelp !== null ? noTelp : 'no phone number'}</p>
                                </div>
                                <div className='mt-5 d-flex justify-content-end'>
                                    <a href={urlPdf} target='_blank' rel="noopener noreferrer">
                                        <button className='btn text-primary px-3 btn-light'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi mx-2 text-primary bi-download" viewBox="0 0 16 16">
                                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                            </svg>
                                            Download PDF
                                        </button>
                                    </a>
                                    <button onClick={() => { router.replace('/home') }} className='mx-3 px-3 btn btn-primary'>Back to Home</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </MenuHome>
            </Layout>
        </>
    )
}

export default SuccessTransfer