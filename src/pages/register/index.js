import { useState } from 'react'
import Layout from 'src/commons/components/Layout'
import Rectangle from 'src/commons/components/Rectangle'
import Image from 'next/image'
import Link from 'next/link'

import human from 'src/assets/svg/human.svg'
import mail from 'src/assets/svg/mail.svg'
import lock from 'src/assets/svg/lock.svg'

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <Layout title='Zwallet - Register'>
            <Rectangle>
                <div className='container'>
                    <h4 className='start-access-text' >Start Accessing Banking Needs
                        With All Devices and All Platforms
                        With 30.000+ Users</h4>
                    <p className='description-text'>Transfering money is eassier than ever,
                        you can access Zwallet wherever you are. Desktop, laptop,
                        mobile phone? we cover all of that for you!</p>
                    <form>
                        <div className='logo'>
                            <Image src={human} alt='avater' />
                        </div>
                        <input className='input-auth' placeholder='Enter your firstname' />

                        <div className='logo'>
                            <Image src={human} alt='avater' />
                        </div>
                        <input className='input-auth' placeholder='Enter your lastname' />

                        <div className='logo'>
                            <Image src={mail} alt='avatar' />
                        </div>
                        <input className='input-auth' placeholder='Enter your e-mail' />
                        <div className='logo'>
                            <Image src={lock} alt='avatar' />
                        </div>
                        <input type={showPassword ? 'text' : 'password'} name='password' id='password' className='input-auth' placeholder='Enter your Password' />
                        <i className={showPassword ? 'bi bi-eye bi-position' : 'bi bi-eye-slash bi-position'} onClick={() => setShowPassword(!showPassword)} ></i>

                        <button type='submit' className='btn-auth'>
                            Sign Up
                        </button>

                        <p className='account-text'>Already have an account? Let’s
                            <Link href='/auth/login' passHref>
                                <span className='login-text'> Login</span>
                            </Link>
                        </p>
                    </form>
                </div>
            </Rectangle>
        </Layout>

    )
}

export default Register