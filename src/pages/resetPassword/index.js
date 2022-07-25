import { useState, useEffect } from "react"

import Layout from 'src/commons/components/Layout'
import Rectangle from 'src/commons/components/Rectangle'
import Image from 'next/image'
import lock from 'src/assets/svg/lock.svg'
import Swal from "sweetalert2"
import { Button, Modal } from "react-bootstrap"

import { useRouter } from "next/router"
import { useSelector } from 'react-redux'
import { resetPasswordUser } from "src/modules/utils/auth"

const ResetPassword = () => {
    const router = useRouter()
    const { key } = router.query

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

    const [showCreatePass, setShowCreatePass] = useState(false)
    const [showRePass, setShowRePass] = useState(false)
    const [inputCreatePass, setInputCreatePass] = useState('')
    const [inpuRePass, setInputRepass] = useState('')
    const [isModal, setIsModal] = useState(false)

    const ResetPasswordHandler = () => {
        const body = {
            keysChangePassword: key,
            newPassword: inputCreatePass,
            confirmPassword: inpuRePass
        }

        resetPasswordUser(body)
            .then((res) => {
                if (res) {
                    setIsModal(!isModal)
                }
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
            <Layout title='Zwallet - Reset Password'>
                <Rectangle>
                    <div className='container'>
                        <h4 className={`start-access-text`} >
                            Did You Forgot Your Password?
                            Don’t Worry, You Can Reset Your
                            Password In a Minutes.
                        </h4>
                        <p className={`description-text`}>
                            Now you can create a new password for your Zwallet account. Type your password twice so we can confirm your new passsword.
                        </p>
                        <div className={`logo`}>
                            <Image src={lock} alt='avatar' />
                        </div>
                        <input name='password' type={showCreatePass ? 'text' : 'password'} className={`input-auth`} placeholder='Enter your Password' onChange={e => setInputCreatePass(e.target.value)} />
                        <i className={showCreatePass ? `bi bi-eye bi-position ` : `bi bi-eye-slash bi-position`} onClick={() => { setShowCreatePass(!showCreatePass) }}></i>
                        <div className={`logo`}>
                            <Image src={lock} alt='avatar' />
                        </div>
                        <input name='password' type={showRePass ? 'text' : 'password'} className={`input-auth`} placeholder='Enter your Password' onChange={e => setInputRepass(e.target.value)} />
                        <i className={showRePass ? `bi bi-eye bi-position ` : `bi bi-eye-slash bi-position`} onClick={() => { setShowRePass(!showRePass) }}></i>

                        <button className={`btn-auth`} onClick={ResetPasswordHandler}>
                            Reset Password
                        </button>
                    </div>

                    <Modal show={isModal} size='m' aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header>
                            <Modal.Title id="contained-modal-title-vcenter">Successed</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p style={{ textAlign: 'center' }}>Success Reset Password, please login Again</p>
                        </Modal.Body>
                        <Modal.Footer style={{ justifyContent: 'center' }}>
                            <Button onClick={() => { router.push('/auth/login') }}>Login</Button>
                        </Modal.Footer>
                    </Modal>
                </Rectangle>
            </Layout>
        </>
    )
}

export default ResetPassword