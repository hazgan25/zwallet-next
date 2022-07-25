import { useState } from "react"
import Layout from "src/commons/components/Layout"
import MenuHome from "src/commons/components/MenuHome"
import styles from 'src/commons/styles/ChangePin.module.css'

import Swal from "sweetalert2"

import { useSelector } from "react-redux"
import { pinUser } from 'src/modules/utils/users'

const ChangePin = () => {
    const state = useSelector(state => state)

    const { token, pin, id } = state.auth.userData

    const [pin1, setPin1] = useState('')
    const [pin2, setPin2] = useState('')
    const [pin3, setPin3] = useState('')
    const [pin4, setPin4] = useState('')
    const [pin5, setPin5] = useState('')
    const [pin6, setPin6] = useState('')

    const continueHandler = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: true
        })

        swalWithBootstrapButtons.fire({
            title: 'Are You Sure Change Pin?',
            text: 'Click Confirm for Accept',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirm!',
            cancelButtonText: 'Cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                const body = {
                    pin: pin1 + pin2 + pin3 + pin4 + pin5 + pin6
                }
                pinUser(id, body, token)
                    .then((res) => {
                        Swal.fire({
                            title: res.data.msg,
                            icon: 'success'
                        })
                        setPin1('')
                        setPin2('')
                        setPin3('')
                        setPin4('')
                        setPin5('')
                        setPin6('')
                    })
                    .catch(({ ...err }) => {
                        Swal.fire({
                            title: 'There an Error',
                            text: `${err.response.data.msg}`,
                            icon: 'error'
                        })
                    })
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire(
                    'Cancelled'
                )
            }
        })
    }

    return (
        <>
            <Layout title={'Zwallet - Change Pin'}>
                <MenuHome>
                    <main className={styles['change-pin-box']}>
                        <div className="container">
                            <h5 className={styles['change-text']}>Change PIN</h5>
                            <p className={`text-secondary ${styles['info-text']}`}>Enter your current 6 digits Zwallet PIN below to continue to the next steps.</p>
                            <div className="container">
                                <div className={`row justify-content-between m-0 ${styles['justify-content-between']}`}>
                                    <div className='col-1'>
                                        <input className={`${styles['input-pin']}`} maxLength='1' value={pin1} onChange={e => setPin1(e.target.value)} />
                                    </div>
                                    <div className='col-1'>
                                        <input className={`${styles['input-pin']}`} maxLength='1' value={pin2} onChange={e => setPin2(e.target.value)} />
                                    </div>
                                    <div className='col-1'>
                                        <input className={`${styles['input-pin']}`} maxLength='1' value={pin3} onChange={e => setPin3(e.target.value)} />
                                    </div>
                                    <div className='col-1'>
                                        <input className={`${styles['input-pin']}`} maxLength='1' value={pin4} onChange={e => setPin4(e.target.value)} />
                                    </div>
                                    <div className='col-1'>
                                        <input className={`${styles['input-pin']}`} maxLength='1' value={pin5} onChange={e => setPin5(e.target.value)} />
                                    </div>
                                    <div className='col-1'>
                                        <input className={`${styles['input-pin']}`} maxLength='1' value={pin6} onChange={e => setPin6(e.target.value)} />
                                    </div>
                                    <button className={`${styles['btn-continue']} ${pin1 && pin2 && pin3 && pin4 && pin5 && pin6 ? styles['btn-continue-active'] : ''}`}
                                        disabled={pin1 && pin2 && pin3 && pin4 && pin5 && pin6 ? false : true} onClick={continueHandler}
                                    >Continue</button>
                                </div>
                            </div>
                        </div>
                    </main>
                </MenuHome>
            </Layout>
        </>
    )
}

export default ChangePin