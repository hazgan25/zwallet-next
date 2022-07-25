import { useState, useEffect } from 'react'
import Layout from 'src/commons/components/Layout'
import Rectangle from 'src/commons/components/Rectangle'
import style from 'src/commons/styles/pin.module.css'
import Swal from 'sweetalert2'

import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { pinUser } from 'src/modules/utils/users'

const Pin = () => {
    const state = useSelector(state => state)
    const router = useRouter()

    const { token, pin, id } = state.auth.userData

    const [pin1, setPin1] = useState('')
    const [pin2, setPin2] = useState('')
    const [pin3, setPin3] = useState('')
    const [pin4, setPin4] = useState('')
    const [pin5, setPin5] = useState('')
    const [pin6, setPin6] = useState('')

    useEffect(() => {
        if (!token) {
            router.replace('/')
        }
        if (token && pin !== null) {
            router.push('/home')
        }
    }, [token, router, pin])

    const pinHandler = () => {
        const body = {
            pin: pin1 + pin2 + pin3 + pin4 + pin5 + pin6
        }
        pinUser(id, body, token)
            .then((res) => {
                Swal.fire({
                    title: res.data.msg,
                    text: 'Please Login Again',
                    icon: 'success'
                })
                setTimeout(() => {
                    router.replace('/logout')
                }, 4000)
            })
            .catch(({ ...err }) => {
                Swal.fire({
                    title: 'There an Error',
                    text: `${err.response.data.msg}`,
                    icon: 'error'
                })
            })
    }

    return (
        <Layout title={'Zwallet - Create Pin'}>
            <Rectangle>
                <main className='container'>
                    <h4 className={`start-access-text ${style['start-access-text']}`}>
                        Secure Your Account, Your Wallet,
                        and Your Data With 6 Digits PIN
                        That You Created Yourself.
                    </h4>
                    <p className={`description-text ${style['description-text']}`}>
                        Create 6 digits pin to secure all your money and your data in Zwallet app.
                        Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.
                    </p>
                    <section className='container-fluid'>
                        <div className={`row justify-content-between m-0 ${style['justify-content-between']}`}>
                            <div className='col-1'>
                                <input className={`${style['input-pin']}`} maxLength='1' onChange={e => setPin1(e.target.value)} />
                            </div>
                            <div className='col-1'>
                                <input className={`${style['input-pin']}`} maxLength='1' onChange={e => setPin2(e.target.value)} />
                            </div>
                            <div className='col-1'>
                                <input className={`${style['input-pin']}`} maxLength='1' onChange={e => setPin3(e.target.value)} />
                            </div>
                            <div className='col-1'>
                                <input className={`${style['input-pin']}`} maxLength='1' onChange={e => setPin4(e.target.value)} />
                            </div>
                            <div className='col-1'>
                                <input className={`${style['input-pin']}`} maxLength='1' onChange={e => setPin5(e.target.value)} />
                            </div>
                            <div className='col-1'>
                                <input className={`${style['input-pin']}`} maxLength='1' onChange={e => setPin6(e.target.value)} />
                            </div>
                        </div>
                        <button className={`btn-auth ${style['btn-auth']}`} onClick={pinHandler}>Confirm</button>
                    </section>
                </main>
            </Rectangle>
        </Layout>
    )
}

export default Pin