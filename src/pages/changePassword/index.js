import { useState } from "react"
import { useRouter } from "next/router"
import Layout from "src/commons/components/Layout"
import MenuHome from "src/commons/components/MenuHome"
import styles from 'src/commons/styles/ChangePassword.module.css'
import lock from 'src/assets/svg/lock.svg'
import Image from "next/image"

import { Button, Modal } from "react-bootstrap"
import Swal from "sweetalert2"

import { useSelector } from "react-redux"
import { ChangePasswordUser } from "src/modules/utils/users"

const ChangePassword = () => {
    const state = useSelector(state => state)
    const router = useRouter()
    const { token, id } = state.auth.userData

    const [curentPass, setCurentPass] = useState(false)
    const [newPass, setNewPass] = useState(false)
    const [rePass, setRepass] = useState(false)
    const [inputCurrentPass, setInputCurrentPass] = useState('')
    const [inputNewPass, setInputNewPass] = useState('')
    const [inputRePass, setInputRepass] = useState('')

    const [isModal, setIsModal] = useState(false)
    const [isModalLogout, setIsModalLogout] = useState(false)


    const confirmHandler = () => {
        const body = {
            oldPassword: inputCurrentPass,
            newPassword: inputNewPass,
            confirmPassword: inputRePass
        }
        ChangePasswordUser(id, body, token)
            .then((res) => {
                if (res) {
                    setIsModal(!isModal)
                    setIsModalLogout(!isModalLogout)
                }
            }).catch(({ ...err }) => {
                setIsModal(!isModal)
                Swal.fire({
                    title: 'There An Error',
                    text: err.response.data.msg,
                    icon: 'error'
                })
                console.log(body)
            })
    }

    const loginHandler = () => {
        setIsModalLogout(!isModalLogout)
        setTimeout(() => {
            router.replace('/logout')
        }, 1200)

    }

    return (
        <>
            <Layout title={'Zwallet - Change Password'}>
                <MenuHome>
                    <main className={styles['change-password-box']}>
                        <div className="container">
                            <h5 className={styles['change-text']}>Change Password</h5>
                            <p className={`text-secondary ${styles['info-text']}`}>You must enter your current password and then type your new password twice.</p>
                            <div className="d-flex justify-content-center">
                                <div>
                                    <div className={`logo ${styles['logo']}`}>
                                        <Image src={lock} alt='avatar' />
                                    </div>
                                    <input type={curentPass ? 'text' : 'password'} className={`input-auth ${styles['input-auth']}`} placeholder='Current password' onChange={e => setInputCurrentPass(e.target.value)} />
                                    <i className={curentPass ? `bi bi-eye bi-position ${styles['bi-position']}` : `bi bi-eye-slash bi-position ${styles['bi-position']}`} onClick={() => setCurentPass(!curentPass)} ></i>

                                    <div className={`logo ${styles['logo']}`}>
                                        <Image src={lock} alt='avatar' />
                                    </div>
                                    <input type={newPass ? 'text' : 'password'} className={`input-auth ${styles['input-auth']}`} placeholder='New password' onChange={e => setInputNewPass(e.target.value)} />
                                    <i className={newPass ? `bi bi-eye bi-position ${styles['bi-position']}` : `bi bi-eye-slash bi-position ${styles['bi-position']}`} onClick={() => setNewPass(!newPass)} ></i>

                                    <div className={`logo ${styles['logo']}`}>
                                        <Image src={lock} alt='avatar' />
                                    </div>
                                    <input type={rePass ? 'text' : 'password'} className={`input-auth ${styles['input-auth']}`} placeholder='Repeat new password' onChange={e => setInputRepass(e.target.value)} />
                                    <i className={rePass ? `bi bi-eye bi-position ${styles['bi-position']}` : `bi bi-eye-slash bi-position ${styles['bi-position']}`} onClick={() => setRepass(!rePass)} ></i>
                                    <button className={`${styles['btn-change-pass']} ${inputCurrentPass || inputNewPass || inputRePass ? styles['btn-change-acctive'] : ''}`} disabled={inputCurrentPass || inputNewPass || inputRePass ? false : true}
                                        onClick={() => { setIsModal(!isModal) }}>Change Password</button>
                                </div>
                            </div>
                        </div>

                        <Modal show={isModal} onHide={() => { setIsModal(!isModal) }} size='m' aria-labelledby="contained-modal-title-vcenter" centered>
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">Are You Sure Change Password?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p style={{
                                    textAlign: 'center'
                                }}>
                                    Click Confirm for Accept!
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button className='btn-secondary' onClick={() => { setIsModal(!isModal) }}>Cancel</Button>
                                <Button onClick={confirmHandler}>Confirm</Button>
                            </Modal.Footer>
                        </Modal>

                        <Modal show={isModalLogout} size='m' aria-labelledby="contained-modal-title-vcenter" centered>
                            <Modal.Header>
                                <Modal.Title>Successed Change Password</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p style={{
                                    textAlign: 'center'
                                }}>
                                    Please Login Again!
                                </p>
                            </Modal.Body>
                            <Modal.Footer style={{
                                justifyContent: 'center'
                            }}>
                                <Button onClick={loginHandler}>Login</Button>
                            </Modal.Footer>
                        </Modal>
                    </main>
                </MenuHome>
            </Layout>
        </>
    )
}

export default ChangePassword