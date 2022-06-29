import { useEffect, useState } from 'react'
import Layout from 'src/commons/components/Layout'
import Rectangle from 'src/commons/components/Rectangle'
import Image from 'next/image'
import Link from 'next/link'

import styles from 'src/commons/styles/MediaLogin.module.css'
import mail from 'src/assets/svg/mail.svg'
import lock from 'src/assets/svg/lock.svg'

import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from 'src/redux/actions/auth'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter()
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)

    const handleLogin = (e) => {
        e.preventDefault()
        const body = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        dispatch(loginAction(body))
    }

    useEffect(() => {
        if (auth.isReject) {
            console.log('ini err', auth.errData)
        }
        if (auth.isFulfilled) {
            if (auth.userData.pin === null) {
                router.push('/user/pin')
            } else {
                router.push('/home')
            }
        }
    })

    return (
        <Layout title='Zwallet - Login '>
            <Rectangle>
                <div className='container'>
                    <h4 className={`start-access-text ${styles['start-access-text']}`} >Start Accessing Banking Needs
                        With All Devices and All Platforms
                        With 30.000+ Users
                    </h4>
                    <p className={`description-text ${styles['description-text']}`}>Transfering money is eassier than ever,
                        you can access Zwallet wherever you are. Desktop, laptop,
                        mobile phone? we cover all of that for you!
                    </p>

                    <form onSubmit={handleLogin}>
                        <div className={`logo ${styles['logo']}`}>
                            <Image src={mail} alt='avatar' />
                        </div>
                        <input name='email' type='text' className={`input-auth ${styles['input-auth']}`} placeholder='Enter your e-mail' />

                        <div className={`logo ${styles['logo']}`}>
                            <Image src={lock} alt='avatar' />
                        </div>
                        <input name='password' type={showPassword ? 'text' : 'password'} id='password' className={`input-auth ${styles['input-auth']}`} placeholder='Enter your Password' />
                        <i className={showPassword ? `bi bi-eye bi-position ${styles['bi-position']}` : `bi bi-eye-slash bi-position ${styles['bi-position']}`} onClick={() => setShowPassword(!showPassword)} ></i>

                        <Link href='/auth/forgot/password' passHref>
                            <p className='forgot-password-text'>Forgot password?</p>
                        </Link>

                        <button type='submit' className={`btn-auth ${styles['btn-auth']}`}>
                            Login
                        </button>

                    </form>

                    <p className={`account-text ${styles['account-text']}`}>Don’t have an account? Let’s
                        <Link href='/auth/register' passHref>
                            <span className='login-text'> Sign Up</span>
                        </Link>
                    </p>
                </div>
            </Rectangle>
        </Layout >
    )
}

export default Login