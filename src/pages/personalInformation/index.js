import Layout from "src/commons/components/Layout"
import MenuHome from "src/commons/components/MenuHome"
import styles from 'src/commons/styles/PersonalInformation.module.css'

import { useSelector } from "react-redux"

const PersonalInformation = () => {
    const state = useSelector(state => state)
    const { user } = state
    const { userData } = user
    const { firstName, lastName, email, noTelp } = userData
    return (
        <>
            <Layout title={'Zwallet - Personal Information'}>
                <MenuHome>
                    <main className={styles['information-box']}>
                        <div className="container">
                            <h5 className="p-3">Personal Information</h5>
                            <p className={`p-3 text-secondary ${styles['info-text']}`}>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
                            <div className={styles['info-box']}>
                                <p className="text-secondary">First Name</p>
                                <p className="fw-bold">{firstName}</p>
                            </div>
                            <div className={styles['info-box']}>
                                <p className="text-secondary">Last Name</p>
                                <p className="fw-bold">{lastName}</p>
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
                                        <p className={styles['manage-text']}>Manage</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </MenuHome>
            </Layout>
        </>
    )
}

export default PersonalInformation