import { useState, useEffect } from 'react'
import Layout from 'src/commons/components/Layout'
import Rectangle from 'src/commons/components/Rectangle'
import styles from 'src/commons/styles/password.module.css'
import Image from 'next/image'

import mail from 'src/assets/svg/mail.svg'
import Swal from 'sweetalert2'

import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { forgotPasswordUser } from 'src/modules/utils/auth'

const Password = () => {
    const router = useRouter()
    const [inputEmail, setInputEmail] = useState('')
    const auth = useSelector((state) => state.auth)

    useEffect(() => {
        if (auth.isFulfilled) {
            if (auth.userData.pin === null) {
                router.push('/user/pin')
            } else {
                router.push('/home')
            }
        }
    }, [auth, router])

    const forgotPassHandler = () => {
        const body = {
            email: inputEmail,
            linkDirect: process.env.NEXT_PUBLIC_RESET_PASSWORD
        }
        forgotPasswordUser(body)
            .then((res) => {
                Swal.fire({
                    title: 'Successed',
                    text: res.data.msg,
                    icon: 'success'
                })
            }).catch(({ ...err }) => {
                Swal.fire({
                    title: 'There An Error?',
                    text: err.response.data.msg,
                    icon: 'error'
                })
            })
    }

    return (
        <>
            <Layout title='Zwallet - Forgot Password'>
                <Rectangle>
                    <div className='container'>
                        <h4 className={`start-access-text ${styles['start-access-text']}`} >
                            Did You Forgot Your Password?
                            Don’t Worry, You Can Reset Your
                            Password In a Minutes.
                        </h4>
                        <p className={`description-text ${styles['description-text']}`}>
                            To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.
                        </p>
                        <div className={`logo ${styles['logo']}`}>
                            <Image src={mail} alt='avatar' />
                        </div>
                        <input className={`input-auth ${styles['input-auth']}`} value={inputEmail} placeholder='Enter your e-mail' onChange={e => setInputEmail(e.target.value)} />
                        <button className={`btn-auth ${styles['btn-auth']}`} onClick={forgotPassHandler}>Confirm</button>
                    </div>
                </Rectangle>
            </Layout>
        </>
    )
}

export default Password