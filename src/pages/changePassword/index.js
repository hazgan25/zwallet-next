import { useState } from "react"
import Layout from "src/commons/components/Layout"
import MenuHome from "src/commons/components/MenuHome"
import styles from 'src/commons/styles/ChangePassword.module.css'
import lock from 'src/assets/svg/lock.svg'
import Image from "next/image"

const ChangePassword = () => {

    const [curentPass, setCurentPass] = useState(false)
    const [newPass, setNewPass] = useState(false)
    const [rePass, setRepass] = useState(false)
    const [inputCurrentPass, setInputCurrentPass] = useState('')
    const [inputNewPass, setInputNewPass] = useState('')
    const [inputRePass, setInputRepass] = useState('')

    return (
        <>
            <Layout title={'Zwallet - Change Password'}>
                <MenuHome>
                    <main className={styles['change-password-box']}>
                        <div className="container">
                            <h5 className={styles['change-text']}>Change Password</h5>
                            <p className={`text-secondary pb-5 ${styles['info-text']}`}>You must enter your current password and then type your new password twice.</p>
                            <div className="d-flex justify-content-center">
                                <div>
                                    <div className={`logo ${styles['logo']}`}>
                                        <Image src={lock} alt='avatar' />
                                    </div>
                                    <input type={curentPass ? 'text' : 'password'} className={`input-auth ${styles['input-auth']}`} placeholder='Current password' />
                                    <i className={curentPass ? `bi bi-eye bi-position ${styles['bi-position']}` : `bi bi-eye-slash bi-position ${styles['bi-position']}`} onClick={() => setCurentPass(!curentPass)} ></i>

                                    <div className={`logo ${styles['logo']}`}>
                                        <Image src={lock} alt='avatar' />
                                    </div>
                                    <input type={newPass ? 'text' : 'password'} className={`input-auth ${styles['input-auth']}`} placeholder='New password' />
                                    <i className={newPass ? `bi bi-eye bi-position ${styles['bi-position']}` : `bi bi-eye-slash bi-position ${styles['bi-position']}`} onClick={() => setNewPass(!newPass)} ></i>

                                    <div className={`logo ${styles['logo']}`}>
                                        <Image src={lock} alt='avatar' />
                                    </div>
                                    <input type={rePass ? 'text' : 'password'} className={`input-auth ${styles['input-auth']}`} placeholder='Repeat new password' />
                                    <i className={rePass ? `bi bi-eye bi-position ${styles['bi-position']}` : `bi bi-eye-slash bi-position ${styles['bi-position']}`} onClick={() => setRepass(!rePass)} ></i>
                                    <button>Change Password</button>
                                </div>
                            </div>
                        </div>
                    </main>
                </MenuHome>
            </Layout>
        </>
    )
}

export default ChangePassword