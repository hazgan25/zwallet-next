import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Layout from "src/commons/components/Layout"
import MenuHome from "src/commons/components/MenuHome"
import styles from 'src/commons/styles/ManagePhone.module.css'
import Swal from "sweetalert2"

import { addChangePhoneUser } from "src/modules/utils/users"
import { personalUser } from 'src/redux/actions/user'

const ManagePhoneNumber = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const { auth, user } = state
    const { noTelp, id } = user.userData
    const { token } = auth.userData

    const [changePhone, setChangePhone] = useState(!noTelp ? '' : noTelp)

    const saveHander = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-secondary'
            },
            buttonsStyling: true
        })

        swalWithBootstrapButtons.fire({
            title: !noTelp ? 'Are You sure Add Phone Number' : 'Are You Sure Save New Phone Number',
            text: 'Click Confirm for Accept',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirm!',
            cancelButtonText: 'Cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                const body = {
                    noTelp: changePhone
                }
                addChangePhoneUser(id, body, token)
                    .then(() => {
                        dispatch(personalUser(id, token))
                        swalWithBootstrapButtons.fire({
                            title: 'Success!',
                            text: !noTelp ? 'Success Add Phone Number' : 'Success Change Phone Number',
                            icon: 'success'
                        })
                    }).catch(({ ...err }) => {
                        console.log(err)
                    })
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire(
                    'Cancelled'
                )
            }
        })
    }

    return (
        <>
            <Layout title={'Zwallet - Manage Phone Number'}>
                <MenuHome>
                    <main className={styles['manage-box']}>
                        <div className="container">
                            <h5 className={`${styles['manage-text']}`}>{!noTelp ? 'Add Phone Number' : 'Manage Phone Number'}</h5>
                            <p className={`text-secondary pb-5 ${styles['info-text']}`}>
                                {!noTelp ? 'Add at least one phone number for the transfer ID so you can start transfering your money to another user.' : 'You can change the phone number and then you save new  number.'}
                            </p>
                            <div className="pt-5 d-flex justify-content-center flex-column align-items-center">
                                <div className={styles['bi']}>
                                    <i className={`bi bi-telephone text-secondary`}></i>
                                    <span>+62</span>
                                </div>
                                <input value={changePhone} type={'tel'} className={`mb-5 ${styles['input-number']}`} onChange={e => setChangePhone(e.target.value)} />
                                <button className={noTelp === changePhone ? styles['btn-phone'] : !noTelp && changePhone === '' ? styles['btn-phone'] : styles['btn-phone-active']} disabled={noTelp === changePhone ? true : !noTelp && changePhone === '' || changePhone === '' ? true : false} onClick={saveHander}>{!noTelp ? 'Add Phone Number' : 'Save Change Number'}</button>
                            </div>
                        </div>
                    </main>
                </MenuHome>
            </Layout>
        </>
    )
}

export default ManagePhoneNumber