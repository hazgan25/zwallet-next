import styles from 'src/commons/styles/Header.module.css'
import Image from 'next/image'
// import photoDefault from 'src/assets/img/profile-default.png'

import { useEffect, useState } from 'react'
import { personalData } from 'src/modules/users'
import { personalUser } from 'src/redux/actions/user'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'

const photoDefault = require('src/assets/img/profile-default.png')


const Header = (props) => {
    // console.log(props);
    // let imageProfile
    const [userData, setUserData] = useState(null)
    useEffect(() => {
        const id = props.id
        const token = props.token
        if (props.userData && userData === null) {
            setUserData({ userData: props.userData.userData })
            // console.log(props.userData);
        }

        if (!props.userData) {
            // console.log(props.userData);
            personalData(id, token)
                .then((res) => {
                    // console.log(res.data);
                    props.dispatch(personalUser(res.data.data))
                })
                .catch((err) => {
                    // console.log(err.response.data);
                    Swal.fire(
                        `There is an error ${err.response.data.status}`,
                        `${err.response.data.msg}`,
                        'question'
                    )
                })
        }
    }, [userData, props])

    // console.log(process.env.NEXT_PUBLIC_HOST + '/uploads' + userData.userData.image);
    // const image = process.env.NEXT_PUBLIC_HOST + '/uploads' + userData.userData.image
    // console.log(userData);
    // console.log(photoProfile);
    // console.log(userData.firstName);
    // console.log(userData);
    const myLoader = ({ src }) => {

        // if (userData) return imageProfile = `${process.env.NEXT_PUBLIC_HOST}/uploads/${userData.userData.Image}`
        // if (userData) return imageProfile = photoDefault

        // if (userData) {
        //     console.log(userData.userData.image);
        // }
        if (userData) {
            // console.log(userData.userData.image);
            // const imageProfile = process.env.NEXT_PUBLIC_HOST + '/uploads/' + userData.userData.image
            // console.log(imageProfile);
            // console.log(`${process.env.NEXT_PUBLIC_HOST}/uploads/${userData.userData.Image}`);
            if (userData && userData.userData.Image === null) return 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
            return `${process.env.NEXT_PUBLIC_HOST}/uploads/${userData.userData.image}`
        }
    }
    // console.log(props.userData.image);
    return (
        <>
            <nav className={`navbar navbar-light bg-white shadow ${styles['navbar-light']}`}>
                <div className='container-fluid'>
                    <h4 className={`navbar-brand barand-text ${styles['brand-text']}`}>Zwallet</h4>

                    <div className='d-flex'>
                        <div className={`${styles['photo-profile']}`}>
                            <Image loader={myLoader} src={userData && userData.userData.image !== null ? `${process.env.NEXT_PUBLIC_HOST}/uploads/${userData.userData.image}` :
                                userData && userData.userData.image === null ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' : photoDefault} alt='avatar' width='52' height='52' objectFit='cover' className={`${styles['radius-photo']}`} />
                        </div>

                        <div>
                            <p className={`${styles['name-profile']}`}>{userData ? `${userData.userData.firstName} ${userData.userData.lastName}` : ''}</p>
                            {/* <p className={`${styles['phone-number']}`}>+62 8139 3877 7946</p> */}
                            <p className={`${styles['phone-number']}`}>{userData && userData.userData.noTelp !== null ? `${userData.userData.noTelp}` : 'none'}</p>

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

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        token: state.auth.userData.token,
        id: state.auth.userData.id,
        userData: state.user.data
    }
}

export default connect(mapStateToProps)(Header)