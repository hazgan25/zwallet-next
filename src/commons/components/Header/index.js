import styles from 'src/commons/styles/Header.module.css'
import Image from 'next/image'
import photoDefault from 'src/assets/img/profile-default.png'
import { useRouter } from 'next/router'

import { personalUser } from 'src/redux/actions/user'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const Header = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const { id, token } = state.auth.userData

    const router = useRouter()

    const { userData } = state.user
    const { image, firstName, lastName, noTelp } = userData

    useEffect(() => {
        if (token) {
            dispatch(personalUser(id, token))
                .catch((err) => {
                    if (err) {
                        router.replace('/')
                    }
                })
        } else {
            router.replace('/')
        }
    }, [dispatch, id, token, router])
    return (
        <>
            <nav className={`navbar navbar-light bg-white shadow ${styles['navbar-light']}`}>
                <div className='container-fluid'>
                    <h4 className={`navbar-brand barand-text ${styles['brand-text']}`}>Zwallet</h4>

                    <div className='d-flex'>
                        <div className={`${styles['photo-profile']}`}>
                            <Image src={!image ? photoDefault : `${process.env.NEXT_PUBLIC_IMAGE_USER}/${image}`}
                                alt='avatar' width='52' height='52' objectFit='cover' className={`${styles['radius-photo']}`} onError={(e) => {
                                    e.currentTarget.onerror = null
                                    currentTarget.src = `${photoDefault}`
                                }} />
                        </div>

                        <div>
                            <p className={`${styles['name-profile']}`}>{`${firstName} ${lastName}`}</p>
                            <p className={`${styles['phone-number']}`}>{noTelp !== null ? noTelp : 'no phone number'}</p>
                        </div>

                        <div className={`${styles['positition-bell']}`}>
                            <h5 className='bi bi-bell'></h5>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header

// const Header = (props) => {
//     const id = props.id
//     const token = props.token

//     //info user
//     const firstName = props.firstName
//     const lastName = props.lastName
//     const image = props.image
//     const noTelp = props.noTelp
//     const balance = props.balance

//     props.userDataDispatch(id, token)

//     return (
//         <>
//             <nav className={`navbar navbar-light bg-white shadow ${styles['navbar-light']}`}>
//                 <div className='container-fluid'>
//                     <h4 className={`navbar-brand barand-text ${styles['brand-text']}`}>Zwallet</h4>

//                     <div className='d-flex'>
//                         <div className={`${styles['photo-profile']}`}>
//                             <Image src={
//                                 !image ? photoDefault :
//                                     !`${process.env.NEXT_PUBLIC_IMAGE_USER}/${image}` ? photoDefault :
//                                         `${process.env.NEXT_PUBLIC_IMAGE_USER}/${image}`
//                             }
//                                 placeholder='blur'
//                                 blurDataURL={photoDefault}
//                                 onError={() => {
//                                     photoDefault
//                                 }}
//                                 alt='avatar' width='52' height='52' objectFit='cover' className={`${styles['radius-photo']}`} />
//                         </div>

//                         <div>
//                             <p className={`${styles['name-profile']}`}>{`${firstName} ${lastName}`}</p>
//                             <p className={`${styles['phone-number']}`}>{noTelp !== null ? noTelp : 'no phone number'}</p>
//                         </div>

//                         <div className={`${styles['positition-bell']}`}>
//                             <h5 className='bi bi-bell'></h5>
//                         </div>

//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// const mapStateToProps = (state) => {
//     // console.log(state);
//     return {
//         token: state.auth.userData.token,
//         id: state.auth.userData.id,
//         firstName: state.user.userData.firstName,
//         lastName: state.user.userData.lastName,
//         image: state.user.userData.image,
//         noTelp: state.user.userData.noTelp,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         userDataDispatch: (id, token) => {
//             dispatch(personalUser(id, token))
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Header)
// // export default Header

// // export default connect(mapStateToProps)(Header);