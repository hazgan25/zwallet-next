import { useState } from "react"
import Layout from "src/commons/components/Layout"
import MenuHome from "src/commons/components/MenuHome"
import styles from 'src/commons/styles/PersonalInformation.module.css'

import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/router"

import Swal from "sweetalert2"
import { changeNameUser } from "src/modules/utils/users"
import { personalUser } from "src/redux/actions/user"

const PersonalInformation = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const router = useRouter()
    const { user, auth } = state
    const { token, id } = auth.userData
    const { userData } = user
    const { firstName, lastName, email, noTelp } = userData

    const [inputFirstName, setInputFistName] = useState(firstName)
    const [inputLastName, setInputLastName] = useState(lastName)

    const saveHandler = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: true
        })

        swalWithBootstrapButtons.fire({
            title: 'Are You Sure Change Profile?',
            text: 'Click Confirm for Accept',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirm!',
            cancelButtonText: 'Cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                const body = {
                    firstName: inputFirstName,
                    lastName: inputLastName
                }
                changeNameUser(id, body, token)
                    .then((res) => {
                        Swal.fire({
                            title: 'Successed',
                            text: res.data.msg,
                            icon: 'success'
                        })
                        dispatch(personalUser(id, token))
                    }).catch(({ ...err }) => {
                        console.log(err)
                    })
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire('Cancelled')
            }
        })
    }

    return (
        <>
            <Layout title={'Zwallet - Personal Information'}>
                <MenuHome>
                    <main className={styles['information-box']}>
                        <div className="container">
                            <h5 className={styles['personal-info-text']}>Personal Information</h5>
                            <p className={`text-secondary ${styles['info-text']}`}>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
                            <div className={styles['info-box']}>
                                <p className="text-secondary">First Name</p>
                                <input className="fw-bold border-0" value={inputFirstName} onChange={e => setInputFistName(e.target.value)} />
                            </div>
                            <div className={styles['info-box']}>
                                <p className="text-secondary">Last Name</p>
                                <input className="fw-bold border-0" value={inputLastName} onChange={e => setInputLastName(e.target.value)} />
                            </div>
                            <div className={styles['info-box']}>
                                <p className="text-secondary">Verified E-mail</p>
                                <p className="fw-bold">{email}</p>
                            </div>
                            <div className={styles['info-box']}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p className="text-secondary">Phone Number</p>
                                        <p className="fw-bold">{!noTelp ? 'No number Phone' : noTelp}</p>
                                    </div>
                                    <div>
                                        <p className={styles['manage-text']} onClick={() => {
                                            router.push('/manage/phone-number')
                                        }}>Manage</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['btn-query']}>
                                <button className={inputFirstName !== firstName || inputLastName !== lastName ? styles['btn-save-active'] : styles['btn-save']} disabled={inputFirstName !== firstName || inputLastName !== lastName ? false : true} onClick={saveHandler}>Save Change</button>
                            </div>
                        </div>
                    </main>
                </MenuHome>
            </Layout>
        </>
    )
}

export default PersonalInformation