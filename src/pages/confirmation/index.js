import Image from 'next/image'
import Layout from 'src/commons/components/Layout'
import MenuHome from 'src/commons/components/MenuHome'
import photoDefault from 'src/assets/img/profile-default.png'
import styles from 'src/commons/styles/Confirmation.module.css'
import formatRupiah from 'src/modules/helper/formarterRupiah'

import { Modal } from 'react-bootstrap'
import Swal from 'sweetalert2'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { checkPin } from 'src/modules/utils/users'
import { useRouter } from 'next/router'

import { transferFeatureAction, transferParamAction } from 'src/redux/actions/transfer'


const Confirmation = () => {
    const state = useSelector((state) => state)
    const router = useRouter()
    const dispatch = useDispatch()

    const { auth, userTransfer, user } = state
    const { token } = auth.userData
    const { transaction } = userTransfer
    const { amount, notes, receiverId } = transaction
    const { firstName, lastName, noTelp, image } = userTransfer.userData

    const { balance } = user.userData

    useEffect(() => {
        if (!userTransfer.userData.id) {
            router.back()
        }
    }, [userTransfer.userData.id, router])

    const [isModal, setIsModal] = useState(false)
    const [pin1, setPin1] = useState('')
    const [pin2, setPin2] = useState('')
    const [pin3, setPin3] = useState('')
    const [pin4, setPin4] = useState('')
    const [pin5, setPin5] = useState('')
    const [pin6, setPin6] = useState('')
    const [transfer, setTransfer] = useState(transaction)

    const d = new Date()

    const continueHandler = () => {
        if (pin1 === '' || pin2 === '' || pin3 === '' || pin4 === '' || pin5 === '' || pin6 === '') {
            Swal.fire({
                title: 'There an Error?',
                text: 'Pin must be filled',
                icon: 'question'
            })
        } else {
            const pin = pin1 + pin2 + pin3 + pin4 + pin5 + pin6
            checkPin(pin, token)
                .then((res) => {
                    if (res) {
                        const body = {
                            receiverId: receiverId,
                            amount: amount,
                            notes: notes
                        }
                        dispatch(transferFeatureAction(body, token))
                            .then((res) => {
                                Swal.fire({
                                    title: 'Success',
                                    text: res.value.data.msg,
                                    icon: 'success'
                                })
                                refreshPin()
                                setTimeout(() => {
                                    router.push('/transfer/success')
                                }, 3000)
                                const param = {
                                    ...transfer,
                                    id: res.action.payload.data.data.id
                                }
                                setTransfer(param)
                                dispatch(transferParamAction(param))
                            })
                            .catch(({ ...err }) => {
                                if (err) {
                                    Swal.fire({
                                        title: 'Successed',
                                        text: `${err.response.data.msg}`,
                                        icon: 'error'
                                    })
                                }
                            })
                    }
                })
                .catch(({ ...err }) => {
                    Swal.fire({
                        title: 'There an Error?',
                        text: err.response.data.msg,
                        icon: 'error'
                    })
                    setIsModal(!isModal)
                    refreshPin()
                })
        }
    }
    console.log(notes)

    const refreshPin = () => {
        setPin1('')
        setPin2('')
        setPin3('')
        setPin4('')
        setPin5('')
        setPin6('')
    }

    return (
        <>
            <Layout title='Zwallet - Transfer Confirmation'>
                <MenuHome>
                    <div className={`${styles['transfer-box']}`} style={{ height: '100%' }}>
                        <div className='container'>
                            <h5 className={`${styles['transfer-text']}`}>Transfer To</h5>
                            <div className={`${styles['box']}`}>
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
                                <h5 className={`${styles['details-text']}`}>Details</h5>
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
                            </div>
                            <button className={`btn btn-primary ${styles['button']}`} onClick={() => setIsModal(!isModal)}>Continue</button>
                            <Modal show={isModal} onHide={() => { setIsModal(false) }}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Enter Pin to Transfer</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>Enter your 6 digit Pin for confirmation to continnue transfering money.</p>
                                    <section className='container-fluid'>
                                        <div className={`row justify-content-between m-0`}>
                                            <div className='col-1'>
                                                <input className={`${styles['input-pin']}`} maxLength='1' onChange={e => setPin1(e.target.value)} />
                                            </div>
                                            <div className='col-1'>
                                                <input className={`${styles['input-pin']}`} maxLength='1' onChange={e => setPin2(e.target.value)} />
                                            </div>
                                            <div className='col-1'>
                                                <input className={`${styles['input-pin']}`} maxLength='1' onChange={e => setPin3(e.target.value)} />
                                            </div>
                                            <div className='col-1'>
                                                <input className={`${styles['input-pin']}`} maxLength='1' onChange={e => setPin4(e.target.value)} />
                                            </div>
                                            <div className='col-1'>
                                                <input className={`${styles['input-pin']}`} maxLength='1' onChange={e => setPin5(e.target.value)} />
                                            </div>
                                            <div className='col-1'>
                                                <input className={`${styles['input-pin']}`} maxLength='1' onChange={e => setPin6(e.target.value)} />
                                            </div>
                                        </div>
                                    </section>
                                </Modal.Body>
                                <Modal.Footer>
                                    <button className='btn btn-primary' type='submit' onClick={continueHandler}>Continue</button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </MenuHome>
            </Layout>
        </>
    )
}

export default Confirmation