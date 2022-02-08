import Layout from 'src/commons/components/Layout'
import Rectangle from 'src/commons/components/Rectangle'
import styles from 'src/commons/styles/password.module.css'
import Image from 'next/image'

import mail from 'src/assets/svg/mail.svg'

const Password = () => {
    return (
        <Layout title='Zwallet - Forgot Password'>
            <Rectangle>
                <div className='container'>
                    <h4 className={`start-access-text ${styles['start-access-text']}`} >
                        Start Accessing Banking Needs
                        Did You Forgot Your Password?
                        Don’t Worry, You Can Reset Your
                        Password In a Minutes.
                    </h4>
                    <p className={`description-text ${styles['description-text']}`}>
                        Transfering money is eassier than ever,
                        To reset your password, you must type your
                        e-mail and we will send a link to your email
                        and you will be directed to the reset password screens.
                    </p>
                    <form>
                        <div className={`logo ${styles['logo']}`}>
                            <Image src={mail} alt='avatar' />
                        </div>
                        <input className={`input-auth ${styles['input-auth']}`} placeholder='Enter your e-mail' />
                        <button className={`btn-auth ${styles['btn-auth']}`}>Confirm</button>
                    </form>
                </div>
            </Rectangle>
        </Layout>
    )
}

export default Password;
