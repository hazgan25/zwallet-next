import styles from 'src/commons/styles/Header.module.css'
import Image from 'next/image'
import photoDefault from 'src/assets/img/profile-default.png'

const Header = () => {
    return (
        <>
            <nav className={`navbar navbar-light bg-white shadow ${styles['navbar-light']}`}>
                <div className='container-fluid'>
                    <h4 className={`navbar-brand barand-text ${styles['brand-text']}`}>Zwallet</h4>

                    <div className='d-flex'>
                        <div className={`${styles['photo-profile']}`}>
                            <Image src={photoDefault} alt='avatar' width='52' height='52' objectFit='cover' className={`${styles['radius-photo']}`} />
                        </div>

                        <div>
                            <p className={`${styles['name-profile']}`}>Robert Chandler</p>
                            <p className={`${styles['phone-number']}`}>+62 8139 3877 7946</p>
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