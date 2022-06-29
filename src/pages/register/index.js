import { useState } from 'react'
import { useRouter } from 'next/router'
import { register } from 'src/modules/utils/auth'
import Layout from 'src/commons/components/Layout'
import Rectangle from 'src/commons/components/Rectangle'
import Image from 'next/image'
import Link from 'next/link'

import human from 'src/assets/svg/human.svg'
import mail from 'src/assets/svg/mail.svg'
import lock from 'src/assets/svg/lock.svg'
import Swal from 'sweetalert2'

const Register = () => {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = (e) => {
        e.preventDefault()
        const body = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        register(body)
            .then((res) => {
                Swal.fire(
                    {
                        title: `${res.data.msg}`,
                        text: 'check email for verification',
                        icon: 'success',
                        timer: 15000
                    }
                )
                setTimeout(() => {
                    router.push('/login')
                }, 4000)
            })
            .catch((err) => {
                console.log(err.response.data.msg);
                Swal.fire(
                    {
                        title: 'There is an error',
                        text: `${err.response.data.msg}`,
                        icon: 'question',
                        timer: 15000
                    }
                )
            })
    }
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

                    <form onSubmit={handleRegister}>
                        <div className='logo'>
                            <Image src={human} alt='avater' />
                        </div>
                        <input name='firstName' className='input-auth' placeholder='Enter your firstname' />

                        <div className='logo'>
                            <Image src={human} alt='avater' />
                        </div>
                        <input name='lastName' className='input-auth' placeholder='Enter your lastname' />

                        <div className='logo'>
                            <Image src={mail} alt='avatar' />
                        </div>
                        <input name='email' className='input-auth' placeholder='Enter your e-mail' />
                        <div className='logo'>
                            <Image src={lock} alt='avatar' />
                        </div>
                        <input name='password' type={showPassword ? 'text' : 'password'} id='password' className='input-auth' placeholder='Enter your Password' />
                        <i className={showPassword ? 'bi bi-eye bi-position' : 'bi bi-eye-slash bi-position'} onClick={() => setShowPassword(!showPassword)} ></i>

                        <button type='submit' className='btn-auth'>
                            Sign Up
                        </button>

                    </form>
                    <p className='account-text'>Already have an account? Let’s
                        <Link href='/auth/login' passHref>
                            <span className='login-text'> Login</span>
                        </Link>
                    </p>
                </div>
            </Rectangle>
        </Layout>

    )
}

export default Register